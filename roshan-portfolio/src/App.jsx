import React, { useEffect, useMemo, useState } from "react";
import { motion, useScroll, useSpring, useTransform, AnimatePresence, useAnimation } from "framer-motion";
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

function LivingBackground() {
  const particles = useMemo(
    () =>
      Array.from({ length: 90 }, (_, i) => ({
        id: i,
        left: `${(i * 29 + 11) % 100}%`,
        top: `${(i * 47 + 17) % 100}%`,
        size: 1 + ((i * 7) % 4),
        delay: (i % 13) * 0.22,
        duration: 4 + (i % 9),
      })),
    []
  );

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#05070c]">
      <motion.div
        animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
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
          animate={{ y: [0, -24, 0], opacity: [0.12, 0.75, 0.12], scale: [1, 1.7, 1] }}
          transition={{ duration: particle.duration + 2, delay: particle.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(5,7,12,0.05),rgba(5,7,12,0.78)_82%,#05070c)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,7,12,0.20)_48%,rgba(5,7,12,0.95)_100%)]" />
    </div>
  );
}

function NetworkMap() {
  const lines = [
    "M40 130 C180 20 260 250 420 120 S650 160 840 60",
    "M80 380 C210 260 340 480 520 330 S710 250 860 390",
    "M120 80 C280 170 360 20 520 140 S720 250 880 120",
  ];

  return (
    <div className="pointer-events-none absolute inset-0 hidden opacity-80 xl:block">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 900 520" preserveAspectRatio="none">
        {lines.map((line, index) => (
          <motion.path
            key={line}
            d={line}
            fill="none"
            stroke={index === 1 ? "rgba(255,255,255,0.16)" : "rgba(56,189,248,0.22)"}
            strokeWidth="1.2"
            strokeDasharray="9 16"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0], opacity: [0.1, 0.55, 0.1] }}
            transition={{ duration: 16 + index * 2, repeat: Infinity, delay: index * 0.9, ease: "easeInOut" }}
          />
        ))}
      </svg>
    </div>
  );
}

