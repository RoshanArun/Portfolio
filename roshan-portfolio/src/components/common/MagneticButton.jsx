import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function MagneticButton({ children, href, variant = "primary" }) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -3, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className={`group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-black uppercase tracking-wide transition-all duration-300 ${
        variant === "primary"
          ? "bg-white text-[#080c14] shadow-2xl shadow-sky-400/20 hover:bg-sky-200"
          : "border border-white/15 bg-white/5 text-white backdrop-blur hover:border-sky-300/50 hover:bg-white/10"
      }`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </motion.a>
  );
}

