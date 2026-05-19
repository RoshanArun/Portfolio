import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useIsSmallScreen } from "../../hooks/useMediaQuery";

export default function LivingBackground() {
  const isSmallScreen = useIsSmallScreen();
  const prefersReducedMotion = useReducedMotion();
  const particleCount = isSmallScreen ? 44 : 90;

  const particles = useMemo(
    () =>
      Array.from({ length: particleCount }, (_, i) => ({
        id: i,
        left: `${(i * 29 + 11) % 100}%`,
        top: `${(i * 47 + 17) % 100}%`,
        size: 1 + ((i * 7) % 4),
        delay: (i % 13) * 0.22,
        duration: 4 + (i % 9),
      })),
    [particleCount]
  );

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#080c14]">
      <motion.div
        animate={prefersReducedMotion ? undefined : { backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="absolute -inset-[20%] opacity-55 blur-3xl"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(14,165,233,0.18), transparent 30%, rgba(255,255,255,0.08) 45%, transparent 62%, rgba(59,130,246,0.15))",
          backgroundSize: "260% 260%",
        }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.045)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black_28%,transparent_78%)]" />

      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-sky-200 shadow-[0_0_18px_rgba(125,211,252,0.75)]"
          style={{ left: particle.left, top: particle.top, width: particle.size, height: particle.size }}
          animate={prefersReducedMotion ? { opacity: 0.28 } : { y: [0, -24, 0], opacity: [0.12, 0.75, 0.12], scale: [1, 1.7, 1] }}
          transition={{ duration: particle.duration + 2, delay: particle.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(8,12,20,0.05),rgba(8,12,20,0.78)_82%,#080c14)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(8,12,20,0.20)_48%,rgba(8,12,20,0.95)_100%)]" />
    </div>
  );
}

