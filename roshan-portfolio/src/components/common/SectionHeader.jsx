import React from "react";
import { motion } from "framer-motion";

const SectionHeader = React.memo(function SectionHeader({ eyebrow, title, description }) {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }} className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
      <p className="mb-3 text-sm font-black uppercase tracking-[0.32em] text-sky-300">{eyebrow}</p>
      <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">{title}</h2>
      <p className="mt-5 text-lg leading-8 text-slate-400">{description}</p>
    </motion.div>
  );
});


export default SectionHeader;
