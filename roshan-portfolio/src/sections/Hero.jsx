import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles } from "lucide-react";
import NetworkMap from "../components/background/NetworkMap";
import FloatingPanels from "../components/background/FloatingPanels";
import HologramCore from "../components/background/HologramCore";
import MagneticButton from "../components/common/MagneticButton";

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.35], [0, -90]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden text-white">
      <NetworkMap />
      <FloatingPanels />

      <motion.div style={{ y, opacity }} className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-16 px-6 pt-28 pb-20 text-center sm:text-left lg:grid-cols-[1.02fr_0.98fr] lg:gap-10">
        <div className="mx-auto max-w-3xl sm:mx-0 sm:max-w-none">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }} className="mx-auto mb-6 inline-flex w-fit items-center gap-2 rounded-full sm:mx-0 border border-sky-300/20 bg-sky-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-sky-100 backdrop-blur">
            <Sparkles className="h-4 w-4" /> Software Engineer / iOS / Frontend
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }} className="mx-auto max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.05em] text-white sm:mx-0 sm:text-6xl lg:text-7xl xl:text-8xl">
            I build digital products that feel sharp, fast, and alive.
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.24 }} className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:mx-0 sm:text-xl">
            I’m Roshan, a software developer focused on iOS, frontend systems, clean architecture, and premium motion-driven user experiences.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.36 }} className="mt-10 flex flex-wrap justify-center gap-4 sm:justify-start">
            <MagneticButton href="#work">View Work</MagneticButton>
            <MagneticButton href="mailto:Roshan.arun@live.com" variant="secondary">Start a Project</MagneticButton>
          </motion.div>
        </div>

        <HologramCore />
      </motion.div>
    </section>
  );
}

