import { useCallback, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useIsSmallScreen } from "../hooks/useMediaQuery";
import SectionBridge from "../components/common/SectionBridge";
import SectionHeader from "../components/common/SectionHeader";
import MotionPlayground from "../components/toybox/MotionPlayground";
import ConstellationsPlayground from "../components/toybox/ConstellationsPlayground";
import SystemsPlayground from "../components/toybox/SystemsPlayground";

const defaultPlayboxSize = { width: 1152, height: 700 };

export default function Toybox() {
  const [resetSignal, setResetSignal] = useState(0);
  const [activeMode, setActiveMode] = useState("motion");
  const [playboxSize, setPlayboxSize] = useState(defaultPlayboxSize);
  const [sizeResetAnimating, setSizeResetAnimating] = useState(false);
  const isSmallScreen = useIsSmallScreen();

  const resizeRaf = useRef(null);

  const startResize = useCallback((event) => {
    if (isSmallScreen) return;
    setSizeResetAnimating(false);
    event.preventDefault();
    event.stopPropagation();
    const startX = event.clientX;
    const startY = event.clientY;
    const startWidth = playboxSize.width;
    const startHeight = playboxSize.height;
    let latestEvent = event;

    const applyResize = () => {
      resizeRaf.current = null;
      setPlayboxSize({
        width: Math.min(Math.max(startWidth + latestEvent.clientX - startX, 760), 1400),
        height: Math.min(Math.max(startHeight + latestEvent.clientY - startY, 620), 1050),
      });
    };

    const move = (moveEvent) => {
      latestEvent = moveEvent;
      if (!resizeRaf.current) resizeRaf.current = window.requestAnimationFrame(applyResize);
    };

    const stop = () => {
      if (resizeRaf.current) {
        window.cancelAnimationFrame(resizeRaf.current);
        resizeRaf.current = null;
        applyResize();
      }
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", stop);
    };

    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", stop);
  }, [isSmallScreen, playboxSize.height, playboxSize.width]);

  const resetPlayboxSize = useCallback(() => {
    setSizeResetAnimating(true);
    setPlayboxSize(defaultPlayboxSize);
    window.setTimeout(() => setSizeResetAnimating(false), 560);
  }, []);

  const modeCopy = useMemo(() => ({
    motion: {
      title: "Motion playground",
      description: "Throw draggable objects around and let the motion system do the work.",
    },
    constellations: {
      title: "Constellations",
      description: "Click to drop star points, then drag them around to redesign the constellation.",
    },
    systems: {
      title: "Systems playground",
      description: "Drag architecture nodes anywhere and watch the connection lines follow.",
    },
  }), []);

  const modeNames = useMemo(() => Object.keys(modeCopy), [modeCopy]);

  return (
    <section id="toybox" className="relative hidden overflow-hidden px-4 py-[4.5rem] text-white sm:px-6 sm:py-32 lg:block">
      <SectionBridge />
      <div className="relative z-10">
        <SectionHeader
          eyebrow="Toybox"
          title="Different ways to play with the interface."
          description="Each mode is a different interaction concept instead of the same idea with renamed buttons."
        />

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className={`relative mx-auto flex flex-col overflow-visible rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-4 shadow-2xl shadow-black/10 backdrop-blur-xl sm:rounded-[2.5rem] sm:p-6 ${sizeResetAnimating ? "transition-[width,height] duration-500 ease-out" : ""}`}
          style={{
            width: isSmallScreen ? "100%" : playboxSize.width,
            maxWidth: isSmallScreen ? "calc(100vw - 32px)" : "calc(100vw - 48px)",
            height: isSmallScreen ? "auto" : playboxSize.height,
            minHeight: isSmallScreen ? 0 : undefined,
          }}
        >
          <style>{`
            .systems-scroll { scrollbar-width: thin; scrollbar-color: rgba(125, 211, 252, 0.55) rgba(255, 255, 255, 0.06); }
            .systems-scroll::-webkit-scrollbar { width: 8px; height: 8px; }
            .systems-scroll::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.06); border-radius: 999px; }
            .systems-scroll::-webkit-scrollbar-thumb { background: rgba(125, 211, 252, 0.45); border-radius: 999px; border: 2px solid rgba(5, 7, 12, 0.55); }
            .systems-scroll::-webkit-scrollbar-thumb:hover { background: rgba(125, 211, 252, 0.70); }
          `}</style>
          <div className="absolute inset-0 overflow-hidden rounded-[1.75rem] sm:rounded-[2.5rem]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.14),transparent_42%),linear-gradient(to_bottom,rgba(255,255,255,0.04),transparent)]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.035)_1px,transparent_1px)] bg-[size:54px_54px] opacity-70" />
          </div>

          <div className="relative z-10 flex shrink-0 flex-col gap-3 border-b border-white/10 pb-4 lg:flex-row lg:items-center lg:justify-between lg:pb-5">
            <div className="min-w-0">
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-sky-300">{activeMode}</p>
              <h3 className="mt-2 text-xl font-black sm:text-2xl">{modeCopy[activeMode].title}</h3>
              <p className="mt-2 max-w-xl text-xs leading-5 text-slate-400 sm:text-sm">{modeCopy[activeMode].description}</p>
            </div>
            <div className="flex shrink-0 flex-nowrap gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {modeNames.map((modeName) => (
                <button
                  key={modeName}
                  type="button"
                  onClick={() => {
                    setActiveMode(modeName);
                    setResetSignal((value) => value + 1);
                  }}
                  className={`shrink-0 whitespace-nowrap rounded-full border px-3 py-2 text-[11px] font-bold uppercase tracking-[0.12em] transition sm:px-3.5 sm:text-xs sm:tracking-[0.16em] ${
                    activeMode === modeName
                      ? "border-sky-300/40 bg-sky-300/20 text-sky-100"
                      : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
                  }`}
                >
                  {modeName}
                </button>
              ))}
              <button
                type="button"
                onClick={() => setResetSignal((value) => value + 1)}
                className="shrink-0 whitespace-nowrap rounded-full border border-white/20 bg-white px-3 py-2 text-[11px] font-black uppercase tracking-[0.12em] text-[#080c14] transition hover:bg-sky-200 sm:px-3.5 sm:text-xs sm:tracking-[0.16em]"
              >
                Reset
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeMode}
              className="relative z-10 mt-4 min-h-0 sm:mt-6 lg:flex-1 [transform:translateZ(0)]"
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -18, scale: 0.98 }}
              transition={{ duration: 0.35 }}
            >
              {activeMode === "motion" && <MotionPlayground resetSignal={resetSignal} />}
              {activeMode === "constellations" && <ConstellationsPlayground resetSignal={resetSignal} />}
              {activeMode === "systems" && <SystemsPlayground resetSignal={resetSignal} />}
            </motion.div>
          </AnimatePresence>


          <button
            type="button"
            aria-label="Resize toybox. Double click to reset to the original size."
            title="Drag to resize. Double click to reset."
            onDoubleClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              resetPlayboxSize();
            }}
            onPointerDown={startResize}
            className="absolute bottom-3 right-3 z-30 hidden h-10 w-10 cursor-nwse-resize rounded-br-[1.4rem] opacity-70 transition hover:opacity-100 sm:block"
          >
            <span className="absolute bottom-2 right-2 h-4 w-4 rounded-br-xl border-b-2 border-r-2 border-sky-200/70" />
            <span className="absolute bottom-2 right-2 h-6 w-6 rounded-br-2xl border-b-2 border-r-2 border-sky-200/40" />
            <span className="absolute bottom-2 right-2 h-8 w-8 rounded-br-[1.25rem] border-b-2 border-r-2 border-sky-200/20" />
          </button>
        </motion.div>

        <p className="mx-auto mt-4 w-fit max-w-[calc(100%-2rem)] rounded-full border border-white/10 bg-white/[0.065] px-4 py-2 text-center text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400 shadow-xl shadow-black/10 backdrop-blur sm:text-[11px]">
          Desktop: drag corner to resize · double-click to reset. Mobile: touch-friendly layout.
        </p>
      </div>
    </section>
  );
}

