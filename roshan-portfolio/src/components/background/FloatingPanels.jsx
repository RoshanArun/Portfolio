import { motion, useReducedMotion } from "framer-motion";

export default function FloatingPanels() {
  const prefersReducedMotion = useReducedMotion();
  const panels = [
    { text: "npm run build  ✓", top: "18%", left: "6%", rotate: -7, delay: 0 },
    { text: "animation engine online", top: "27%", left: "73%", rotate: 6, delay: 0.4 },
    { text: "latency: 24ms", top: "72%", left: "7%", rotate: 4, delay: 0.8 },
    { text: "design system: synced", top: "68%", left: "70%", rotate: -5, delay: 1.2 },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 z-20 hidden overflow-hidden [@media(min-width:1536px)]:block">
      {panels.map((panel) => (
        <motion.div
          key={panel.text}
          initial={{ opacity: 0, y: 20, rotate: panel.rotate }}
          animate={prefersReducedMotion ? { opacity: 0.62, y: 0, rotate: panel.rotate } : { opacity: 0.62, y: [0, -12, 0], rotate: [panel.rotate, panel.rotate + 1.5, panel.rotate] }}
          transition={{ opacity: { delay: panel.delay, duration: 1 }, y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: panel.delay }, rotate: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: panel.delay } }}
          className="absolute rounded-2xl border border-sky-300/15 bg-[#0b1220]/55 px-5 py-3 font-mono text-xs text-sky-100 shadow-2xl shadow-black/10 backdrop-blur-xl"
          style={{ top: panel.top, left: panel.left }}
        >
          {panel.text}
        </motion.div>
      ))}
    </div>
  );
}

