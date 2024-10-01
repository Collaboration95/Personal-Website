import React from "react";
// import { CgWorkAlt } from "react-icons/cg";
// import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import HealthMate from "@/public/HealthMate.png";
import Breakout from "@/public/Breakout_C.png";
import InvoiceHub from "@/public/InvoiceHub.png";
// import rmtdevImg from "@/public/rmtdev.png";
// import wordanalyticsImg from "@/public/wordanalytics.png";

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
      "Facilitated Python instruction, mentored students, and managed IoT lab setup with Raspberry Pi.",
    icon: React.createElement(LuGraduationCap),
    date: "Nov 2021 - Jan 2022",
  },
  {
    title: "Software Engineer Intern (R&D Dept)",
    location: "Primech A&P Pte Ltd",
    description:
      "Enhanced robot dashboard with improved API (CRUD, JWT), UI updates, and refactored JavaScript. Supported cloud services and fixed bugs in the Python backend for IoT sensors.",
    icon: React.createElement(LuGraduationCap),
    date: "Aug 2023 - Jan 2024",
  },
  {
    title: "Software Engineer Intern (R&D Dept)",
    location: "Primech A&P Pte Ltd",
    description:
      "Updated Flutter codebase, developed PHP personnel management app, created promotional video for CESG, and added documentation to a legacy project.",
    icon: React.createElement(LuGraduationCap),
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
    imageUrl: corpcommentImg,
  },
  {
    title: "Atari Breakout",
    description:
      "2D Breakout game made using C and SDL2 game library.",
    tags: ["C", "SDL2"],
    imageUrl: Breakout,
  },
  {
    title: "Aircon Balance Bot",
    description:
      "Python bots for web scraping university aircon balances using BeautifulSoup and Selenium.",
    tags: ["Python", "BeautifulSoup", "Selenium"],
    imageUrl: corpcommentImg,
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
