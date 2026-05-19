import { motion } from "framer-motion";
import { Mail, Rocket } from "lucide-react";
import { sectionVisibilityClass } from "../constants/motion";
import SectionBridge from "../components/common/SectionBridge";

export default function Contact() {
  return (
    <section id="contact" className={`relative overflow-hidden px-6 pt-[4.5rem] pb-9 text-white sm:py-32 ${sectionVisibilityClass}`}>
      <SectionBridge />
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative z-10 mx-auto max-w-5xl rounded-[2.5rem] border border-white/10 bg-[#0b1220]/70 p-8 text-center shadow-2xl shadow-black/10 backdrop-blur-xl sm:p-14">
        <Rocket className="mx-auto mb-6 h-10 w-10 text-sky-300" />
        <h2 className="text-4xl font-black tracking-tight sm:text-6xl">Ready to build something memorable?</h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">I’m open to web projects, frontend work, mobile development opportunities, and client-focused website updates.</p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href="mailto:Roshan.arun@live.com" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-black text-[#080c14] transition hover:bg-sky-200"><Mail className="h-4 w-4" /> Email Me</a>
          <a href="https://github.com/RoshanArun" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"><span className="text-base">⌘</span> GitHub</a>
          <a href="https://www.linkedin.com/in/roshan-arun-231a131b5/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"><span className="text-base font-bold">in</span> LinkedIn</a>
        </div>
      </motion.div>
    </section>
  );
}

