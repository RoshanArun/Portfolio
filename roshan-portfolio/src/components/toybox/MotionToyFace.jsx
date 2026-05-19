import React from "react";
import { motion } from "framer-motion";

const MotionToyFace = React.memo(function MotionToyFace({ toy }) {
  if (toy.kind === "magnet") {
    return (
      <div className="relative h-full w-full overflow-hidden rounded-[1.5rem] p-3">
        <div className="text-[10px] font-black uppercase tracking-[0.2em] text-sky-200/75">Magnet</div>
        <div className="relative mt-3 h-12">
          <motion.span
            animate={{ x: [0, 34, 0], scale: [1, 1.18, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-0 top-3 h-6 w-6 rounded-full border border-sky-200/35 bg-sky-300/20 shadow-[0_0_24px_rgba(125,211,252,0.45)]"
          />
          <motion.span
            animate={{ x: [0, -34, 0], scale: [1, 1.18, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-0 top-3 h-6 w-6 rounded-full border border-white/30 bg-white/10 shadow-[0_0_24px_rgba(255,255,255,0.24)]"
          />
          <motion.div
            animate={{ opacity: [0.15, 0.75, 0.15], scaleX: [0.4, 1, 0.4] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-7 right-7 top-6 h-px origin-center bg-sky-200/60"
          />
        </div>
      </div>
    );
  }

  if (toy.kind === "orbit") {
    return (
      <div className="relative grid h-full w-full place-items-center">
        <motion.span animate={{ rotate: 360 }} transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }} className="absolute inset-2 rounded-full border border-dashed border-sky-200/35">
          <span className="absolute -top-1 left-1/2 h-3 w-3 rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,0.95)]" />
        </motion.span>
        <motion.span animate={{ rotate: -360 }} transition={{ duration: 7, repeat: Infinity, ease: "linear" }} className="absolute inset-8 rounded-full border border-white/15">
          <span className="absolute -bottom-1 left-1/3 h-2.5 w-2.5 rounded-full bg-sky-200 shadow-[0_0_18px_rgba(125,211,252,0.95)]" />
        </motion.span>
        <span className="text-sm">Orbit</span>
      </div>
    );
  }

  if (toy.kind === "ease") {
    return (
      <div className="w-28 sm:w-40">
        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-sky-200/70"><span>Ease</span><span>curve</span></div>
        <div className="mt-3 h-1 rounded-full bg-white/10">
          <motion.div animate={{ x: [0, 78, 0] }} transition={{ duration: 2.4, repeat: Infinity, ease: [0.16, 1, 0.3, 1] }} className="h-2.5 w-2.5 -translate-y-1 rounded-full bg-sky-200 shadow-[0_0_18px_rgba(125,211,252,0.9)]" />
        </div>
      </div>
    );
  }

  if (toy.kind === "signal") {
    return (
      <div className="min-w-20 sm:min-w-28">
        <div className="text-[10px] font-black uppercase tracking-[0.2em] text-sky-200/75">Signal</div>
        <div className="mt-2 flex h-8 items-end gap-1 sm:mt-3 sm:h-10 sm:gap-1.5">
          {[22, 44, 30, 56, 38, 48].map((height, index) => (
            <motion.span
              key={index}
              animate={{ height: [height, 10 + ((height + index * 11) % 52), height] }}
              transition={{ duration: 1.2 + index * 0.08, repeat: Infinity, ease: "easeInOut", delay: index * 0.04 }}
              className="w-2 rounded-full bg-sky-300/30 ring-1 ring-sky-200/25 sm:w-3"
              style={{ height }}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative grid h-full w-full place-items-center overflow-hidden rounded-full">
      {[0, 1, 2].map((ring) => (
        <motion.span
          key={ring}
          animate={{ scale: [0.15, 1.2], opacity: [0.75, 0] }}
          transition={{ duration: 2.1, repeat: Infinity, ease: "easeOut", delay: ring * 0.45 }}
          className="absolute h-12 w-12 rounded-full border border-sky-200/45 sm:h-16 sm:w-16"
        />
      ))}
      <span className="relative z-10 text-xs font-black">Ripple</span>
    </div>
  );
});


export default MotionToyFace;
