import { useEffect } from "react";
import LivingBackground from "./components/background/LivingBackground";
import ProgressBar from "./components/common/ProgressBar";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Work from "./sections/Work";
import Skills from "./sections/Skills";
import Toybox from "./sections/Toybox";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";

export default function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    document.documentElement.style.backgroundColor = "#0b0f19";
    document.body.style.backgroundColor = "#0b0f19";
    document.body.style.margin = "0";
    document.body.style.overscrollBehaviorX = "none";

    const handleAnchorClick = (event) => {
      const anchor = event.target.closest?.('a[href^="#"]');
      if (!anchor) return;
      const id = anchor.getAttribute("href")?.slice(1);
      const target = id ? document.getElementById(id) : null;
      if (!target) return;
      event.preventDefault();
      const navbarOffset = window.innerWidth < 768 ? 92 : 108;
      const top = target.getBoundingClientRect().top + window.scrollY - navbarOffset;
      window.scrollTo({ top, behavior: "smooth" });
    };

    document.addEventListener("click", handleAnchorClick);
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#0b0f19] font-sans selection:bg-sky-300 selection:text-[#080c14]">
      <LivingBackground />
      <ProgressBar />
      <Navbar />
      <Hero />
      <Work />
      <Skills />
      <Toybox />
      <Experience />
      <Contact />
      <footer className="relative z-10 border-t border-white/10 px-6 py-4 text-center text-sm text-slate-500 sm:py-8">© {new Date().getFullYear()} Roshan Arun. Built with React, Tailwind CSS, and Framer Motion.</footer>
    </main>
  );
}