function HologramCore() {
  const rings = [
    { size: "h-[520px] w-[520px]", speed: 28, border: "border-sky-300/20" },
    { size: "h-[405px] w-[405px]", speed: 38, border: "border-white/14", reverse: true },
    { size: "h-[280px] w-[280px]", speed: 20, border: "border-blue-400/20" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.35, ease: "easeOut" }}
      className="relative mx-auto mt-12 h-[420px] w-full max-w-xl lg:mt-0 lg:h-[620px]"
    >
      <div className="absolute inset-0 rounded-full bg-sky-400/10 blur-3xl" />

      {rings.map((ring, index) => (
        <motion.div
          key={ring.size}
          animate={{ rotate: ring.reverse ? -360 : 360 }}
          transition={{ duration: ring.speed, repeat: Infinity, ease: "linear" }}
          className={`absolute left-1/2 top-1/2 ${ring.size} -translate-x-1/2 -translate-y-1/2 rounded-full border ${ring.border}`}
        >
          <motion.span
            className="absolute -top-1 left-1/2 h-3 w-3 rounded-full bg-sky-300 shadow-[0_0_26px_rgba(125,211,252,1)]"
            animate={{ scale: [1, 1.5, 1], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2.4, delay: index * 0.3, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      ))}

      <motion.div
        animate={{ y: [0, -16, 0], rotateX: [0, 8, 0], rotateY: [0, -8, 0] }}
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
  const panels = [
    { text: "npm run build  ✓", top: "18%", left: "6%", rotate: -7, delay: 0 },
    { text: "animation engine online", top: "27%", left: "73%", rotate: 6, delay: 0.4 },
    { text: "latency: 24ms", top: "72%", left: "7%", rotate: 4, delay: 0.8 },
    { text: "design system: synced", top: "68%", left: "70%", rotate: -5, delay: 1.2 },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block">
      {panels.map((panel) => (
        <motion.div
          key={panel.text}
          initial={{ opacity: 0, y: 30, rotate: panel.rotate }}
          animate={{ opacity: 0.72, y: [0, -18, 0], rotate: [panel.rotate, panel.rotate + 2, panel.rotate] }}
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
  const links = ["work", "skills", "toybox", "experience", "contact"];

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

      <motion.div style={{ y, opacity }} className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-6 pt-28 pb-20 lg:grid-cols-[1.02fr_0.98fr]">
        <div>
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }} className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-sky-300/20 bg-sky-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-sky-100 backdrop-blur">
            <Sparkles className="h-4 w-4" /> Software Engineer / iOS / Frontend
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }} className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl xl:text-8xl">
            I build digital products that feel sharp, fast, and alive.
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.24 }} className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            I’m Roshan, a software developer focused on iOS, frontend systems, clean architecture, and premium motion-driven user experiences.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.36 }} className="mt-10 flex flex-wrap gap-4">
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
  return (
    <motion.a
      href={project.link}
      target={project.link === "#" ? undefined : "_blank"}
      rel="noreferrer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay: index * 0.08 }}
      whileHover={{ y: -12, scale: 1.015 }}
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
    <section id="work" className="relative overflow-hidden px-6 py-32 text-white">
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
  const repeated = useMemo(() => [...skills, ...skills, ...skills], []);
  return (
    <section id="skills" className="relative overflow-hidden py-32 text-white">
      <SectionBridge />
      <div className="relative z-10">
        <SectionHeader eyebrow="Stack" title="The tools behind the build." description="Mobile, web, UI systems, API integration, and performance-focused development." />
        <div className="relative mx-auto max-w-7xl overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-[#05070c] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-[#05070c] to-transparent" />
          <motion.div animate={{ x: [0, -1300] }} transition={{ duration: 24, repeat: Infinity, ease: "linear" }} className="flex w-max gap-4 px-6">
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

function DraggableToy({ resetSignal, initial, className = "", children }) {
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
      dragMomentum
      dragElastic={0.18}
      dragTransition={{ power: 0.35, timeConstant: 320 }}
      animate={controls}
      whileDrag={{ scale: 1.08, zIndex: 80, rotate: 2 }}
      whileHover={{ scale: 1.04 }}
      className={`absolute cursor-grab select-none active:cursor-grabbing [touch-action:none] ${className}`}
      style={{ left: initial.left, top: initial.top }}
    >
      {children}
    </motion.div>
  );
}

function MotionPlayground({ resetSignal }) {
  const toys = [
    { label: "Spring", left: "9%", top: "18%", shape: "pill" },
    { label: "Orbit", left: "71%", top: "17%", shape: "orb" },
    { label: "Ease", left: "39%", top: "36%", shape: "chip" },
    { label: "Velocity", left: "13%", top: "70%", shape: "chip" },
    { label: "Hover", left: "72%", top: "68%", shape: "pill" },
  ];

  const toyClass = (shape) => {
    if (shape === "orb") {
      return "grid h-24 w-24 place-items-center rounded-full border border-sky-300/20 bg-sky-300/10 text-xs font-black uppercase tracking-[0.14em] text-sky-100 shadow-2xl shadow-sky-950/30 backdrop-blur";
    }
    if (shape === "pill") {
      return "rounded-full border border-sky-300/20 bg-[#0b1220]/90 px-6 py-4 text-sm font-black text-white shadow-2xl shadow-black/40 backdrop-blur";
    }
    return "rounded-2xl border border-sky-300/20 bg-[#0b1220]/90 px-6 py-4 text-sm font-black text-white shadow-2xl shadow-black/40 backdrop-blur";
  };

  return (
    <div className="relative z-10 mt-6 h-[500px] overflow-visible rounded-[2rem] border border-white/10 bg-black/20">
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 38, repeat: Infinity, ease: "linear" }} className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-sky-300/15" />
      <motion.div animate={{ rotate: -360 }} transition={{ duration: 54, repeat: Infinity, ease: "linear" }} className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />

      {toys.map((toy) => (
        <DraggableToy key={toy.label} resetSignal={resetSignal} initial={{ left: toy.left, top: toy.top }} className={toyClass(toy.shape)}>
          {toy.label}
        </DraggableToy>
      ))}

      <DraggableToy
        resetSignal={resetSignal}
        initial={{ left: "18%", top: "44%" }}
        className="w-[62%] max-w-xl rounded-2xl border border-white/10 bg-[#080c14]/85 p-6 font-mono text-sm text-slate-300 shadow-2xl shadow-black/30 backdrop-blur"
      >
        <p><span className="text-sky-300">motion</span>.play(&#123; spring, velocity, hover &#125;);</p>
      </DraggableToy>
    </div>
  );
}

