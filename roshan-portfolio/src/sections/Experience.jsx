import { motion } from "framer-motion";
import { experience } from "../data/portfolio";
import { sectionVisibilityClass } from "../constants/motion";
import SectionBridge from "../components/common/SectionBridge";
import SectionHeader from "../components/common/SectionHeader";

export default function Experience() {
  return (
    <section id="experience" className={`relative overflow-hidden px-6 py-[4.5rem] text-white sm:py-32 ${sectionVisibilityClass}`}>
      <SectionBridge />
      <div className="relative z-10">
        <SectionHeader eyebrow="Experience" title="Real-world software development experience." description="Professional work across mobile applications, frontend web development, debugging, UI systems, and cross-functional collaboration." />
        <div className="mx-auto max-w-4xl">
          {experience.map((item, index) => (
            <motion.div key={item.role} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, delay: index * 0.1 }} className="relative border-l border-white/10 pb-12 pl-8 last:pb-0">
              <div className="absolute -left-3 top-0 grid h-6 w-6 place-items-center rounded-full bg-sky-300 shadow-lg shadow-sky-300/30"><div className="h-2 w-2 rounded-full bg-[#080c14]" /></div>
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-black/10">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-2xl font-black text-white">{item.role}</h3>
                  <p className="text-sm font-semibold text-sky-200">{item.date}</p>
                </div>
                <p className="mt-1 font-semibold text-slate-300">{item.company}</p>
                <p className="mt-4 leading-7 text-slate-400">{item.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

