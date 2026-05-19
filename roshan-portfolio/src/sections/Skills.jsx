import React, { useCallback, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { skills, skillCards } from "../data/portfolio";
import { flipTransition, sectionVisibilityClass } from "../constants/motion";
import { useMediaQuery } from "../hooks/useMediaQuery";
import SectionBridge from "../components/common/SectionBridge";
import SectionHeader from "../components/common/SectionHeader";

const SkillFlipCard = React.memo(function SkillFlipCard({ item, index }) {
  const [flipped, setFlipped] = useState(false);
  const Icon = item.icon;
  const canHover = useMediaQuery("(hover: hover) and (pointer: fine)", true);
  const toggleFlipped = useCallback(() => setFlipped((value) => !value), []);

  return (
    <motion.button
      type="button"
      onClick={toggleFlipped}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={canHover ? { y: -10, scale: 1.02 } : undefined}
      whileTap={{ scale: 0.985 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group h-72 touch-manipulation text-left outline-none [perspective:1200px] [perspective-origin:center] [transform:translateZ(0)]"
    >
      <motion.div
        initial={false}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={flipTransition}
        className="relative h-full rounded-[2rem] will-change-transform [backface-visibility:hidden] [transform-style:preserve-3d] [transform:translateZ(0)]"
      >
        <div className="absolute inset-0 rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 shadow-2xl shadow-black/10 backdrop-blur transition-colors duration-500 group-hover:border-sky-300/35 group-hover:bg-white/[0.065] group-hover:shadow-sky-950/30 [backface-visibility:hidden] [transform:rotateY(0deg)_translateZ(1px)]">
          <Icon className="mb-6 h-8 w-8 text-sky-300 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" />
          <h3 className="text-xl font-black text-white">{item.title}</h3>
          <p className="mt-4 leading-7 text-slate-400">{item.front}</p>
          <p className="mt-5 text-sm font-bold uppercase tracking-[0.2em] text-sky-300/80">Click to flip</p>
        </div>
        <div className="absolute inset-0 rounded-[2rem] border border-sky-300/20 bg-[#111d32]/90 p-7 shadow-2xl shadow-sky-950/30 backdrop-blur [backface-visibility:hidden] [transform:rotateY(180deg)_translateZ(1px)]">
          <h3 className="text-xl font-black text-white">How I use it</h3>
          <p className="mt-5 leading-7 text-slate-300">{item.back}</p>
          <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-sky-300/80">Click to return</p>
        </div>
      </motion.div>
    </motion.button>
  );
});


export default function Skills() {
  const prefersReducedMotion = useReducedMotion();
  const repeated = useMemo(() => [...skills, ...skills, ...skills], []);
  return (
    <section id="skills" className={`relative overflow-hidden py-[4.5rem] text-white sm:py-32 ${sectionVisibilityClass}`}>
      <SectionBridge />
      <div className="relative z-10">
        <SectionHeader eyebrow="Stack" title="The tools behind the build." description="Mobile, web, UI systems, API integration, and performance-focused development." />
        <div className="relative mx-auto max-w-7xl overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-[#080c14] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-[#080c14] to-transparent" />
          <motion.div animate={prefersReducedMotion ? undefined : { x: [0, -1300] }} transition={{ duration: 24, repeat: Infinity, ease: "linear" }} className="flex w-max gap-4 px-6 will-change-transform">
            {repeated.map((skill, index) => <div key={`${skill}-${index}`} className="rounded-2xl border border-white/10 bg-white/[0.045] px-6 py-4 text-lg font-black text-white shadow-xl shadow-black/10">{skill}</div>)}
          </motion.div>
        </div>

        <div className="mx-auto mt-16 grid max-w-7xl gap-6 px-6 md:grid-cols-3">
          {skillCards.map((item, index) => <SkillFlipCard key={item.title} item={item} index={index} />)}
        </div>
      </div>
    </section>
  );
}

