import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform, AnimatePresence, useAnimation, useReducedMotion } from "framer-motion";
import { ArrowRight, Mail, ExternalLink, Code2, Smartphone, Sparkles, Layers, Rocket, Menu, X } from "lucide-react";

const projects = [
  {
    title: "FoodTrack",
    type: "Nonprofit Web App",
    description:
      "A food-tracking platform built with React, TypeScript, Next.js, Tailwind CSS, and AWS. Focused on clean UI, navigation, and clear data visualization.",
    tech: ["React", "TypeScript", "Next.js", "Tailwind", "AWS"],
    link: "https://github.com/RoshanArun/FoodTruck-Financial-Platform",
  },
  {
    title: "Garmin Drive Retheme",
    type: "Mobile UI System",
    description:
      "A scalable retheming system using Swift and C++ to support dark/light mode, reactive UI behavior, and reusable mobile interface infrastructure.",
    tech: ["Swift", "C++", "SwiftUI", "Djinni"],
    link: "#",
  },
  {
    title: "CrypNet",
    type: "Crypto Platform",
    description:
      "A responsive crypto application with UI structure, state management, routing, backend planning, and authentication architecture.",
    tech: ["React", "Ionic", "Redux", "MongoDB", "TypeScript"],
    link: "https://github.com/RoshanArun/CrypNet-WebApp",
  },
  {
    title: "EMTO Web App",
    type: "Frontend System",
    description:
      "A responsive web application using HTML, CSS, JavaScript, and React with REST API integration and maintainable component structure.",
    tech: ["React", "JavaScript", "CSS", "REST APIs"],
    link: "https://github.com/RoshanArun/Emto-Web",
  },
];

const skills = ["Swift", "SwiftUI", "UIKit", "C++", "Djinni", "React", "TypeScript", "Next.js", "Tailwind CSS", "Redux", "MongoDB", "REST APIs"];

const skillCards = [
  {
    icon: Smartphone,
    title: "Mobile Development",
    front: "Swift, SwiftUI, UIKit, storyboards, C++, and cross-platform architecture.",
    back: "I build user-facing mobile experiences with reusable UI systems, app performance in mind, and clean native architecture.",
  },
  {
    icon: Code2,
    title: "Frontend Engineering",
    front: "React, TypeScript, Next.js, Tailwind CSS, responsive layouts, and API integration.",
    back: "I focus on clean component structure, smooth user flows, responsive behavior, and interfaces that feel polished instead of thrown together.",
  },
  {
    icon: Layers,
    title: "UI Systems",
    front: "Reusable components, consistent design patterns, clean structure, and maintainable code.",
    back: "I like building systems that scale: components, spacing, states, animations, and patterns that stay consistent across the product.",
  },
];

const experience = [
  {
    role: "iOS Software Developer",
    company: "Garmin",
    date: "Aug 2024 — Present",
    detail:
      "Building mobile UI infrastructure, improving app performance, debugging production code, and bridging shared C++ logic into native iOS experiences.",
  },
  {
    role: "Software Development Intern",
    company: "Garmin",
    date: "Jun 2024 — Aug 2024",
    detail:
      "Improved notification systems, built cross-platform sharing features, and resolved critical issues in Garmin mobile applications.",
  },
  {
    role: "Software Development Intern",
    company: "EMTO",
    date: "Jul 2023 — Sep 2023",
    detail:
      "Built responsive web pages, integrated APIs, refactored frontend code, and collaborated on user-focused web interfaces.",
  },
];

const sectionVisibilityClass = "";
const springResetTransition = { type: "spring", stiffness: 170, damping: 20 };
const smoothResetDuration = 650;

function LivingBackground() {
  const isSmallScreen = useIsSmallScreen();
  const prefersReducedMotion = useReducedMotion();
  const particleCount = isSmallScreen ? 44 : 90;

  const particles = useMemo(
    () =>
      Array.from({ length: particleCount }, (_, i) => ({
        id: i,
        left: `${(i * 29 + 11) % 100}%`,
        top: `${(i * 47 + 17) % 100}%`,
        size: 1 + ((i * 7) % 4),
        delay: (i % 13) * 0.22,
        duration: 4 + (i % 9),
      })),
    [particleCount]
  );

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#05070c]">
      <motion.div
        animate={prefersReducedMotion ? undefined : { backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="absolute -inset-[20%] opacity-55 blur-3xl"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(14,165,233,0.18), transparent 30%, rgba(255,255,255,0.08) 45%, transparent 62%, rgba(59,130,246,0.15))",
          backgroundSize: "260% 260%",
        }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.045)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black_28%,transparent_78%)]" />

      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-sky-200 shadow-[0_0_18px_rgba(125,211,252,0.75)]"
          style={{ left: particle.left, top: particle.top, width: particle.size, height: particle.size }}
          animate={prefersReducedMotion ? { opacity: 0.28 } : { y: [0, -24, 0], opacity: [0.12, 0.75, 0.12], scale: [1, 1.7, 1] }}
          transition={{ duration: particle.duration + 2, delay: particle.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(5,7,12,0.05),rgba(5,7,12,0.78)_82%,#05070c)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,7,12,0.20)_48%,rgba(5,7,12,0.95)_100%)]" />
    </div>
  );
}

function NetworkMap() {
  const prefersReducedMotion = useReducedMotion();
  const lines = [
    "M40 130 C180 20 260 250 420 120 S650 160 840 60",
    "M80 380 C210 260 340 480 520 330 S710 250 860 390",
    "M120 80 C280 170 360 20 520 140 S720 250 880 120",
    "M20 250 C180 160 280 320 455 230 S700 120 890 280",
  ];

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-45 sm:opacity-60 xl:opacity-80">
      <svg className="absolute inset-0 h-full w-full scale-[1.18] sm:scale-105 xl:scale-100" viewBox="0 0 900 520" preserveAspectRatio="none">
        {lines.map((line, index) => (
          <motion.path
            key={line}
            d={line}
            fill="none"
            stroke={index === 1 ? "rgba(255,255,255,0.14)" : "rgba(56,189,248,0.20)"}
            strokeWidth={index === 3 ? "0.9" : "1.2"}
            strokeDasharray="9 16"
            initial={{ pathLength: 0 }}
            animate={prefersReducedMotion ? { pathLength: 1, opacity: 0.35 } : { pathLength: [0, 1, 0], opacity: [0.08, 0.5, 0.08] }}
            transition={{ duration: 16 + index * 2, repeat: Infinity, delay: index * 0.9, ease: "easeInOut" }}
          />
        ))}
      </svg>
    </div>
  );
}

