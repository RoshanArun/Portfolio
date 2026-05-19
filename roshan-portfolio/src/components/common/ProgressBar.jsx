import { motion, useScroll, useSpring } from "framer-motion";

export default function ProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  return <motion.div style={{ scaleX }} className="fixed left-0 right-0 top-0 z-[60] hidden h-1 origin-left bg-gradient-to-r from-sky-300 via-white to-blue-400 sm:block" />;
}

