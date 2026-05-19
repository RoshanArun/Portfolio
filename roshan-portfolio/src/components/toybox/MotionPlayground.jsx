import { motion, useReducedMotion } from "framer-motion";
import { useIsSmallScreen } from "../../hooks/useMediaQuery";
import DraggableToy from "./DraggableToy";
import MotionToyFace from "./MotionToyFace";

export default function MotionPlayground({ resetSignal }) {
  const isSmallScreen = useIsSmallScreen();
  const prefersReducedMotion = useReducedMotion();
  const toys = isSmallScreen
    ? [
        { label: "Magnet", left: "18%", top: "12%", shape: "panel", kind: "magnet" },
        { label: "Orbit", left: "60%", top: "10%", shape: "orb", kind: "orbit" },
        { label: "Ease", left: "44%", top: "45%", shape: "wide", kind: "ease" },
        { label: "Signal", left: "13%", top: "72%", shape: "bars", kind: "signal" },
        { label: "Ripple", left: "61%", top: "73%", shape: "ripple", kind: "ripple" },
      ]
    : [
        { label: "Magnet", left: "6%", top: "13%", shape: "panel", kind: "magnet" },
        { label: "Orbit", left: "66%", top: "5%", shape: "orb", kind: "orbit" },
        { label: "Ease", left: "75%", top: "46%", shape: "wide", kind: "ease" },
        { label: "Signal", left: "9%", top: "72%", shape: "bars", kind: "signal" },
        { label: "Ripple", left: "56%", top: "72%", shape: "ripple", kind: "ripple" },
      ];

  const toyClass = (shape) => {
    if (shape === "orb") {
      return "grid h-[5.6rem] w-[5.6rem] place-items-center rounded-full border border-sky-300/20 bg-sky-300/10 text-[10px] font-black uppercase tracking-[0.14em] text-sky-100 shadow-2xl shadow-sky-950/30 backdrop-blur sm:h-[7.65rem] sm:w-[7.65rem] sm:text-[11px]";
    }
    if (shape === "panel") {
      return "min-h-[5.25rem] w-[6.35rem] rounded-[1.25rem] border border-sky-300/20 bg-[#0b1220]/90 text-[10px] font-black text-white shadow-2xl shadow-black/40 backdrop-blur sm:min-h-[5.25rem] sm:w-[8.5rem] sm:rounded-[1.5rem] sm:text-xs";
    }
    if (shape === "wide") {
      return "rounded-2xl border border-sky-300/20 bg-[#0b1220]/90 px-3 py-3 text-xs font-black text-white shadow-2xl shadow-black/40 backdrop-blur sm:px-5 sm:py-4 sm:text-sm";
    }
    if (shape === "bars") {
      return "rounded-[1.35rem] border border-sky-300/20 bg-[#0b1220]/90 px-2.5 py-2 text-[10px] font-black text-white shadow-2xl shadow-black/40 backdrop-blur sm:rounded-[1.7rem] sm:px-3.5 sm:py-3 sm:text-[11px]";
    }
    return "grid h-[4.7rem] w-[4.7rem] place-items-center rounded-full border border-sky-300/20 bg-[#0b1220]/90 text-xs font-black text-white shadow-2xl shadow-black/40 backdrop-blur sm:h-[5.75rem] sm:w-[5.75rem] sm:text-sm";
  };

  return (
    <div className="relative z-10 h-[510px] overflow-visible rounded-[1.5rem] border border-white/10 bg-black/20 sm:h-full sm:min-h-[430px] sm:rounded-[2rem]">
      <motion.div animate={prefersReducedMotion ? undefined : { rotate: 360 }} transition={{ duration: 38, repeat: Infinity, ease: "linear" }} className="absolute left-[45%] top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-sky-300/15 sm:left-[43%] sm:h-64 sm:w-64" />
      <motion.div animate={prefersReducedMotion ? undefined : { rotate: -360 }} transition={{ duration: 54, repeat: Infinity, ease: "linear" }} className="absolute left-[45%] top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 sm:left-[43%] sm:h-44 sm:w-44" />

      {toys.map((toy) => (
        <DraggableToy key={toy.label} resetSignal={resetSignal} initial={{ left: toy.left, top: toy.top }} className={toyClass(toy.shape)}>
          <MotionToyFace toy={toy} />
        </DraggableToy>
      ))}

      <DraggableToy
        resetSignal={resetSignal}
        initial={{ left: isSmallScreen ? "15%" : "21%", top: isSmallScreen ? "45%" : "40%" }}
        className="w-[68%] max-w-xs rounded-2xl border border-white/10 bg-[#080c14]/85 p-3 font-mono text-[10px] leading-5 text-slate-300 shadow-2xl shadow-black/30 backdrop-blur sm:w-[44%] sm:max-w-md sm:p-5 sm:text-sm"
      >
        <p><span className="text-sky-300">motion</span>.play(&#123; magnet, orbit, ease, signal, ripple &#125;);</p>
      </DraggableToy>
    </div>
  );
}