function HologramCore() {
  const prefersReducedMotion = useReducedMotion();
  const rings = [
    { size: "h-[320px] w-[320px] sm:h-[420px] sm:w-[420px] lg:h-[520px] lg:w-[520px]", speed: 28, border: "border-sky-300/20" },
    { size: "h-[255px] w-[255px] sm:h-[335px] sm:w-[335px] lg:h-[405px] lg:w-[405px]", speed: 38, border: "border-white/14", reverse: true },
    { size: "h-[185px] w-[185px] sm:h-[235px] sm:w-[235px] lg:h-[280px] lg:w-[280px]", speed: 20, border: "border-blue-400/20" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.35, ease: "easeOut" }}
      className="relative mx-auto mt-16 h-[360px] w-full max-w-xl sm:h-[460px] lg:mt-0 lg:h-[620px]"
    >
      <div className="absolute inset-0 rounded-full bg-sky-400/10 blur-3xl" />

      {rings.map((ring, index) => (
        <motion.div
          key={ring.size}
          animate={prefersReducedMotion ? undefined : { rotate: ring.reverse ? -360 : 360 }}
          transition={{ duration: ring.speed, repeat: Infinity, ease: "linear" }}
          className={`absolute left-1/2 top-1/2 ${ring.size} -translate-x-1/2 -translate-y-1/2 rounded-full border ${ring.border}`}
        >
          <motion.span
            className="absolute -top-1 left-1/2 h-3 w-3 rounded-full bg-sky-300 shadow-[0_0_26px_rgba(125,211,252,1)]"
            animate={prefersReducedMotion ? { opacity: 0.75 } : { scale: [1, 1.5, 1], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2.4, delay: index * 0.3, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      ))}

      <motion.div
        animate={prefersReducedMotion ? undefined : { y: [0, -16, 0], rotateX: [0, 8, 0], rotateY: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 w-[90%] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-[2rem] border border-white/15 bg-[#070b12]/70 p-5 shadow-2xl shadow-sky-500/10 backdrop-blur-2xl"
      >
        <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-sky-400/12 via-transparent to-white/5" />
        <div className="relative">
          <div className="mb-5 flex items-center gap-2 border-b border-white/10 pb-4">
            <span className="h-3 w-3 rounded-full bg-sky-300 shadow-[0_0_18px_rgba(125,211,252,0.9)]" />
            <span className="h-3 w-3 rounded-full bg-slate-400/80" />
            <span className="h-3 w-3 rounded-full bg-white/70" />
            <span className="ml-auto rounded-full border border-sky-300/20 bg-sky-300/10 px-3 py-1 text-xs font-bold text-sky-100">LIVE BUILD</span>
          </div>

          <div className="grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <div className="mb-3 flex items-center justify-between text-xs text-slate-400">
                <span>interface.quality</span>
                <span className="text-sky-300">99%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  animate={{ width: ["22%", "99%", "61%", "99%"] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-sky-300 to-white"
                />
              </div>
              <div className="mt-5 space-y-3 font-mono text-xs text-slate-300 sm:text-sm">
                <div><span className="text-sky-300">const</span> product = <span className="text-white">"polished"</span>;</div>
                <div><span className="text-sky-300">ship</span>(motion + cleanCode);</div>
                <div><span className="text-slate-500">// precise, fast, memorable</span></div>
              </div>
            </div>

            <div className="grid gap-3">
              {["React", "Swift", "C++", "Next"].map((item, index) => (
                <motion.div
                  key={item}
                  animate={{ x: [0, 5, 0], opacity: [0.72, 1, 0.72] }}
                  transition={{ duration: 3, delay: index * 0.25, repeat: Infinity, ease: "easeInOut" }}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-black text-white"
                >
                  <span className="mr-3 text-sky-300">0{index + 1}</span>{item}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function FloatingPanels() {
  const prefersReducedMotion = useReducedMotion();
  const panels = [
    { text: "npm run build  ✓", top: "18%", left: "6%", rotate: -7, delay: 0 },
    { text: "animation engine online", top: "27%", left: "73%", rotate: 6, delay: 0.4 },
    { text: "latency: 24ms", top: "72%", left: "7%", rotate: 4, delay: 0.8 },
    { text: "design system: synced", top: "68%", left: "70%", rotate: -5, delay: 1.2 },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 z-20 hidden overflow-hidden [@media(min-width:1536px)]:block">
      {panels.map((panel) => (
        <motion.div
          key={panel.text}
          initial={{ opacity: 0, y: 20, rotate: panel.rotate }}
          animate={prefersReducedMotion ? { opacity: 0.62, y: 0, rotate: panel.rotate } : { opacity: 0.62, y: [0, -12, 0], rotate: [panel.rotate, panel.rotate + 1.5, panel.rotate] }}
          transition={{ opacity: { delay: panel.delay, duration: 1 }, y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: panel.delay }, rotate: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: panel.delay } }}
          className="absolute rounded-2xl border border-sky-300/15 bg-[#070b12]/55 px-5 py-3 font-mono text-xs text-sky-100 shadow-2xl shadow-black/30 backdrop-blur-xl"
          style={{ top: panel.top, left: panel.left }}
        >
          {panel.text}
        </motion.div>
      ))}
    </div>
  );
}

function MagneticButton({ children, href, variant = "primary" }) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -3, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className={`group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-black uppercase tracking-wide transition-all duration-300 ${
        variant === "primary"
          ? "bg-white text-[#05070c] shadow-2xl shadow-sky-400/20 hover:bg-sky-200"
          : "border border-white/15 bg-white/5 text-white backdrop-blur hover:border-sky-300/50 hover:bg-white/10"
      }`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </motion.a>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const showToybox = useMediaQuery("(min-width: 1024px)", true);
  const links = showToybox ? ["work", "skills", "toybox", "experience", "contact"] : ["work", "skills", "experience", "contact"];

  return (
    <motion.nav initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }} className="fixed left-0 right-0 top-0 z-50 px-4 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-[#070b12]/70 px-5 py-3 shadow-2xl shadow-black/40 backdrop-blur-xl">
        <a href="#home" className="flex items-center gap-3 text-white">
          <div className="grid h-9 w-9 place-items-center rounded-full bg-white font-black text-[#05070c] shadow-lg shadow-sky-400/20">RA</div>
          <span className="hidden text-sm font-semibold tracking-wide sm:block">Roshan Arun</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a key={link} href={`#${link}`} className="rounded-full px-4 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-sky-200">
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          ))}
        </div>

        <a href="mailto:Roshan.arun@live.com" className="hidden rounded-full bg-white px-4 py-2 text-sm font-black text-[#05070c] transition hover:bg-sky-200 md:block">
          Contact Me
        </a>

        <button onClick={() => setOpen(!open)} className="rounded-full border border-white/10 p-2 text-white md:hidden">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} className="mx-auto mt-3 max-w-7xl rounded-3xl border border-white/10 bg-[#070b12]/95 p-4 backdrop-blur-xl md:hidden">
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

function Hero() {
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

function SectionBridge() {
  return <div className="pointer-events-none absolute -top-56 left-0 right-0 h-[28rem] bg-[linear-gradient(to_bottom,transparent_0%,rgba(5,7,12,0.28)_45%,transparent_100%)]" />;
}

function SectionHeader({ eyebrow, title, description }) {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }} className="mx-auto mb-14 max-w-3xl text-center">
      <p className="mb-3 text-sm font-black uppercase tracking-[0.32em] text-sky-300">{eyebrow}</p>
      <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">{title}</h2>
      <p className="mt-5 text-lg leading-8 text-slate-400">{description}</p>
    </motion.div>
  );
}

function ProjectCard({ project, index }) {
  const isSmallScreen = useIsSmallScreen();

  return (
    <motion.a
      href={project.link}
      target={project.link === "#" ? undefined : "_blank"}
      rel="noreferrer"
      initial={{ opacity: 0, y: isSmallScreen ? 22 : 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: isSmallScreen ? "-20px" : "-80px" }}
      transition={{ duration: 0.55, delay: isSmallScreen ? index * 0.04 : index * 0.08 }}
      whileHover={isSmallScreen ? undefined : { y: -12, scale: 1.015 }}
      className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 shadow-2xl shadow-black/30 backdrop-blur transition-all duration-500 hover:border-sky-300/35 hover:bg-white/[0.055] hover:shadow-sky-950/30"
    >
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.16),transparent_45%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-300/60 to-transparent" />
      </div>
      <div className="relative">
        <div className="mb-8 flex items-center justify-between">
          <span className="rounded-full border border-sky-300/15 bg-sky-300/10 px-3 py-1 text-xs font-bold text-sky-200 transition group-hover:border-sky-300/35 group-hover:bg-sky-300/15">{project.type}</span>
          <ExternalLink className="h-5 w-5 text-slate-500 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-sky-200" />
        </div>
        <h3 className="text-2xl font-black text-white">{project.title}</h3>
        <p className="mt-4 min-h-28 leading-7 text-slate-400">{project.description}</p>
        <div className="mt-7 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span key={item} className="rounded-full bg-[#05070c]/70 px-3 py-1 text-xs text-slate-300 ring-1 ring-white/10 transition group-hover:ring-sky-300/20">{item}</span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}

function Work() {
  return (
    <section id="work" className={`relative overflow-hidden px-6 py-32 text-white ${sectionVisibilityClass}`}>
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

function SkillFlipCard({ item, index }) {
  const [flipped, setFlipped] = useState(false);
  const Icon = item.icon;

  return (
    <motion.button
      type="button"
      onClick={() => setFlipped(!flipped)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10, scale: 1.02 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group h-72 text-left [perspective:1200px]"
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.65, ease: "easeInOut" }}
        className="relative h-full rounded-[2rem] [transform-style:preserve-3d]"
      >
        <div className="absolute inset-0 rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 shadow-2xl shadow-black/20 backdrop-blur transition-all duration-500 group-hover:border-sky-300/35 group-hover:bg-white/[0.055] group-hover:shadow-sky-950/30 [backface-visibility:hidden]">
          <Icon className="mb-6 h-8 w-8 text-sky-300 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" />
          <h3 className="text-xl font-black text-white">{item.title}</h3>
          <p className="mt-4 leading-7 text-slate-400">{item.front}</p>
          <p className="mt-5 text-sm font-bold uppercase tracking-[0.2em] text-sky-300/80">Click to flip</p>
        </div>
        <div className="absolute inset-0 rounded-[2rem] border border-sky-300/20 bg-[#0b1220]/90 p-7 shadow-2xl shadow-sky-950/30 backdrop-blur [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <h3 className="text-xl font-black text-white">How I use it</h3>
          <p className="mt-5 leading-7 text-slate-300">{item.back}</p>
          <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-sky-300/80">Click to return</p>
        </div>
      </motion.div>
    </motion.button>
  );
}

function Skills() {
  const prefersReducedMotion = useReducedMotion();
  const repeated = useMemo(() => [...skills, ...skills, ...skills], []);
  return (
    <section id="skills" className={`relative overflow-hidden py-32 text-white ${sectionVisibilityClass}`}>
      <SectionBridge />
      <div className="relative z-10">
        <SectionHeader eyebrow="Stack" title="The tools behind the build." description="Mobile, web, UI systems, API integration, and performance-focused development." />
        <div className="relative mx-auto max-w-7xl overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-[#05070c] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-[#05070c] to-transparent" />
          <motion.div animate={prefersReducedMotion ? undefined : { x: [0, -1300] }} transition={{ duration: 24, repeat: Infinity, ease: "linear" }} className="flex w-max gap-4 px-6 will-change-transform">
            {repeated.map((skill, index) => <div key={`${skill}-${index}`} className="rounded-2xl border border-white/10 bg-white/[0.035] px-6 py-4 text-lg font-black text-white shadow-xl shadow-black/20">{skill}</div>)}
          </motion.div>
        </div>

        <div className="mx-auto mt-16 grid max-w-7xl gap-6 px-6 md:grid-cols-3">
          {skillCards.map((item, index) => <SkillFlipCard key={item.title} item={item} index={index} />)}
        </div>
      </div>
    </section>
  );
}

function DraggableToy({ resetSignal, initial, className = "", children, dragMomentum = true, motionStyle = {}, whileHover = { scale: 1.04 } }) {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: 0,
      y: 0,
      rotate: 0,
      transition: { type: "spring", stiffness: 170, damping: 18 },
    });
  }, [resetSignal, controls]);

  return (
    <motion.div
      drag
      dragMomentum={dragMomentum}
      dragElastic={0.2}
      dragTransition={{ power: 0.65, timeConstant: 520, bounceStiffness: 160, bounceDamping: 14 }}
      animate={controls}
      whileDrag={{ scale: 1.08, zIndex: 120, rotate: 2 }}
      whileHover={whileHover}
      className={`absolute cursor-grab select-none will-change-transform active:cursor-grabbing [touch-action:none] ${className}`}
      style={{ left: initial.left, top: initial.top, ...motionStyle }}
    >
      {children}
    </motion.div>
  );
}

const MotionToyFace = React.memo(function MotionToyFace({ toy }) {
  if (toy.kind === "magnet") {
    return (
      <div className="relative h-full w-full overflow-hidden rounded-[1.5rem] p-3">
        <div className="text-[10px] font-black uppercase tracking-[0.2em] text-sky-200/75">Magnet</div>
        <div className="relative mt-3 h-12">
          <motion.span
            animate={{ x: [0, 34, 0], scale: [1, 1.18, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-0 top-3 h-6 w-6 rounded-full border border-sky-200/35 bg-sky-300/20 shadow-[0_0_24px_rgba(125,211,252,0.45)]"
          />
          <motion.span
            animate={{ x: [0, -34, 0], scale: [1, 1.18, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-0 top-3 h-6 w-6 rounded-full border border-white/30 bg-white/10 shadow-[0_0_24px_rgba(255,255,255,0.24)]"
          />
          <motion.div
            animate={{ opacity: [0.15, 0.75, 0.15], scaleX: [0.4, 1, 0.4] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-7 right-7 top-6 h-px origin-center bg-sky-200/60"
          />
        </div>
      </div>
    );
  }

  if (toy.kind === "orbit") {
    return (
      <div className="relative grid h-full w-full place-items-center">
        <motion.span animate={{ rotate: 360 }} transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }} className="absolute inset-2 rounded-full border border-dashed border-sky-200/35">
          <span className="absolute -top-1 left-1/2 h-3 w-3 rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,0.95)]" />
        </motion.span>
        <motion.span animate={{ rotate: -360 }} transition={{ duration: 7, repeat: Infinity, ease: "linear" }} className="absolute inset-8 rounded-full border border-white/15">
          <span className="absolute -bottom-1 left-1/3 h-2.5 w-2.5 rounded-full bg-sky-200 shadow-[0_0_18px_rgba(125,211,252,0.95)]" />
        </motion.span>
        <span className="text-sm">Orbit</span>
      </div>
    );
  }

  if (toy.kind === "ease") {
    return (
      <div className="w-28 sm:w-40">
        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-sky-200/70"><span>Ease</span><span>curve</span></div>
        <div className="mt-3 h-1 rounded-full bg-white/10">
          <motion.div animate={{ x: [0, 78, 0] }} transition={{ duration: 2.4, repeat: Infinity, ease: [0.16, 1, 0.3, 1] }} className="h-2.5 w-2.5 -translate-y-1 rounded-full bg-sky-200 shadow-[0_0_18px_rgba(125,211,252,0.9)]" />
        </div>
      </div>
    );
  }

  if (toy.kind === "signal") {
    return (
      <div className="min-w-20 sm:min-w-28">
        <div className="text-[10px] font-black uppercase tracking-[0.2em] text-sky-200/75">Signal</div>
        <div className="mt-2 flex h-8 items-end gap-1 sm:mt-3 sm:h-10 sm:gap-1.5">
          {[22, 44, 30, 56, 38, 48].map((height, index) => (
            <motion.span
              key={index}
              animate={{ height: [height, 10 + ((height + index * 11) % 52), height] }}
              transition={{ duration: 1.2 + index * 0.08, repeat: Infinity, ease: "easeInOut", delay: index * 0.04 }}
              className="w-2 rounded-full bg-sky-300/30 ring-1 ring-sky-200/25 sm:w-3"
              style={{ height }}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative grid h-full w-full place-items-center overflow-hidden rounded-full">
      {[0, 1, 2].map((ring) => (
        <motion.span
          key={ring}
          animate={{ scale: [0.15, 1.2], opacity: [0.75, 0] }}
          transition={{ duration: 2.1, repeat: Infinity, ease: "easeOut", delay: ring * 0.45 }}
          className="absolute h-12 w-12 rounded-full border border-sky-200/45 sm:h-16 sm:w-16"
        />
      ))}
      <span className="relative z-10 text-xs font-black">Ripple</span>
    </div>
  );
});

function MotionPlayground({ resetSignal }) {
  const isSmallScreen = useIsSmallScreen();
  const prefersReducedMotion = useReducedMotion();
  const toys = isSmallScreen
    ? [
        { label: "Magnet", left: "18%", top: "12%", shape: "panel", kind: "magnet" },
        { label: "Orbit", left: "60%", top: "10%", shape: "orb", kind: "orbit" },
        { label: "Ease", left: "44%", top: "45%", shape: "wide", kind: "ease" },
        { label: "Signal", left: "13%", top: "72%", shape: "bars", kind: "signal" },
        { label: "Ripple", left: "61%", top: "73%", shape: "ripple", kind: "ripple" },
      ]
    : [
        { label: "Magnet", left: "6%", top: "13%", shape: "panel", kind: "magnet" },
        { label: "Orbit", left: "66%", top: "5%", shape: "orb", kind: "orbit" },
        { label: "Ease", left: "75%", top: "46%", shape: "wide", kind: "ease" },
        { label: "Signal", left: "9%", top: "72%", shape: "bars", kind: "signal" },
        { label: "Ripple", left: "56%", top: "72%", shape: "ripple", kind: "ripple" },
      ];

  const toyClass = (shape) => {
    if (shape === "orb") {
      return "grid h-[5.6rem] w-[5.6rem] place-items-center rounded-full border border-sky-300/20 bg-sky-300/10 text-[10px] font-black uppercase tracking-[0.14em] text-sky-100 shadow-2xl shadow-sky-950/30 backdrop-blur sm:h-[7.65rem] sm:w-[7.65rem] sm:text-[11px]";
    }
    if (shape === "panel") {
      return "min-h-[5.25rem] w-[6.35rem] rounded-[1.25rem] border border-sky-300/20 bg-[#0b1220]/90 text-[10px] font-black text-white shadow-2xl shadow-black/40 backdrop-blur sm:min-h-[5.25rem] sm:w-[8.5rem] sm:rounded-[1.5rem] sm:text-xs";
    }
    if (shape === "wide") {
      return "rounded-2xl border border-sky-300/20 bg-[#0b1220]/90 px-3 py-3 text-xs font-black text-white shadow-2xl shadow-black/40 backdrop-blur sm:px-5 sm:py-4 sm:text-sm";
    }
    if (shape === "bars") {
      return "rounded-[1.35rem] border border-sky-300/20 bg-[#0b1220]/90 px-2.5 py-2 text-[10px] font-black text-white shadow-2xl shadow-black/40 backdrop-blur sm:rounded-[1.7rem] sm:px-3.5 sm:py-3 sm:text-[11px]";
    }
    return "grid h-[4.7rem] w-[4.7rem] place-items-center rounded-full border border-sky-300/20 bg-[#0b1220]/90 text-xs font-black text-white shadow-2xl shadow-black/40 backdrop-blur sm:h-[5.75rem] sm:w-[5.75rem] sm:text-sm";
  };

  return (
    <div className="relative z-10 h-[510px] overflow-visible rounded-[1.5rem] border border-white/10 bg-black/20 sm:h-full sm:min-h-[430px] sm:rounded-[2rem]">
      <motion.div animate={prefersReducedMotion ? undefined : { rotate: 360 }} transition={{ duration: 38, repeat: Infinity, ease: "linear" }} className="absolute left-[45%] top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-sky-300/15 sm:left-[43%] sm:h-64 sm:w-64" />
      <motion.div animate={prefersReducedMotion ? undefined : { rotate: -360 }} transition={{ duration: 54, repeat: Infinity, ease: "linear" }} className="absolute left-[45%] top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 sm:left-[43%] sm:h-44 sm:w-44" />

      {toys.map((toy) => (
        <DraggableToy key={toy.label} resetSignal={resetSignal} initial={{ left: toy.left, top: toy.top }} className={toyClass(toy.shape)}>
          <MotionToyFace toy={toy} />
        </DraggableToy>
      ))}

      <DraggableToy
        resetSignal={resetSignal}
        initial={{ left: isSmallScreen ? "15%" : "21%", top: isSmallScreen ? "45%" : "40%" }}
        className="w-[68%] max-w-xs rounded-2xl border border-white/10 bg-[#080c14]/85 p-3 font-mono text-[10px] leading-5 text-slate-300 shadow-2xl shadow-black/30 backdrop-blur sm:w-[44%] sm:max-w-md sm:p-5 sm:text-sm"
      >
        <p><span className="text-sky-300">motion</span>.play(&#123; magnet, orbit, ease, signal, ripple &#125;);</p>
      </DraggableToy>
    </div>
  );
}

function ConstellationsPlayground({ resetSignal }) {
  const boardRef = useRef(null);
  const defaultPoints = useMemo(
    () => [
      { id: 1, x: 0.22, y: 0.28 },
      { id: 2, x: 0.46, y: 0.16 },
      { id: 3, x: 0.72, y: 0.36 },
      { id: 4, x: 0.62, y: 0.74 },
      { id: 5, x: 0.32, y: 0.66 },
    ],
    []
  );
  const [points, setPoints] = useState(defaultPoints);
  const [boardSize, setBoardSize] = useState({ width: 640, height: 420 });
  const [resetAnimating, setResetAnimating] = useState(false);

  useEffect(() => {
    setResetAnimating(true);
    setPoints(defaultPoints);
    const timer = window.setTimeout(() => setResetAnimating(false), smoothResetDuration);
    return () => window.clearTimeout(timer);
  }, [resetSignal, defaultPoints]);

  useEffect(() => {
    const board = boardRef.current;
    if (!board) return;

    const updateSize = () => {
      const rect = board.getBoundingClientRect();
      if (rect.width && rect.height) setBoardSize({ width: rect.width, height: rect.height });
    };

    updateSize();
    if (typeof ResizeObserver === "undefined") {
      window.addEventListener("resize", updateSize);
      return () => window.removeEventListener("resize", updateSize);
    }

    const observer = new ResizeObserver(updateSize);
    observer.observe(board);
    return () => observer.disconnect();
  }, []);

  const clampRatioPoint = (x, y) => ({
    x: Math.min(Math.max(x, 0.04), 0.96),
    y: Math.min(Math.max(y, 0.06), 0.94),
  });

  const ratioToPixels = (point) => ({
    x: point.x * boardSize.width,
    y: point.y * boardSize.height,
  });

  const updatePoint = (id, clientX, clientY, rectOverride) => {
    const rect = rectOverride || boardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const next = clampRatioPoint((clientX - rect.left) / rect.width, (clientY - rect.top) / rect.height);
    setPoints((current) => current.map((point) => (point.id === id ? { ...point, ...next } : point)));
  };

  const handleBoardClick = (event) => {
    if (event.target.closest("[data-constellation-point]")) return;
    const rect = boardRef.current.getBoundingClientRect();
    const next = clampRatioPoint((event.clientX - rect.left) / rect.width, (event.clientY - rect.top) / rect.height);
    setPoints((current) => [...current, { id: Date.now(), ...next }]);
  };

  const startDrag = (event, point) => {
    event.preventDefault();
    event.stopPropagation();
    const rect = boardRef.current.getBoundingClientRect();

    const move = (moveEvent) => updatePoint(point.id, moveEvent.clientX, moveEvent.clientY, rect);
    const stop = () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", stop);
    };

    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", stop);
  };

  const sortedPoints = useMemo(() => [...points].sort((a, b) => a.id - b.id), [points]);

  return (
    <div className="systems-scroll relative z-10 grid min-h-0 gap-4 overflow-visible lg:h-full lg:grid-cols-[0.76fr_1.24fr] lg:gap-6">
      <style>{`
        .line-dash-flow { animation: lineDashFlow 2.6s linear infinite; }
        @keyframes lineDashFlow { from { stroke-dashoffset: 0; } to { stroke-dashoffset: -36; } }
      `}</style>
      <div className="systems-scroll hidden min-h-0 rounded-[1.5rem] border border-white/10 bg-black/20 p-4 sm:block sm:rounded-[2rem] sm:p-5 lg:overflow-auto">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-sky-300 sm:text-xs sm:tracking-[0.25em]">constellations</p>
        <h4 className="mt-2 text-xl font-black sm:mt-3 sm:text-2xl">Draw your own star map</h4>
        <p className="mt-3 text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
          Click the sky to drop a point. Drag any star to redesign the constellation.
        </p>
        <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.04] p-3 font-mono text-xs text-slate-300 sm:mt-8 sm:p-4 sm:text-sm">
          <span className="text-sky-300">stars</span>.connect({points.length});
        </div>
        <button
          type="button"
          onClick={() => setPoints([])}
          className="mt-3 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[11px] font-black uppercase tracking-[0.14em] text-slate-200 transition hover:bg-white/10 sm:mt-4 sm:text-xs sm:tracking-[0.18em]"
        >
          Clear stars
        </button>
      </div>

      <div ref={boardRef} onClick={handleBoardClick} className="relative h-[430px] min-h-[380px] shrink-0 overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/20 p-3 [touch-action:none] sm:h-[420px] sm:rounded-[2rem] sm:p-5 lg:h-full lg:min-h-[360px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_20%,rgba(125,211,252,0.13),transparent_18%),radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.08),transparent_24%)]" />
        <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-visible opacity-90">
          {sortedPoints.slice(1).map((point, index) => {
            const previous = sortedPoints[index];
            const a = ratioToPixels(previous);
            const b = ratioToPixels(point);
            return (
              <motion.line
                key={`${previous.id}-${point.id}`}
                initial={false}
                animate={{ x1: a.x, y1: a.y, x2: b.x, y2: b.y }}
                transition={resetAnimating ? springResetTransition : { duration: 0 }}
                stroke="rgba(125,211,252,0.42)"
                strokeWidth="2"
                strokeDasharray="8 10"
                className="line-dash-flow"
              />
            );
          })}
        </svg>

        {points.map((point, index) => {
          const pixel = ratioToPixels(point);
          return (
            <motion.button
              key={point.id}
              type="button"
              data-constellation-point
              onPointerDown={(event) => startDrag(event, point)}
              initial={false}
              animate={{ left: pixel.x, top: pixel.y }}
              transition={resetAnimating ? springResetTransition : { duration: 0 }}
              className="absolute z-10 grid h-9 w-9 -translate-x-1/2 -translate-y-1/2 cursor-grab place-items-center rounded-full border border-sky-200/40 bg-sky-300/15 text-[10px] font-black text-sky-50 shadow-[0_0_24px_rgba(125,211,252,0.45)] backdrop-blur active:cursor-grabbing"
            >
              {index + 1}
            </motion.button>
          );
        })}

        {points.length === 0 && <p className="absolute inset-x-0 top-1/2 text-center text-sm text-slate-400">Click anywhere to start a new constellation.</p>}
      </div>
    </div>
  );
}

const SystemsNode = React.memo(function SystemsNode({ node, pixel, onStartDrag, selected, resetAnimating, children }) {
  return (
    <motion.button
      type="button"
      onPointerDown={(event) => onStartDrag(event, node)}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 1.04 }}
      initial={false}
      animate={{ left: pixel.x, top: pixel.y }}
      transition={resetAnimating ? springResetTransition : { duration: 0 }}
      className={`absolute z-10 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 cursor-grab select-none place-items-center rounded-full border px-2 text-center text-[10px] font-black text-white shadow-2xl shadow-black/40 backdrop-blur active:cursor-grabbing [touch-action:none] sm:h-20 sm:w-20 sm:px-3 sm:text-xs ${
        selected ? "border-sky-200/80 bg-sky-300/25 ring-4 ring-sky-300/20" : "border-sky-300/20 bg-[#0b1220]/90"
      }`}
    >
      <span className="line-clamp-2 leading-tight">{children}</span>
    </motion.button>
  );
});

function SystemsPlayground({ resetSignal }) {
  const boardRef = useRef(null);
  const defaultNodes = useMemo(
    () => [
      { id: "ui", label: "UI", x: 0.2, y: 0.22 },
      { id: "state", label: "State", x: 0.43, y: 0.18 },
      { id: "api", label: "API", x: 0.7, y: 0.32 },
      { id: "cpp", label: "C++", x: 0.32, y: 0.72 },
      { id: "swift", label: "Swift", x: 0.66, y: 0.74 },
    ],
    []
  );

  const defaultLinks = useMemo(
    () => [
      ["ui", "state"],
      ["state", "api"],
      ["state", "cpp"],
      ["cpp", "swift"],
      ["swift", "api"],
    ],
    []
  );

  const makePositions = (nodes) => Object.fromEntries(nodes.map((node) => [node.id, { x: node.x, y: node.y }]));
  const [nodes, setNodes] = useState(defaultNodes);
  const [nodePositions, setNodePositions] = useState(() => makePositions(defaultNodes));
  const [links, setLinks] = useState(defaultLinks);
  const [newSystemName, setNewSystemName] = useState("");
  const [selectedNodes, setSelectedNodes] = useState([]);
  const [boardSize, setBoardSize] = useState({ width: 640, height: 420 });
  const [resetAnimating, setResetAnimating] = useState(false);
  const dragState = useRef({ moved: false, id: null, startX: 0, startY: 0, rect: null });

  useEffect(() => {
    setResetAnimating(true);
    setNodes(defaultNodes);
    setNodePositions(makePositions(defaultNodes));
    setLinks(defaultLinks);
    setNewSystemName("");
    setSelectedNodes([]);
    const timer = window.setTimeout(() => setResetAnimating(false), smoothResetDuration);
    return () => window.clearTimeout(timer);
  }, [resetSignal, defaultNodes, defaultLinks]);

  useEffect(() => {
    const board = boardRef.current;
    if (!board) return;

    const updateSize = () => {
      const rect = board.getBoundingClientRect();
      if (rect.width && rect.height) setBoardSize({ width: rect.width, height: rect.height });
    };

    updateSize();
    if (typeof ResizeObserver === "undefined") {
      window.addEventListener("resize", updateSize);
      return () => window.removeEventListener("resize", updateSize);
    }

    const observer = new ResizeObserver(updateSize);
    observer.observe(board);
    return () => observer.disconnect();
  }, []);

  const clampRatioPoint = (x, y) => ({
    x: Math.min(Math.max(x, 0.08), 0.92),
    y: Math.min(Math.max(y, 0.1), 0.9),
  });

  const ratioToPixels = (position) => ({
    x: position.x * boardSize.width,
    y: position.y * boardSize.height,
  });

  const updateNodeFromClient = useCallback((id, clientX, clientY, rectOverride) => {
    const rect = rectOverride || boardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const next = clampRatioPoint((clientX - rect.left) / rect.width, (clientY - rect.top) / rect.height);
    setNodePositions((current) => ({ ...current, [id]: next }));
  }, []);

  const linkKey = (a, b) => `${a}::${b}`;

  const toggleLink = (fromNode, toNode) => {
    if (!fromNode || !toNode || fromNode === toNode) return;
    const key = linkKey(fromNode, toNode);
    setLinks((current) => {
      const exists = current.some(([from, to]) => linkKey(from, to) === key);
      if (exists) return current.filter(([from, to]) => linkKey(from, to) !== key);
      return [...current, [fromNode, toNode]];
    });
  };

  const pickNode = (id) => {
    setSelectedNodes((current) => {
      if (current.includes(id)) return current.filter((item) => item !== id);
      const next = [...current, id].slice(-2);
      if (next.length === 2) {
        toggleLink(next[0], next[1]);
        return [];
      }
      return next;
    });
  };

  const startNodeDrag = (event, node) => {
    event.preventDefault();
    event.stopPropagation();
    const rect = boardRef.current.getBoundingClientRect();
    dragState.current = { moved: false, id: node.id, startX: event.clientX, startY: event.clientY, rect };

    const move = (moveEvent) => {
      const distance = Math.hypot(moveEvent.clientX - dragState.current.startX, moveEvent.clientY - dragState.current.startY);
      if (distance > 3) dragState.current.moved = true;
      updateNodeFromClient(node.id, moveEvent.clientX, moveEvent.clientY, rect);
    };

    const stop = () => {
      if (!dragState.current.moved) pickNode(node.id);
      dragState.current = { moved: false, id: null, startX: 0, startY: 0, rect: null };
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", stop);
    };

    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", stop);
  };

  const addSystem = () => {
    const label = newSystemName.trim() || `System ${nodes.length + 1}`;
    const id = `${label.toLowerCase().replace(/[^a-z0-9]+/g, "-") || "system"}-${Date.now()}`;
    const column = nodes.length % 3;
    const row = Math.floor(nodes.length / 3) % 3;
    const nextPosition = clampRatioPoint(0.2 + column * 0.26, 0.24 + row * 0.22);
    const nextNode = { id, label, ...nextPosition };

    setNodes((current) => [...current, nextNode]);
    setNodePositions((current) => ({ ...current, [id]: nextPosition }));
    setLinks((current) => (nodes.length ? [...current, [nodes[nodes.length - 1].id, id]] : current));
    setSelectedNodes([id]);
    setNewSystemName("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addSystem();
  };

  const removeLink = (fromNode, toNode) => {
    const key = linkKey(fromNode, toNode);
    setLinks((current) => current.filter(([from, to]) => linkKey(from, to) !== key));
  };

  const nodeLabelMap = useMemo(() => Object.fromEntries(nodes.map((node) => [node.id, node.label])), [nodes]);
  const labelFor = useCallback((id) => nodeLabelMap[id] || id, [nodeLabelMap]);

  const linkSegments = useMemo(() =>
    links
      .filter(([from, to]) => nodePositions[from] && nodePositions[to])
      .map(([from, to], index) => {
        const a = ratioToPixels(nodePositions[from]);
        const b = ratioToPixels(nodePositions[to]);
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const distance = Math.hypot(dx, dy) || 1;
        const ux = dx / distance;
        const uy = dy / distance;
        const nodeRadius = boardSize.width < 520 ? 34 : 42;
        const hasReverse = links.some(([otherFrom, otherTo]) => otherFrom === to && otherTo === from);
        const offsetDirection = hasReverse && from > to ? -1 : 1;
        const offset = hasReverse ? 7 * offsetDirection : 0;
        const ox = -uy * offset;
        const oy = ux * offset;
        return {
          x1: a.x + ux * nodeRadius + ox,
          y1: a.y + uy * nodeRadius + oy,
          x2: b.x - ux * nodeRadius + ox,
          y2: b.y - uy * nodeRadius + oy,
          from,
          to,
          stroke: index % 2 === 0 ? "rgba(125,211,252,0.34)" : "rgba(255,255,255,0.18)",
          pulse: index % 2 === 0 ? "rgba(125,211,252,0.78)" : "rgba(255,255,255,0.55)",
        };
      }),
    [links, nodePositions, boardSize.width, boardSize.height]
  );

  return (
    <div className="systems-scroll relative z-10 grid min-h-0 gap-4 overflow-visible lg:h-full lg:grid-cols-[0.82fr_1.18fr] lg:gap-6">
      <style>{`
        .systems-scroll { scrollbar-width: thin; scrollbar-color: rgba(125, 211, 252, 0.55) rgba(255, 255, 255, 0.06); }
        .systems-scroll::-webkit-scrollbar { width: 8px; height: 8px; }
        .systems-scroll::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.06); border-radius: 999px; }
        .systems-scroll::-webkit-scrollbar-thumb { background: rgba(125, 211, 252, 0.45); border-radius: 999px; border: 2px solid rgba(5, 7, 12, 0.55); }
        .systems-scroll::-webkit-scrollbar-thumb:hover { background: rgba(125, 211, 252, 0.70); }
        .systems-link-dash { animation: systemsLineDashFlow 2.8s linear infinite; }
        .system-name-input:-webkit-autofill,
        .system-name-input:-webkit-autofill:hover,
        .system-name-input:-webkit-autofill:focus,
        .system-name-input:-webkit-autofill:active {
          -webkit-text-fill-color: rgb(255, 255, 255) !important;
          caret-color: rgb(255, 255, 255) !important;
          box-shadow: 0 0 0 1000px rgba(0, 0, 0, 0.25) inset !important;
          border-color: rgba(255, 255, 255, 0.10) !important;
          transition: background-color 9999s ease-in-out 0s;
        }
        .system-name-input { color-scheme: dark; }
        @keyframes systemsLineDashFlow { from { stroke-dashoffset: 0; } to { stroke-dashoffset: -44; } }
      `}</style>
      <div className="systems-scroll hidden min-h-0 rounded-[1.5rem] border border-white/10 bg-black/20 p-4 sm:block sm:rounded-[2rem] sm:p-5 lg:overflow-auto">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-sky-300 sm:text-xs sm:tracking-[0.25em]">systems</p>
        <h4 className="mt-2 text-xl font-black sm:mt-3 sm:text-2xl">Build the architecture map</h4>
        <p className="mt-3 text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
          Add named systems, drag nodes, then click two nodes to create or remove directed flows between them.
        </p>

        <form onSubmit={handleSubmit} className="mt-5 rounded-2xl border border-white/10 bg-white/[0.04] p-3 sm:mt-7 sm:p-4">
          <label className="text-xs font-black uppercase tracking-[0.22em] text-slate-400" htmlFor="system-name">New system name</label>
          <div className="mt-3 flex flex-col gap-2 sm:flex-row">
            <div className="relative min-w-0 flex-1">
              <input
                id="system-name"
                value={newSystemName}
                onChange={(event) => setNewSystemName(event.target.value)}
                placeholder="Auth, Cache, DB..."
                autoComplete="off"
                spellCheck="false"
                className="system-name-input w-full rounded-full border border-white/10 bg-black/25 px-4 py-2 pr-10 text-sm text-white outline-none placeholder:text-slate-500 focus:border-sky-300/45"
              />
              {newSystemName && (
                <button
                  type="button"
                  aria-label="Clear system name"
                  onClick={() => setNewSystemName("")}
                  className="absolute right-2 top-1/2 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-xs font-black text-slate-300 transition hover:border-sky-300/30 hover:bg-sky-300/15 hover:text-white"
                >
                  ×
                </button>
              )}
            </div>
            <button
              type="submit"
              className="rounded-full border border-sky-300/30 bg-sky-300/15 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-sky-100 transition hover:bg-sky-300/25"
            >
              Add
            </button>
          </div>
        </form>

        <div className="mt-3 rounded-2xl border border-white/10 bg-white/[0.04] p-3 sm:mt-4 sm:p-4">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-slate-400">Connections</p>
          <p className="mt-2 text-xs leading-5 text-slate-400 sm:text-sm sm:leading-6">
            Tap a source node, then a destination node to toggle that flow.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {selectedNodes.map((id) => (
              <span key={id} className="rounded-full border border-sky-300/30 bg-sky-300/15 px-3 py-1 text-xs font-black text-sky-100">
                {labelFor(id)} selected
              </span>
            ))}
            {selectedNodes.length > 0 && (
              <button type="button" onClick={() => setSelectedNodes([])} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-bold text-slate-300 hover:bg-white/10">
                Clear selection
              </button>
            )}
          </div>
          <div className="systems-scroll mt-4 max-h-32 space-y-2 overflow-auto pr-1">
            {links.length === 0 && <p className="text-xs text-slate-500">No active links yet.</p>}
            {links.map(([from, to]) => (
              <button
                key={linkKey(from, to)}
                type="button"
                onClick={() => removeLink(from, to)}
                className="mr-2 rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-slate-300 transition hover:border-sky-300/30 hover:bg-white/10 hover:text-white"
                title="Click to remove this connection"
              >
                {labelFor(from)} → {labelFor(to)} ×
              </button>
            ))}
          </div>
        </div>

      </div>

      <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-3 sm:hidden">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <div className="relative min-w-0 flex-1">
            <input
              value={newSystemName}
              onChange={(event) => setNewSystemName(event.target.value)}
              placeholder="New system name"
              autoComplete="off"
              spellCheck="false"
              className="system-name-input w-full rounded-full border border-white/10 bg-black/25 px-3 py-2 pr-9 text-xs text-white outline-none placeholder:text-slate-500 focus:border-sky-300/45"
            />
            {newSystemName && (
              <button
                type="button"
                aria-label="Clear system name"
                onClick={() => setNewSystemName("")}
                className="absolute right-1.5 top-1/2 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-xs font-black text-slate-300 transition hover:border-sky-300/30 hover:bg-sky-300/15 hover:text-white"
              >
                ×
              </button>
            )}
          </div>
          <button type="submit" className="rounded-full border border-sky-300/30 bg-sky-300/15 px-4 py-2 text-[11px] font-black uppercase tracking-[0.12em] text-sky-100">
            Add
          </button>
        </form>
        <p className="mt-2 text-center text-[11px] leading-5 text-slate-400">Tap source, then destination to toggle that flow. Tap a chip below to remove it.</p>
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {links.map(([from, to]) => (
            <button key={linkKey(from, to)} type="button" onClick={() => removeLink(from, to)} className="shrink-0 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] text-slate-300">
              {labelFor(from)} → {labelFor(to)} ×
            </button>
          ))}
        </div>
      </div>

      <div ref={boardRef} data-systems-board className="relative h-[430px] min-h-[380px] shrink-0 overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/20 [touch-action:none] sm:h-[430px] sm:rounded-[2rem] lg:h-full lg:min-h-[360px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(125,211,252,0.10),transparent_20%),radial-gradient(circle_at_72%_70%,rgba(255,255,255,0.07),transparent_25%)]" />
        <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden opacity-80">
          {linkSegments.map((linkItem, index) => (
            <g key={`${linkItem.from}-${linkItem.to}-${index}`}>
              <motion.line
                initial={false}
                animate={{ x1: linkItem.x1, y1: linkItem.y1, x2: linkItem.x2, y2: linkItem.y2 }}
                transition={resetAnimating ? springResetTransition : { duration: 0 }}
                stroke={linkItem.stroke}
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="10 12"
                className="systems-link-dash"
              />
              <motion.circle
                r="3.4"
                fill={linkItem.pulse}
                initial={false}
                animate={{
                  cx: [linkItem.x1, linkItem.x2],
                  cy: [linkItem.y1, linkItem.y2],
                  opacity: [0, 0.95, 0],
                  scale: [0.75, 1.1, 0.75],
                }}
                transition={{
                  cx: { duration: 2.1, repeat: Infinity, ease: "easeInOut", delay: index * 0.18 },
                  cy: { duration: 2.1, repeat: Infinity, ease: "easeInOut", delay: index * 0.18 },
                  opacity: { duration: 2.1, repeat: Infinity, ease: "easeInOut", delay: index * 0.18 },
                  scale: { duration: 2.1, repeat: Infinity, ease: "easeInOut", delay: index * 0.18 },
                }}
              />
            </g>
          ))}
        </svg>

        {nodes.map((node) => {
          const pixel = ratioToPixels(nodePositions[node.id] || { x: node.x, y: node.y });
          return (
            <SystemsNode
              key={node.id}
              node={node}
              pixel={pixel}
              onStartDrag={startNodeDrag}
              selected={selectedNodes.includes(node.id)}
              resetAnimating={resetAnimating}
            >
              {node.label}
            </SystemsNode>
          );
        })}

      </div>

      <div className="hidden gap-3 sm:flex sm:flex-wrap sm:items-center sm:justify-center lg:col-span-2 lg:grid lg:grid-cols-[0.82fr_1.18fr] lg:gap-6">
        <div className="flex justify-center">
          <div className="rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 font-mono text-xs text-slate-300 backdrop-blur">
            <span className="text-sky-300">systems</span>.count({nodes.length}); <span className="text-sky-300">links</span>.count({links.length});
          </div>
        </div>
        <div className="flex justify-center">
          <div className="rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 text-center text-xs font-semibold text-slate-300 backdrop-blur">
            <span className="text-white">System mode:</span> drag nodes like stars · click source then destination to toggle a flow
          </div>
        </div>
      </div>
    </div>
  );
}

const defaultPlayboxSize = { width: 1152, height: 700 };

function useIsSmallScreen() {
  const [isSmall, setIsSmall] = useState(() => (typeof window !== "undefined" ? window.innerWidth < 640 : false));

  useEffect(() => {
    if (typeof window === "undefined") return;
    const media = window.matchMedia("(max-width: 639px)");
    const update = () => setIsSmall(media.matches);
    update();
    media.addEventListener?.("change", update);
    return () => media.removeEventListener?.("change", update);
  }, []);

  return isSmall;
}

function useMediaQuery(query, defaultValue = false) {
  const [matches, setMatches] = useState(() => {
    if (typeof window === "undefined") return defaultValue;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const media = window.matchMedia(query);
    const update = () => setMatches(media.matches);
    update();
    media.addEventListener?.("change", update);
    return () => media.removeEventListener?.("change", update);
  }, [query]);

  return matches;
}

function Toybox() {
  const [resetSignal, setResetSignal] = useState(0);
  const [activeMode, setActiveMode] = useState("motion");
  const [playboxSize, setPlayboxSize] = useState(defaultPlayboxSize);
  const [sizeResetAnimating, setSizeResetAnimating] = useState(false);
  const isSmallScreen = useIsSmallScreen();

  const resizeRaf = useRef(null);

  const startResize = useCallback((event) => {
    if (isSmallScreen) return;
    setSizeResetAnimating(false);
    event.preventDefault();
    event.stopPropagation();
    const startX = event.clientX;
    const startY = event.clientY;
    const startWidth = playboxSize.width;
    const startHeight = playboxSize.height;
    let latestEvent = event;

    const applyResize = () => {
      resizeRaf.current = null;
      setPlayboxSize({
        width: Math.min(Math.max(startWidth + latestEvent.clientX - startX, 760), 1400),
        height: Math.min(Math.max(startHeight + latestEvent.clientY - startY, 620), 1050),
      });
    };

    const move = (moveEvent) => {
      latestEvent = moveEvent;
      if (!resizeRaf.current) resizeRaf.current = window.requestAnimationFrame(applyResize);
    };

    const stop = () => {
      if (resizeRaf.current) {
        window.cancelAnimationFrame(resizeRaf.current);
        resizeRaf.current = null;
        applyResize();
      }
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", stop);
    };

    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", stop);
  }, [isSmallScreen, playboxSize.height, playboxSize.width]);

  const resetPlayboxSize = useCallback(() => {
    setSizeResetAnimating(true);
    setPlayboxSize(defaultPlayboxSize);
    window.setTimeout(() => setSizeResetAnimating(false), 560);
  }, []);

  const modeCopy = useMemo(() => ({
    motion: {
      title: "Motion playground",
      description: "Throw draggable objects around and let the motion system do the work.",
    },
    constellations: {
      title: "Constellations",
      description: "Click to drop star points, then drag them around to redesign the constellation.",
    },
    systems: {
      title: "Systems playground",
      description: "Drag architecture nodes anywhere and watch the connection lines follow.",
    },
  }), []);

  const modeNames = useMemo(() => Object.keys(modeCopy), [modeCopy]);

  return (
    <section id="toybox" className="relative hidden overflow-hidden px-4 py-24 text-white sm:px-6 sm:py-32 lg:block">
      <SectionBridge />
      <div className="relative z-10">
        <SectionHeader
          eyebrow="Toybox"
          title="Different ways to play with the interface."
          description="Each mode is a different interaction concept instead of the same idea with renamed buttons."
        />

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className={`relative mx-auto flex flex-col overflow-visible rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-4 shadow-2xl shadow-black/40 backdrop-blur-xl sm:rounded-[2.5rem] sm:p-6 ${sizeResetAnimating ? "transition-[width,height] duration-500 ease-out" : ""}`}
          style={{
            width: isSmallScreen ? "100%" : playboxSize.width,
            maxWidth: isSmallScreen ? "calc(100vw - 32px)" : "calc(100vw - 48px)",
            height: isSmallScreen ? "auto" : playboxSize.height,
            minHeight: isSmallScreen ? 0 : undefined,
          }}
        >
          <style>{`
            .systems-scroll { scrollbar-width: thin; scrollbar-color: rgba(125, 211, 252, 0.55) rgba(255, 255, 255, 0.06); }
            .systems-scroll::-webkit-scrollbar { width: 8px; height: 8px; }
            .systems-scroll::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.06); border-radius: 999px; }
            .systems-scroll::-webkit-scrollbar-thumb { background: rgba(125, 211, 252, 0.45); border-radius: 999px; border: 2px solid rgba(5, 7, 12, 0.55); }
            .systems-scroll::-webkit-scrollbar-thumb:hover { background: rgba(125, 211, 252, 0.70); }
          `}</style>
          <div className="absolute inset-0 overflow-hidden rounded-[1.75rem] sm:rounded-[2.5rem]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.14),transparent_42%),linear-gradient(to_bottom,rgba(255,255,255,0.04),transparent)]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.035)_1px,transparent_1px)] bg-[size:54px_54px] opacity-70" />
          </div>

          <div className="relative z-10 flex shrink-0 flex-col gap-3 border-b border-white/10 pb-4 lg:flex-row lg:items-center lg:justify-between lg:pb-5">
            <div className="min-w-0">
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-sky-300">{activeMode}</p>
              <h3 className="mt-2 text-xl font-black sm:text-2xl">{modeCopy[activeMode].title}</h3>
              <p className="mt-2 max-w-xl text-xs leading-5 text-slate-400 sm:text-sm">{modeCopy[activeMode].description}</p>
            </div>
            <div className="flex shrink-0 flex-nowrap gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {modeNames.map((modeName) => (
                <button
                  key={modeName}
                  type="button"
                  onClick={() => {
                    setActiveMode(modeName);
                    setResetSignal((value) => value + 1);
                  }}
                  className={`shrink-0 whitespace-nowrap rounded-full border px-3 py-2 text-[11px] font-bold uppercase tracking-[0.12em] transition sm:px-3.5 sm:text-xs sm:tracking-[0.16em] ${
                    activeMode === modeName
                      ? "border-sky-300/40 bg-sky-300/20 text-sky-100"
                      : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
                  }`}
                >
                  {modeName}
                </button>
              ))}
              <button
                type="button"
                onClick={() => setResetSignal((value) => value + 1)}
                className="shrink-0 whitespace-nowrap rounded-full border border-white/20 bg-white px-3 py-2 text-[11px] font-black uppercase tracking-[0.12em] text-[#05070c] transition hover:bg-sky-200 sm:px-3.5 sm:text-xs sm:tracking-[0.16em]"
              >
                Reset
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeMode}
              className="relative z-10 mt-4 min-h-0 sm:mt-6 lg:flex-1 [transform:translateZ(0)]"
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -18, scale: 0.98 }}
              transition={{ duration: 0.35 }}
            >
              {activeMode === "motion" && <MotionPlayground resetSignal={resetSignal} />}
              {activeMode === "constellations" && <ConstellationsPlayground resetSignal={resetSignal} />}
              {activeMode === "systems" && <SystemsPlayground resetSignal={resetSignal} />}
            </motion.div>
          </AnimatePresence>


          <button
            type="button"
            aria-label="Resize toybox. Double click to reset to the original size."
            title="Drag to resize. Double click to reset."
            onDoubleClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              resetPlayboxSize();
            }}
            onPointerDown={startResize}
            className="absolute bottom-3 right-3 z-30 hidden h-10 w-10 cursor-nwse-resize rounded-br-[1.4rem] opacity-70 transition hover:opacity-100 sm:block"
          >
            <span className="absolute bottom-2 right-2 h-4 w-4 rounded-br-xl border-b-2 border-r-2 border-sky-200/70" />
            <span className="absolute bottom-2 right-2 h-6 w-6 rounded-br-2xl border-b-2 border-r-2 border-sky-200/40" />
            <span className="absolute bottom-2 right-2 h-8 w-8 rounded-br-[1.25rem] border-b-2 border-r-2 border-sky-200/20" />
          </button>
        </motion.div>

        <p className="mx-auto mt-4 w-fit max-w-[calc(100%-2rem)] rounded-full border border-white/10 bg-white/[0.055] px-4 py-2 text-center text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400 shadow-xl shadow-black/20 backdrop-blur sm:text-[11px]">
          Desktop: drag corner to resize · double-click to reset. Mobile: touch-friendly layout.
        </p>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className={`relative overflow-hidden px-6 py-32 text-white ${sectionVisibilityClass}`}>
      <SectionBridge />
      <div className="relative z-10">
        <SectionHeader eyebrow="Experience" title="Real-world software development experience." description="Professional work across mobile applications, frontend web development, debugging, UI systems, and cross-functional collaboration." />
        <div className="mx-auto max-w-4xl">
          {experience.map((item, index) => (
            <motion.div key={item.role} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, delay: index * 0.1 }} className="relative border-l border-white/10 pb-12 pl-8 last:pb-0">
              <div className="absolute -left-3 top-0 grid h-6 w-6 place-items-center rounded-full bg-sky-300 shadow-lg shadow-sky-300/30"><div className="h-2 w-2 rounded-full bg-[#05070c]" /></div>
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 shadow-2xl shadow-black/20">
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

function Contact() {
  return (
    <section id="contact" className={`relative overflow-hidden px-6 py-32 text-white ${sectionVisibilityClass}`}>
      <SectionBridge />
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative z-10 mx-auto max-w-5xl rounded-[2.5rem] border border-white/10 bg-[#070b12]/70 p-8 text-center shadow-2xl shadow-black/40 backdrop-blur-xl sm:p-14">
        <Rocket className="mx-auto mb-6 h-10 w-10 text-sky-300" />
        <h2 className="text-4xl font-black tracking-tight sm:text-6xl">Ready to build something memorable?</h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">I’m open to web projects, frontend work, mobile development opportunities, and client-focused website updates.</p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href="mailto:Roshan.arun@live.com" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-black text-[#05070c] transition hover:bg-sky-200"><Mail className="h-4 w-4" /> Email Me</a>
          <a href="https://github.com/RoshanArun" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"><span className="text-base">⌘</span> GitHub</a>
          <a href="https://www.linkedin.com/in/roshan-arun-231a131b5/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"><span className="text-base font-bold">in</span> LinkedIn</a>
        </div>
      </motion.div>
    </section>
  );
}

function ProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  return <motion.div style={{ scaleX }} className="fixed left-0 right-0 top-0 z-[60] hidden h-1 origin-left bg-gradient-to-r from-sky-300 via-white to-blue-400 sm:block" />;
}

export default function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    document.documentElement.style.backgroundColor = "#05070c";
    document.body.style.backgroundColor = "#05070c";
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
    <main className="relative min-h-screen overflow-x-hidden bg-[#05070c] font-sans selection:bg-sky-300 selection:text-[#05070c]">
      <LivingBackground />
      <ProgressBar />
      <Navbar />
      <Hero />
      <Work />
      <Skills />
      <Toybox />
      <Experience />
      <Contact />
      <footer className="relative z-10 border-t border-white/10 px-6 py-8 text-center text-sm text-slate-500">© {new Date().getFullYear()} Roshan Arun. Built with React, Tailwind CSS, and Framer Motion.</footer>
    </main>
  );
}
