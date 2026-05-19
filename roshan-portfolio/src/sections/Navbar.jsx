import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useMediaQuery } from "../hooks/useMediaQuery";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const showToybox = useMediaQuery("(min-width: 1024px)", true);
  const links = showToybox ? ["work", "skills", "toybox", "experience", "contact"] : ["work", "skills", "experience", "contact"];

  return (
    <motion.nav initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }} className="fixed left-0 right-0 top-0 z-50 px-4 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-[#0b1220]/70 px-5 py-3 shadow-2xl shadow-black/10 backdrop-blur-xl">
        <a href="#home" className="flex items-center gap-3 text-white">
          <div className="grid h-9 w-9 place-items-center rounded-full bg-white font-black text-[#080c14] shadow-lg shadow-sky-400/20">RA</div>
          <span className="hidden text-sm font-semibold tracking-wide sm:block">Roshan Arun</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a key={link} href={`#${link}`} className="rounded-full px-4 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-sky-200">
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          ))}
        </div>

        <a href="mailto:Roshan.arun@live.com" className="hidden rounded-full bg-white px-4 py-2 text-sm font-black text-[#080c14] transition hover:bg-sky-200 md:block">
          Contact Me
        </a>

        <button onClick={() => setOpen(!open)} className="rounded-full border border-white/10 p-2 text-white md:hidden">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} className="mx-auto mt-3 max-w-7xl rounded-3xl border border-white/10 bg-[#0b1220]/95 p-4 backdrop-blur-xl md:hidden">
            {links.map((link) => (
              <a key={link} href={`#${link}`} onClick={() => setOpen(false)} className="block rounded-2xl px-4 py-3 text-slate-200 hover:bg-white/10">
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

