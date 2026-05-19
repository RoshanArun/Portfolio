import { Code2, Smartphone, Layers } from "lucide-react";


export const projects = [
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
    title: "DevFlow",
    type: "Mock Dashboard",
    description:
      "A mock dashboard for freelancers, designers, and developers to manage clients, projects, invoices, deadlines, revisions, and income.",
    tech: ["React", "Tailwind", "UI/UX", "HTML/CSS"],
    link: "https://roshanarun.github.io/DevFlow/",
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

export const skills = ["Swift", "SwiftUI", "UIKit", "C++", "Djinni", "React", "Vue", "TypeScript", "Next.js", "Tailwind CSS", "Redux", "REST APIs"];

export const skillCards = [
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

export const experience = [
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
