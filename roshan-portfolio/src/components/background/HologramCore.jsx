import { motion, useReducedMotion } from "framer-motion";

export default function HologramCore() {
  const prefersReducedMotion = useReducedMotion();
  const rings = [
    { size: "h-[320px] w-[320px] sm:h-[420px] sm:w-[420px] lg:h-[520px] lg:w-[520px]", speed: 28, border: "border-sky-300/20" },
    { size: "h-[255px] w-[255px] sm:h-[335px] sm:w-[335px] lg:h-[405px] lg:w-[405px]", speed: 38, border: "border-white/14", reverse: true },
    { size: "h-[185px] w-[185px] sm:h-[235px] sm:w-[235px] lg:h-[280px] lg:w-[280px]", speed: 20, border: "border-blue-400/20" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.35, ease: "easeOut" }}
      className="relative mx-auto mt-16 h-[360px] w-full max-w-xl sm:h-[460px] lg:mt-0 lg:h-[620px]"
    >
      <div className="absolute inset-0 rounded-full bg-sky-400/10 blur-3xl" />

      {rings.map((ring, index) => (
        <motion.div
          key={ring.size}
          animate={prefersReducedMotion ? undefined : { rotate: ring.reverse ? -360 : 360 }}
          transition={{ duration: ring.speed, repeat: Infinity, ease: "linear" }}
          className={`absolute left-1/2 top-1/2 ${ring.size} -translate-x-1/2 -translate-y-1/2 rounded-full border ${ring.border}`}
        >
          <motion.span
            className="absolute -top-1 left-1/2 h-3 w-3 rounded-full bg-sky-300 shadow-[0_0_26px_rgba(125,211,252,1)]"
            animate={prefersReducedMotion ? { opacity: 0.75 } : { scale: [1, 1.5, 1], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2.4, delay: index * 0.3, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      ))}

      <motion.div
        animate={prefersReducedMotion ? undefined : { y: [0, -16, 0], rotateX: [0, 8, 0], rotateY: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 w-[90%] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-[2rem] border border-white/15 bg-[#0b1220]/70 p-5 shadow-2xl shadow-sky-500/10 backdrop-blur-2xl"
      >
        <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-sky-400/12 via-transparent to-white/5" />
        <div className="relative">
          <div className="mb-5 flex items-center gap-2 border-b border-white/10 pb-4">
            <span className="h-3 w-3 rounded-full bg-sky-300 shadow-[0_0_18px_rgba(125,211,252,0.9)]" />
            <span className="h-3 w-3 rounded-full bg-slate-400/80" />
            <span className="h-3 w-3 rounded-full bg-white/70" />
            <span className="ml-auto rounded-full border border-sky-300/20 bg-sky-300/10 px-3 py-1 text-xs font-bold text-sky-100">LIVE BUILD</span>
          </div>

          <div className="grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
              <div className="mb-3 flex items-center justify-between text-xs text-slate-400">
                <span>interface.quality</span>
                <span className="text-sky-300">99%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  animate={{ width: ["22%", "99%", "61%", "99%"] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-sky-300 to-white"
                />
              </div>
              <div className="mt-5 space-y-3 font-mono text-xs text-slate-300 sm:text-sm">
                <div><span className="text-sky-300">const</span> product = <span className="text-white">"polished"</span>;</div>
                <div><span className="text-sky-300">ship</span>(motion + cleanCode);</div>
                <div><span className="text-slate-500">// precise, fast, memorable</span></div>
              </div>
            </div>

            <div className="grid gap-3">
              {["React", "Swift", "C++", "Next"].map((item, index) => (
                <motion.div
                  key={item}
                  animate={{ x: [0, 5, 0], opacity: [0.72, 1, 0.72] }}
                  transition={{ duration: 3, delay: index * 0.25, repeat: Infinity, ease: "easeInOut" }}
                  className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm font-black text-white"
                >
                  <span className="mr-3 text-sky-300">0{index + 1}</span>{item}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

