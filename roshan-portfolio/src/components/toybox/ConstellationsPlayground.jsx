import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { smoothResetDuration, springResetTransition } from "../../constants/motion";

export default function ConstellationsPlayground({ resetSignal }) {
  const boardRef = useRef(null);
  const defaultPoints = useMemo(
    () => [
      { id: 1, x: 0.22, y: 0.28 },
      { id: 2, x: 0.46, y: 0.16 },
      { id: 3, x: 0.72, y: 0.36 },
      { id: 4, x: 0.62, y: 0.74 },
      { id: 5, x: 0.32, y: 0.66 },
    ],
    []
  );
  const [points, setPoints] = useState(defaultPoints);
  const [boardSize, setBoardSize] = useState({ width: 640, height: 420 });
  const [resetAnimating, setResetAnimating] = useState(false);

  useEffect(() => {
    setResetAnimating(true);
    setPoints(defaultPoints);
    const timer = window.setTimeout(() => setResetAnimating(false), smoothResetDuration);
    return () => window.clearTimeout(timer);
  }, [resetSignal, defaultPoints]);

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
    x: Math.min(Math.max(x, 0.04), 0.96),
    y: Math.min(Math.max(y, 0.06), 0.94),
  });

  const ratioToPixels = (point) => ({
    x: point.x * boardSize.width,
    y: point.y * boardSize.height,
  });

  const updatePoint = (id, clientX, clientY, rectOverride) => {
    const rect = rectOverride || boardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const next = clampRatioPoint((clientX - rect.left) / rect.width, (clientY - rect.top) / rect.height);
    setPoints((current) => current.map((point) => (point.id === id ? { ...point, ...next } : point)));
  };

  const handleBoardClick = (event) => {
    if (event.target.closest("[data-constellation-point]")) return;
    const rect = boardRef.current.getBoundingClientRect();
    const next = clampRatioPoint((event.clientX - rect.left) / rect.width, (event.clientY - rect.top) / rect.height);
    setPoints((current) => [...current, { id: Date.now(), ...next }]);
  };

  const startDrag = (event, point) => {
    event.preventDefault();
    event.stopPropagation();
    event.currentTarget.setPointerCapture?.(event.pointerId);
    const rect = boardRef.current.getBoundingClientRect();
    let latestEvent = event;
    let frame = null;

    const applyMove = () => {
      frame = null;
      updatePoint(point.id, latestEvent.clientX, latestEvent.clientY, rect);
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
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", stop);
      window.removeEventListener("pointercancel", stop);
    };

    window.addEventListener("pointermove", move, { passive: false });
    window.addEventListener("pointerup", stop);
    window.addEventListener("pointercancel", stop);
  };

  const sortedPoints = useMemo(() => [...points].sort((a, b) => a.id - b.id), [points]);

  return (
    <div className="systems-scroll relative z-10 grid min-h-0 gap-4 overflow-visible lg:h-full lg:grid-cols-[0.76fr_1.24fr] lg:gap-6">
      <style>{`
        .line-dash-flow { animation: lineDashFlow 2.6s linear infinite; }
        @keyframes lineDashFlow { from { stroke-dashoffset: 0; } to { stroke-dashoffset: -36; } }
      `}</style>
      <div className="systems-scroll hidden min-h-0 rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-4 sm:block sm:rounded-[2rem] sm:p-5 lg:overflow-auto">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-sky-300 sm:text-xs sm:tracking-[0.25em]">constellations</p>
        <h4 className="mt-2 text-xl font-black sm:mt-3 sm:text-2xl">Draw your own star map</h4>
        <p className="mt-3 text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
          Click the sky to drop a point. Drag any star to redesign the constellation.
        </p>
        <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.05] p-3 font-mono text-xs text-slate-300 sm:mt-8 sm:p-4 sm:text-sm">
          <span className="text-sky-300">stars</span>.connect({points.length});
        </div>
        <button
          type="button"
          onClick={() => setPoints([])}
          className="mt-3 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[11px] font-black uppercase tracking-[0.14em] text-slate-200 transition hover:bg-white/10 sm:mt-4 sm:text-xs sm:tracking-[0.18em]"
        >
          Clear stars
        </button>
      </div>

      <div ref={boardRef} onClick={handleBoardClick} className="relative h-[430px] min-h-[380px] shrink-0 overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-3 [touch-action:none] sm:h-[420px] sm:rounded-[2rem] sm:p-5 lg:h-full lg:min-h-[360px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_20%,rgba(125,211,252,0.13),transparent_18%),radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.08),transparent_24%)]" />
        <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-visible opacity-90">
          {sortedPoints.slice(1).map((point, index) => {
            const previous = sortedPoints[index];
            const a = ratioToPixels(previous);
            const b = ratioToPixels(point);
            return (
              <motion.line
                key={`${previous.id}-${point.id}`}
                initial={false}
                animate={{ x1: a.x, y1: a.y, x2: b.x, y2: b.y }}
                transition={resetAnimating ? springResetTransition : { duration: 0 }}
                stroke="rgba(125,211,252,0.42)"
                strokeWidth="2"
                strokeDasharray="8 10"
                className="line-dash-flow"
              />
            );
          })}
        </svg>

        {points.map((point, index) => {
          const pixel = ratioToPixels(point);
          return (
            <motion.button
              key={point.id}
              type="button"
              data-constellation-point
              onPointerDown={(event) => startDrag(event, point)}
              initial={false}
              animate={{ left: pixel.x, top: pixel.y }}
              transition={resetAnimating ? springResetTransition : { duration: 0 }}
              className="absolute z-10 grid h-9 w-9 -translate-x-1/2 -translate-y-1/2 cursor-grab place-items-center rounded-full border border-sky-200/40 bg-sky-300/15 text-[10px] font-black text-sky-50 shadow-[0_0_24px_rgba(125,211,252,0.45)] backdrop-blur active:cursor-grabbing"
            >
              {index + 1}
            </motion.button>
          );
        })}

        {points.length === 0 && <p className="absolute inset-x-0 top-1/2 text-center text-sm text-slate-400">Click anywhere to start a new constellation.</p>}
      </div>
    </div>
  );
}

