import React from "react";
import { FaCodeBranch } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import HealthMate from "@/public/HealthMate.png";
import Breakout from "@/public/Breakout_C.png";
import InvoiceHub from "@/public/InvoiceHub.png";
import { IoCodeSlash } from "react-icons/io5";
import AngryBirds from "@/public/angrybirdsspace.png";
import AirconBot from "@/public/AirconBot.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
] as const;
export const experiencesData = [
  {
    title: "Teaching Assistant (Intro to Python Programming)",
    location: "Singapore University of Technology",
    description:
      "Led Python instruction, simplified complex concepts, mentored students on coding projects, and set up IoT labs using Raspberry Pi.",
    icon: React.createElement(LuGraduationCap),
    date: "Nov 2021 - Jan 2022",
  },
  {
    title: "Software Engineer Intern (R&D Dept)",
    location: "Primech A&P Pte Ltd",
    description:
      "Optimized robot dashboard by enhancing API functionality (CRUD, JWT) and addressing UI/UX improvements. Refactored JavaScript code for maintainability, integrated task summary feature, and resolved bugs in Python-based IoT platform.",
    icon: React.createElement(IoCodeSlash),
    date: "Aug 2023 - Jan 2024",
  },
  {
    title: "Software Engineer Intern (R&D Dept)",
    location: "Primech A&P Pte Ltd",
    description:
      "Refactored legacy Flutter codebase, ensuring compatibility with the latest version. Designed and developed a custom PHP personnel management app, produced a promotional video showcased at CESG, and documented API usage for project maintainability.",
    icon: React.createElement(FaCodeBranch),
    date: "Apr 2024 - Sep 2024",
  },
] as const;

export const projectsData = [
  {
    title: "HealthMate",
    description:
      "Fitness app with calorie tracking and Google Fitness sync. Backend in Java, Firebase for data storage.",
    tags: ["Java", "Firebase", "Google Fitness"],
    imageUrl: HealthMate,
  },
  {
    title: "InvoiceHub",
    description:
      "Fullstack app using AWS OCR to extract and store receipt data in MySQL. Used Agile and Figma for prototyping.",
    tags: ["AWS OCR", "MySQL", "Agile", "Figma"],
    imageUrl: InvoiceHub,
  },
  {
    title: "3D Angry Bird Space",
    description:
      "Computer graphic cube physics simulation game on OpenGL using a self-built C++ physics engine.",
    tags: ["OpenGL", "C++", "Physics Engine"],
    imageUrl: AngryBirds,
  },
  {
    title: "Atari Breakout",
    description: "2D Breakout game made using C and SDL2 game library.",
    tags: ["C", "SDL2"],
    imageUrl: Breakout,
  },
  {
    title: "Aircon Balance Bot",
    description:
      "Python bots for web scraping university aircon balances using BeautifulSoup and Selenium.",
    tags: ["Python", "BeautifulSoup", "Selenium"],
    imageUrl: AirconBot,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "Python",
  "Java",
  "Firebase",
  "Google Fitness",
  "AWS OCR",
  "MySQL",
  "Agile",
  "Figma",
  "OpenGL",
  "C++",
  "C",
  "SDL2",
  "Selenium",
] as const;

export const DependancyGraph = {
  "HTML": "CSS, JavaScript",
  "CSS": "HTML, Tailwind",
  "JavaScript": "HTML, React, Node.js, Redux",
  "TypeScript": "React, Node.js, Next.js",
  "React": "JavaScript, TypeScript, Redux, Next.js, GraphQL, Apollo, Express",
  "Next.js": "TypeScript, React",
  "Node.js": "JavaScript, TypeScript, Express, MongoDB",
  "Git": "Agile, Figma",
  "Tailwind": "CSS",
  "MongoDB": "Node.js, GraphQL, MySQL",
  "Redux": "JavaScript, React",
  "GraphQL": "React, MongoDB, Apollo",
  "Apollo": "React, GraphQL",
  "Express": "Node.js, React",
  "Python": "Selenium",
  "Java": "Firebase, Google Fitness",
  "Firebase": null,
  "Google Fitness": null,
  "AWS OCR": null,
  "MySQL": "MongoDB",
  "Agile": "Git, Figma",
  "Figma": "Agile, Git",
  "OpenGL": "C++, C",
  "C++": "OpenGL, SDL2",
  "C": "OpenGL, SDL2",
  "SDL2": "C++, C",
  "Selenium": "Python",
} as const;
