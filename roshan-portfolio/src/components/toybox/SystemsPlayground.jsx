import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Trash2 } from "lucide-react";
import { smoothResetDuration, springResetTransition } from "../../constants/motion";

const SystemsNode = React.memo(function SystemsNode({ node, pixel, onStartDrag, selected, resetAnimating, children }) {
  return (
    <motion.button
      type="button"
      onPointerDown={(event) => onStartDrag(event, node)}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 1.04 }}
      initial={false}
      animate={{ left: pixel.x, top: pixel.y }}
      transition={resetAnimating ? springResetTransition : { duration: 0 }}
      className={`absolute z-10 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 cursor-grab select-none place-items-center rounded-full border px-2 text-center text-[10px] font-black text-white shadow-2xl shadow-black/10 backdrop-blur active:cursor-grabbing [touch-action:none] sm:h-20 sm:w-20 sm:px-3 sm:text-xs ${
        selected ? "border-sky-200/80 bg-sky-300/25 ring-4 ring-sky-300/20" : "border-sky-300/20 bg-[#111d32]/90"
      }`}
    >
      <span className="line-clamp-2 leading-tight">{children}</span>
    </motion.button>
  );
});


export default function SystemsPlayground({ resetSignal }) {
  const boardRef = useRef(null);
  const defaultNodes = useMemo(
    () => [
      { id: "ui", label: "UI", x: 0.2, y: 0.22 },
      { id: "state", label: "State", x: 0.43, y: 0.18 },
      { id: "api", label: "API", x: 0.7, y: 0.32 },
      { id: "cpp", label: "C++", x: 0.32, y: 0.72 },
      { id: "swift", label: "Swift", x: 0.66, y: 0.74 },
    ],
    []
  );

  const defaultLinks = useMemo(
    () => [
      ["ui", "state"],
      ["state", "api"],
      ["state", "cpp"],
      ["cpp", "swift"],
      ["swift", "api"],
    ],
    []
  );

  const makePositions = (nodes) => Object.fromEntries(nodes.map((node) => [node.id, { x: node.x, y: node.y }]));
  const [nodes, setNodes] = useState(defaultNodes);
  const [nodePositions, setNodePositions] = useState(() => makePositions(defaultNodes));
  const [links, setLinks] = useState(defaultLinks);
  const [newSystemName, setNewSystemName] = useState("");
  const [selectedNodes, setSelectedNodes] = useState([]);
  const [boardSize, setBoardSize] = useState({ width: 640, height: 420 });
  const [resetAnimating, setResetAnimating] = useState(false);
  const dragState = useRef({ moved: false, id: null, startX: 0, startY: 0, rect: null });

  useEffect(() => {
    setResetAnimating(true);
    setNodes(defaultNodes);
    setNodePositions(makePositions(defaultNodes));
    setLinks(defaultLinks);
    setNewSystemName("");
    setSelectedNodes([]);
    const timer = window.setTimeout(() => setResetAnimating(false), smoothResetDuration);
    return () => window.clearTimeout(timer);
  }, [resetSignal, defaultNodes, defaultLinks]);

  useEffect(() => {
    const board = boardRef.current;
    if (!board) return;

    const updateSize = () => {
      const rect = board.getBoundingClientRect();
      if (rect.width && rect.height) setBoardSize({ width: rect.width, height: rect.height });
    };

    updateSize();
    if (typeof ResizeObserver === "undefined") {
      window.addEventListener("resize", updateSize);
      return () => window.removeEventListener("resize", updateSize);
    }

    const observer = new ResizeObserver(updateSize);
    observer.observe(board);
    return () => observer.disconnect();
  }, []);

  const clampRatioPoint = (x, y) => ({
    x: Math.min(Math.max(x, 0.08), 0.92),
    y: Math.min(Math.max(y, 0.1), 0.9),
  });

  const ratioToPixels = (position) => ({
    x: position.x * boardSize.width,
    y: position.y * boardSize.height,
  });

  const updateNodeFromClient = useCallback((id, clientX, clientY, rectOverride) => {
    const rect = rectOverride || boardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const next = clampRatioPoint((clientX - rect.left) / rect.width, (clientY - rect.top) / rect.height);
    setNodePositions((current) => ({ ...current, [id]: next }));
  }, []);

  const linkKey = (a, b) => `${a}::${b}`;

  const toggleLink = (fromNode, toNode) => {
    if (!fromNode || !toNode || fromNode === toNode) return;
    const key = linkKey(fromNode, toNode);
    setLinks((current) => {
      const exists = current.some(([from, to]) => linkKey(from, to) === key);
      if (exists) return current.filter(([from, to]) => linkKey(from, to) !== key);
      return [...current, [fromNode, toNode]];
    });
  };

  const pickNode = (id) => {
    setSelectedNodes((current) => {
      if (current.includes(id)) return current.filter((item) => item !== id);
      const next = [...current, id].slice(-2);
      if (next.length === 2) {
        toggleLink(next[0], next[1]);
        return [];
      }
      return next;
    });
  };

  const startNodeDrag = (event, node) => {
    event.preventDefault();
    event.stopPropagation();
    event.currentTarget.setPointerCapture?.(event.pointerId);
    const rect = boardRef.current.getBoundingClientRect();
    dragState.current = { moved: false, id: node.id, startX: event.clientX, startY: event.clientY, rect };
    let latestEvent = event;
    let frame = null;

    const applyMove = () => {
      frame = null;
      const distance = Math.hypot(latestEvent.clientX - dragState.current.startX, latestEvent.clientY - dragState.current.startY);
      if (distance > 3) dragState.current.moved = true;
      updateNodeFromClient(node.id, latestEvent.clientX, latestEvent.clientY, rect);
    };

    const move = (moveEvent) => {
      latestEvent = moveEvent;
      if (frame === null) frame = window.requestAnimationFrame(applyMove);
    };

    const stop = () => {
      if (frame !== null) {
        window.cancelAnimationFrame(frame);
        applyMove();
      }
      if (!dragState.current.moved) pickNode(node.id);
      dragState.current = { moved: false, id: null, startX: 0, startY: 0, rect: null };
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", stop);
      window.removeEventListener("pointercancel", stop);
    };

    window.addEventListener("pointermove", move, { passive: false });
    window.addEventListener("pointerup", stop);
    window.addEventListener("pointercancel", stop);
  };

  const addSystem = () => {
    const label = newSystemName.trim() || `System ${nodes.length + 1}`;
    const id = `${label.toLowerCase().replace(/[^a-z0-9]+/g, "-") || "system"}-${Date.now()}`;
    const column = nodes.length % 3;
    const row = Math.floor(nodes.length / 3) % 3;
    const nextPosition = clampRatioPoint(0.2 + column * 0.26, 0.24 + row * 0.22);
    const nextNode = { id, label, ...nextPosition };

    setNodes((current) => [...current, nextNode]);
    setNodePositions((current) => ({ ...current, [id]: nextPosition }));
    setLinks((current) => (nodes.length ? [...current, [nodes[nodes.length - 1].id, id]] : current));
    setSelectedNodes([id]);
    setNewSystemName("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addSystem();
  };

  const removeLink = (fromNode, toNode) => {
    const key = linkKey(fromNode, toNode);
    setLinks((current) => current.filter(([from, to]) => linkKey(from, to) !== key));
  };

  const nodeLabelMap = useMemo(() => Object.fromEntries(nodes.map((node) => [node.id, node.label])), [nodes]);
  const labelFor = useCallback((id) => nodeLabelMap[id] || id, [nodeLabelMap]);

  const linkSegments = useMemo(() =>
    links
      .filter(([from, to]) => nodePositions[from] && nodePositions[to])
      .map(([from, to], index) => {
        const a = ratioToPixels(nodePositions[from]);
        const b = ratioToPixels(nodePositions[to]);
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const distance = Math.hypot(dx, dy) || 1;
        const ux = dx / distance;
        const uy = dy / distance;
        const nodeRadius = boardSize.width < 520 ? 34 : 42;
        const hasReverse = links.some(([otherFrom, otherTo]) => otherFrom === to && otherTo === from);
        const offsetDirection = hasReverse && from > to ? -1 : 1;
        const offset = hasReverse ? 7 * offsetDirection : 0;
        const ox = -uy * offset;
        const oy = ux * offset;
        return {
          x1: a.x + ux * nodeRadius + ox,
          y1: a.y + uy * nodeRadius + oy,
          x2: b.x - ux * nodeRadius + ox,
          y2: b.y - uy * nodeRadius + oy,
          from,
          to,
          stroke: index % 2 === 0 ? "rgba(125,211,252,0.34)" : "rgba(255,255,255,0.18)",
          pulse: index % 2 === 0 ? "rgba(125,211,252,0.78)" : "rgba(255,255,255,0.55)",
        };
      }),
    [links, nodePositions, boardSize.width, boardSize.height]
  );

  return (
    <div className="systems-scroll relative z-10 grid min-h-0 gap-4 overflow-visible lg:h-full lg:grid-cols-[0.82fr_1.18fr] lg:gap-6">
      <style>{`
        .systems-scroll { scrollbar-width: thin; scrollbar-color: rgba(125, 211, 252, 0.55) rgba(255, 255, 255, 0.06); }
        .systems-scroll::-webkit-scrollbar { width: 8px; height: 8px; }
        .systems-scroll::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.06); border-radius: 999px; }
        .systems-scroll::-webkit-scrollbar-thumb { background: rgba(125, 211, 252, 0.45); border-radius: 999px; border: 2px solid rgba(5, 7, 12, 0.55); }
        .systems-scroll::-webkit-scrollbar-thumb:hover { background: rgba(125, 211, 252, 0.70); }
        .systems-link-dash { animation: systemsLineDashFlow 2.8s linear infinite; }
        .system-name-input:-webkit-autofill,
        .system-name-input:-webkit-autofill:hover,
        .system-name-input:-webkit-autofill:focus,
        .system-name-input:-webkit-autofill:active {
          -webkit-text-fill-color: rgb(255, 255, 255) !important;
          caret-color: rgb(255, 255, 255) !important;
          box-shadow: 0 0 0 1000px rgba(0, 0, 0, 0.25) inset !important;
          border-color: rgba(255, 255, 255, 0.10) !important;
          transition: background-color 9999s ease-in-out 0s;
        }
        .system-name-input { color-scheme: dark; }
        @keyframes systemsLineDashFlow { from { stroke-dashoffset: 0; } to { stroke-dashoffset: -44; } }
      `}</style>
      <div className="systems-scroll hidden min-h-0 rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-4 sm:block sm:rounded-[2rem] sm:p-5 lg:overflow-auto">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-sky-300 sm:text-xs sm:tracking-[0.25em]">systems</p>
        <h4 className="mt-2 text-xl font-black sm:mt-3 sm:text-2xl">Build the architecture map</h4>
        <p className="mt-3 text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
          Add named systems, drag nodes, then click two nodes to create or remove directed flows between them.
        </p>

        <form onSubmit={handleSubmit} className="mt-5 rounded-2xl border border-white/10 bg-white/[0.05] p-3 sm:mt-7 sm:p-4">
          <label className="text-xs font-black uppercase tracking-[0.22em] text-slate-400" htmlFor="system-name">New system name</label>
          <div className="mt-3 flex flex-col gap-2 sm:flex-row">
            <div className="relative min-w-0 flex-1">
              <input
                id="system-name"
                value={newSystemName}
                onChange={(event) => setNewSystemName(event.target.value)}
                placeholder="Auth, Cache, DB..."
                autoComplete="off"
                spellCheck="false"
                className="system-name-input w-full rounded-full border border-white/10 bg-white/[0.055] px-4 py-2 pr-10 text-sm text-white outline-none placeholder:text-slate-500 focus:border-sky-300/45"
              />
              {newSystemName && (
                <button
                  type="button"
                  aria-label="Clear system name"
                  onClick={() => setNewSystemName("")}
                  className="absolute right-2 top-1/2 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-white/[0.07] text-xs font-black text-slate-300 transition hover:border-sky-300/30 hover:bg-sky-300/15 hover:text-white"
                >
                  ×
                </button>
              )}
            </div>
            <button
              type="submit"
              className="rounded-full border border-sky-300/30 bg-sky-300/15 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-sky-100 transition hover:bg-sky-300/25"
            >
              Add
            </button>
          </div>
        </form>

        <div className="mt-3 rounded-2xl border border-white/10 bg-white/[0.05] p-3 sm:mt-4 sm:p-4">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-slate-400">Connections</p>
          <p className="mt-2 text-xs leading-5 text-slate-400 sm:text-sm sm:leading-6">
            Tap a source node, then a destination node to toggle that flow.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {selectedNodes.map((id) => (
              <span key={id} className="rounded-full border border-sky-300/30 bg-sky-300/15 px-3 py-1 text-xs font-black text-sky-100">
                {labelFor(id)} selected
              </span>
            ))}
            {selectedNodes.length > 0 && (
              <button type="button" onClick={() => setSelectedNodes([])} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-bold text-slate-300 hover:bg-white/10">
                Clear selection
              </button>
            )}
          </div>
          <div className="systems-scroll mt-4 max-h-32 space-y-2 overflow-auto pr-1">
            {links.length === 0 && <p className="text-xs text-slate-500">No active links yet.</p>}
            {links.map(([from, to]) => (
              <button
                key={linkKey(from, to)}
                type="button"
                onClick={() => removeLink(from, to)}
                className="mr-2 rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5 text-xs text-slate-300 transition hover:border-sky-300/30 hover:bg-white/10 hover:text-white"
                title="Click to remove this connection"
              >
                {labelFor(from)} → {labelFor(to)} ×
              </button>
            ))}
          </div>
        </div>

      </div>

      <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-3 sm:hidden">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <div className="relative min-w-0 flex-1">
            <input
              value={newSystemName}
              onChange={(event) => setNewSystemName(event.target.value)}
              placeholder="New system name"
              autoComplete="off"
              spellCheck="false"
              className="system-name-input w-full rounded-full border border-white/10 bg-white/[0.055] px-3 py-2 pr-9 text-xs text-white outline-none placeholder:text-slate-500 focus:border-sky-300/45"
            />
            {newSystemName && (
              <button
                type="button"
                aria-label="Clear system name"
                onClick={() => setNewSystemName("")}
                className="absolute right-1.5 top-1/2 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-white/[0.07] text-xs font-black text-slate-300 transition hover:border-sky-300/30 hover:bg-sky-300/15 hover:text-white"
              >
                ×
              </button>
            )}
          </div>
          <button type="submit" className="rounded-full border border-sky-300/30 bg-sky-300/15 px-4 py-2 text-[11px] font-black uppercase tracking-[0.12em] text-sky-100">
            Add
          </button>
        </form>
        <p className="mt-2 text-center text-[11px] leading-5 text-slate-400">Tap source, then destination to toggle that flow. Tap a chip below to remove it.</p>
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {links.map(([from, to]) => (
            <button key={linkKey(from, to)} type="button" onClick={() => removeLink(from, to)} className="shrink-0 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[11px] text-slate-300">
              {labelFor(from)} → {labelFor(to)} ×
            </button>
          ))}
        </div>
      </div>

      <div ref={boardRef} data-systems-board className="relative h-[430px] min-h-[380px] shrink-0 overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.045] [touch-action:none] sm:h-[430px] sm:rounded-[2rem] lg:h-full lg:min-h-[360px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(125,211,252,0.10),transparent_20%),radial-gradient(circle_at_72%_70%,rgba(255,255,255,0.07),transparent_25%)]" />
        <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden opacity-80">
          {linkSegments.map((linkItem, index) => (
            <g key={`${linkItem.from}-${linkItem.to}-${index}`}>
              <motion.line
                initial={false}
                animate={{ x1: linkItem.x1, y1: linkItem.y1, x2: linkItem.x2, y2: linkItem.y2 }}
                transition={resetAnimating ? springResetTransition : { duration: 0 }}
                stroke={linkItem.stroke}
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="10 12"
                className="systems-link-dash"
              />
              <motion.circle
                r="3.4"
                fill={linkItem.pulse}
                initial={false}
                animate={{
                  cx: [linkItem.x1, linkItem.x2],
                  cy: [linkItem.y1, linkItem.y2],
                  opacity: [0, 0.95, 0],
                  scale: [0.75, 1.1, 0.75],
                }}
                transition={{
                  cx: { duration: 2.1, repeat: Infinity, ease: "easeInOut", delay: index * 0.18 },
                  cy: { duration: 2.1, repeat: Infinity, ease: "easeInOut", delay: index * 0.18 },
                  opacity: { duration: 2.1, repeat: Infinity, ease: "easeInOut", delay: index * 0.18 },
                  scale: { duration: 2.1, repeat: Infinity, ease: "easeInOut", delay: index * 0.18 },
                }}
              />
            </g>
          ))}
        </svg>

        {nodes.map((node) => {
          const pixel = ratioToPixels(nodePositions[node.id] || { x: node.x, y: node.y });
          return (
            <SystemsNode
              key={node.id}
              node={node}
              pixel={pixel}
              onStartDrag={startNodeDrag}
              selected={selectedNodes.includes(node.id)}
              resetAnimating={resetAnimating}
            >
              {node.label}
            </SystemsNode>
          );
        })}

      </div>

      <div className="hidden gap-3 sm:flex sm:flex-wrap sm:items-center sm:justify-center lg:col-span-2 lg:grid lg:grid-cols-[0.82fr_1.18fr] lg:gap-6">
        <div className="flex justify-center">
          <div className="rounded-full border border-white/10 bg-white/[0.055] px-4 py-2 font-mono text-xs text-slate-300 backdrop-blur">
            <span className="text-sky-300">systems</span>.count({nodes.length}); <span className="text-sky-300">links</span>.count({links.length});
          </div>
        </div>
        <div className="flex justify-center">
          <div className="rounded-full border border-white/10 bg-white/[0.055] px-4 py-2 text-center text-xs font-semibold text-slate-300 backdrop-blur">
            <span className="text-white">System mode:</span> drag nodes like stars · click source then destination to toggle a flow
          </div>
        </div>
      </div>
    </div>
  );
}

