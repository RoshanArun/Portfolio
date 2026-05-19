import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects } from "../data/portfolio";
import { sectionVisibilityClass } from "../constants/motion";
import { useMediaQuery } from "../hooks/useMediaQuery";
import SectionBridge from "../components/common/SectionBridge";
import SectionHeader from "../components/common/SectionHeader";

const ProjectCard = React.memo(function ProjectCard({ project, index }) {
  const canHover = useMediaQuery("(hover: hover) and (pointer: fine)", true);

  return (
    <motion.a
      href={project.link}
      target={project.link === "#" ? undefined : "_blank"}
      rel="noreferrer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55, delay: index * 0.04 }}
      whileHover={canHover ? { y: -12, scale: 1.015 } : undefined}
      className="group relative transform-gpu overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-black/10 backdrop-blur transition-colors duration-300 md:hover:border-sky-300/35 md:hover:bg-white/[0.065] md:hover:shadow-sky-950/30"
    >
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 md:group-hover:opacity-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.16),transparent_45%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-300/60 to-transparent" />
      </div>
      <div className="relative">
        <div className="mb-8 flex items-center justify-between">
          <span className="rounded-full border border-sky-300/15 bg-sky-300/10 px-3 py-1 text-xs font-bold text-sky-200 transition md:group-hover:border-sky-300/35 md:group-hover:bg-sky-300/15">{project.type}</span>
          <ExternalLink className="h-5 w-5 text-slate-500 transition md:group-hover:translate-x-1 md:group-hover:-translate-y-1 md:group-hover:text-sky-200" />
        </div>
        <h3 className="text-2xl font-black text-white">{project.title}</h3>
        <p className="mt-4 min-h-28 leading-7 text-slate-400">{project.description}</p>
        <div className="mt-7 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span key={item} className="rounded-full bg-[#080c14]/70 px-3 py-1 text-xs text-slate-300 ring-1 ring-white/10 transition md:group-hover:ring-sky-300/20">{item}</span>
          ))}
        </div>
      </div>
    </motion.a>
  );
});


export default function Work() {
  return (
    <section id="work" className={`relative overflow-hidden px-6 py-[4.5rem] text-white sm:py-32 ${sectionVisibilityClass}`}>
      <SectionBridge />
      <div className="relative z-10">
        <SectionHeader eyebrow="Selected Work" title="Projects built with clean structure and sharp execution." description="A mix of real experience and mock portfolio-ready projects designed to show frontend, mobile, animation, and product thinking." />
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}
        </div>
      </div>
    </section>
  );
}

