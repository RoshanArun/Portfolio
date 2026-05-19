import { motion, useReducedMotion } from "framer-motion";

export default function NetworkMap() {
  const prefersReducedMotion = useReducedMotion();
  const lines = [
    "M40 130 C180 20 260 250 420 120 S650 160 840 60",
    "M80 380 C210 260 340 480 520 330 S710 250 860 390",
    "M120 80 C280 170 360 20 520 140 S720 250 880 120",
    "M20 250 C180 160 280 320 455 230 S700 120 890 280",
  ];

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-45 sm:opacity-60 xl:opacity-80">
      <svg className="absolute inset-0 h-full w-full scale-[1.18] sm:scale-105 xl:scale-100" viewBox="0 0 900 520" preserveAspectRatio="none">
        {lines.map((line, index) => (
          <motion.path
            key={line}
            d={line}
            fill="none"
            stroke={index === 1 ? "rgba(255,255,255,0.24)" : "rgba(56,189,248,0.30)"}
            strokeWidth={index === 3 ? "0.9" : "1.2"}
            strokeDasharray="9 16"
            initial={{ pathLength: 0 }}
            animate={prefersReducedMotion ? { pathLength: 1, opacity: 0.35 } : { pathLength: [0, 1, 0], opacity: [0.08, 0.5, 0.08] }}
            transition={{ duration: 16 + index * 2, repeat: Infinity, delay: index * 0.9, ease: "easeInOut" }}
          />
        ))}
      </svg>
    </div>
  );
}