function ColorMixerPlayground({ resetSignal }) {
  const [accent, setAccent] = useState(55);
  const [density, setDensity] = useState(5);
  const [rounded, setRounded] = useState(28);

  useEffect(() => {
    setAccent(55);
    setDensity(5);
    setRounded(28);
  }, [resetSignal]);

  const swatches = useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        left: `${8 + ((i * 17) % 84)}%`,
        top: `${12 + ((i * 29) % 74)}%`,
        delay: i * 0.06,
      })),
    []
  );

  return (
    <div className="relative z-10 mt-6 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
      <div className="rounded-[2rem] border border-white/10 bg-black/20 p-5">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-sky-300">visual mixer</p>
        <h4 className="mt-3 text-2xl font-black">Tune the interface</h4>
        <p className="mt-3 leading-7 text-slate-400">
          Use the sliders to change the feel of the preview. This is a tiny design-control panel instead of a simple layout grid.
        </p>

        <div className="mt-8 space-y-6">
          {[
            ["accent", accent, setAccent, 0, 100],
            ["density", density, setDensity, 1, 10],
            ["radius", rounded, setRounded, 4, 40],
          ].map(([label, value, setter, min, max]) => (
            <div key={label}>
              <div className="mb-3 flex items-center justify-between text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                <span>{label}</span>
                <span className="text-sky-300">{value}</span>
              </div>
              <input
                type="range"
                min={min}
                max={max}
                value={value}
                onChange={(event) => setter(Number(event.target.value))}
                className="w-full accent-sky-300"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-white/10 bg-black/20 p-5">
        <motion.div
          animate={{ scale: [1, 1.04 + density * 0.01, 1], opacity: [0.22, 0.5, 0.22] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
          style={{ backgroundColor: `hsla(${190 + accent}, 90%, 60%, 0.16)` }}
        />

        {swatches.slice(0, density + 8).map((swatch) => (
          <motion.div
            key={swatch.id}
            className="absolute border border-white/10 bg-white/[0.055] backdrop-blur"
            style={{ left: swatch.left, top: swatch.top, width: 42 + accent * 0.22, height: 42 + density * 4, borderRadius: rounded }}
            animate={{ y: [0, -8, 0], opacity: [0.45, 0.9, 0.45] }}
            transition={{ duration: 4, delay: swatch.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}

        <motion.div
          layout
          className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-[#080c14]/80 p-5 backdrop-blur"
          style={{ borderRadius: rounded }}
        >
          <p className="font-mono text-sm text-slate-300">
            <span className="text-sky-300">theme</span>.mix(&#123; accent: {accent}, density: {density}, radius: {rounded} &#125;)
          </p>
        </motion.div>
      </div>
    </div>
  );
}

function GravityPlayground({ resetSignal }) {
  const [gravity, setGravity] = useState(4);
  const balls = useMemo(
    () =>
      Array.from({ length: 8 }, (_, i) => ({
        id: i,
        left: `${10 + ((i * 13) % 78)}%`,
        size: 34 + ((i * 11) % 42),
        delay: i * 0.12,
      })),
    []
  );

  useEffect(() => {
    setGravity(4);
  }, [resetSignal]);

  return (
    <div className="relative z-10 mt-6 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
      <div className="rounded-[2rem] border border-white/10 bg-black/20 p-5">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-sky-300">gravity field</p>
        <h4 className="mt-3 text-2xl font-black">Change the pull</h4>
        <p className="mt-3 leading-7 text-slate-400">
          Adjust gravity and watch the objects fall with different timing. You can also drag the capsules manually.
        </p>
        <div className="mt-8">
          <div className="mb-3 flex items-center justify-between text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
            <span>gravity</span>
            <span className="text-sky-300">{gravity}</span>
          </div>
          <input min="1" max="8" type="range" value={gravity} onChange={(e) => setGravity(Number(e.target.value))} className="w-full accent-sky-300" />
        </div>
      </div>

      <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-white/10 bg-black/20 p-5">
        <div className="absolute bottom-7 left-7 right-7 h-px bg-gradient-to-r from-transparent via-sky-300/35 to-transparent" />
        {balls.map((ball) => (
          <motion.div
            key={`${resetSignal}-${ball.id}`}
            drag
            dragMomentum
            dragElastic={0.18}
            className="absolute cursor-grab rounded-full border border-sky-300/20 bg-sky-300/10 shadow-2xl shadow-sky-950/30 backdrop-blur active:cursor-grabbing [touch-action:none]"
            style={{ left: ball.left, width: ball.size, height: ball.size }}
            animate={{ y: [0, 330 - ball.size, 330 - ball.size - gravity * 10, 330 - ball.size] }}
            transition={{ duration: Math.max(1, 3.4 - gravity * 0.22), delay: ball.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>
    </div>
  );
}

function SystemsNode({ node, resetSignal, onMove, children }) {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: 0,
      y: 0,
      rotate: 0,
      transition: { type: "spring", stiffness: 170, damping: 18 },
    });
    onMove(node.id, { x: node.x, y: node.y });
  }, [resetSignal, controls]);

  return (
    <motion.div
      drag
      dragMomentum
      dragElastic={0.18}
      animate={controls}
      onDrag={(event, info) => {
        onMove(node.id, {
          x: node.x + info.offset.x,
          y: node.y + info.offset.y,
        });
      }}
      onDragEnd={(event, info) => {
        onMove(node.id, {
          x: node.x + info.offset.x,
          y: node.y + info.offset.y,
        });
      }}
      whileDrag={{ scale: 1.08, zIndex: 80 }}
      whileHover={{ scale: 1.04 }}
      className="absolute grid h-24 w-24 cursor-grab select-none place-items-center rounded-full border border-sky-300/20 bg-[#0b1220]/90 text-sm font-black text-white shadow-2xl shadow-black/40 backdrop-blur active:cursor-grabbing [touch-action:none]"
      style={{ left: node.x - 48, top: node.y - 48 }}
    >
      {children}
    </motion.div>
  );
}

function SystemsPlayground({ resetSignal }) {
  const initialNodes = useMemo(
    () => [
      { id: "ui", label: "UI", x: 140, y: 110 },
      { id: "state", label: "State", x: 420, y: 80 },
      { id: "api", label: "API", x: 700, y: 170 },
      { id: "cpp", label: "C++", x: 265, y: 340 },
      { id: "swift", label: "Swift", x: 625, y: 350 },
    ],
    []
  );

  const [nodePositions, setNodePositions] = useState(() =>
    Object.fromEntries(initialNodes.map((node) => [node.id, { x: node.x, y: node.y }]))
  );

  useEffect(() => {
    setNodePositions(Object.fromEntries(initialNodes.map((node) => [node.id, { x: node.x, y: node.y }])));
  }, [resetSignal, initialNodes]);

  const updateNode = (id, position) => {
    setNodePositions((current) => ({ ...current, [id]: position }));
  };

  const line = (from, to) => {
    const a = nodePositions[from];
    const b = nodePositions[to];
    return { x1: a.x, y1: a.y, x2: b.x, y2: b.y };
  };

  const links = [line("ui", "state"), line("state", "api"), line("state", "cpp"), line("cpp", "swift"), line("swift", "api")];

  return (
    <div className="relative z-10 mt-6 h-[500px] overflow-visible rounded-[2rem] border border-white/10 bg-black/20">
      <svg className="absolute inset-0 h-full w-full overflow-visible opacity-80">
        {links.map((linkItem, index) => (
          <motion.line
            key={index}
            x1={linkItem.x1}
            y1={linkItem.y1}
            x2={linkItem.x2}
            y2={linkItem.y2}
            stroke={index % 2 === 0 ? "rgba(125,211,252,0.36)" : "rgba(255,255,255,0.20)"}
            strokeWidth="2"
            strokeDasharray="10 12"
            animate={{ strokeDashoffset: [0, -44] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </svg>

      {initialNodes.map((node) => (
        <SystemsNode key={node.id} node={node} resetSignal={resetSignal} onMove={updateNode}>
          {node.label}
        </SystemsNode>
      ))}

      <div className="absolute bottom-5 left-5 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm text-slate-300 backdrop-blur">
        <p className="font-black text-white">System mode</p>
        <p className="mt-1 max-w-60">Drag nodes anywhere. The connection lines follow the correct circles.</p>
      </div>
    </div>
  );
}

function Toybox() {
  const [resetSignal, setResetSignal] = useState(0);
  const [activeMode, setActiveMode] = useState("motion");

  const modeCopy = {
    motion: {
      title: "Motion playground",
      description: "Throw draggable objects around and let the motion system do the work.",
    },
    mixer: {
      title: "Visual mixer",
      description: "Use sliders to remix the preview’s accent, density, and radius in real time.",
    },
    gravity: {
      title: "Gravity field",
      description: "Adjust gravity and play with falling objects that respond to the control panel.",
    },
    systems: {
      title: "Systems playground",
      description: "Drag architecture nodes anywhere and watch the connection lines follow.",
    },
  };

  return (
    <section id="toybox" className="relative overflow-hidden px-6 py-32 text-white">
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
          className="relative mx-auto min-h-[700px] max-w-6xl overflow-visible rounded-[2.5rem] border border-white/10 bg-white/[0.035] p-6 shadow-2xl shadow-black/40 backdrop-blur-xl"
        >
          <div className="absolute inset-0 overflow-hidden rounded-[2.5rem]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.14),transparent_42%),linear-gradient(to_bottom,rgba(255,255,255,0.04),transparent)]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.035)_1px,transparent_1px)] bg-[size:54px_54px] opacity-70" />
          </div>

          <div className="relative z-10 flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-sky-300">{activeMode}</p>
              <h3 className="mt-2 text-2xl font-black">{modeCopy[activeMode].title}</h3>
              <p className="mt-2 max-w-2xl text-sm text-slate-400">{modeCopy[activeMode].description}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {Object.keys(modeCopy).map((modeName) => (
                <button
                  key={modeName}
                  type="button"
                  onClick={() => {
                    setActiveMode(modeName);
                    setResetSignal((value) => value + 1);
                  }}
                  className={`rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] transition ${
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
                className="rounded-full border border-white/20 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#05070c] transition hover:bg-sky-200"
              >
                Reset
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeMode}
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -18, scale: 0.98 }}
              transition={{ duration: 0.35 }}
            >
              {activeMode === "motion" && <MotionPlayground resetSignal={resetSignal} />}
              {activeMode === "mixer" && <ColorMixerPlayground resetSignal={resetSignal} />}
              {activeMode === "gravity" && <GravityPlayground resetSignal={resetSignal} />}
              {activeMode === "systems" && <SystemsPlayground resetSignal={resetSignal} />}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden px-6 py-32 text-white">
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
    <section id="contact" className="relative overflow-hidden px-6 py-32 text-white">
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
  return <motion.div style={{ scaleX }} className="fixed left-0 right-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-sky-300 via-white to-blue-400" />;
}

export default function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => { document.documentElement.style.scrollBehavior = "auto"; };
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
