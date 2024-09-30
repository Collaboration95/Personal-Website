import React from "react";
// import { CgWorkAlt } from "react-icons/cg";
// import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
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
    title: "Template Title ",
    location: "Template Location",
    description: "Template Description Lorem ispsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Template Title ",
    location: "Template Location",
    description: "Template Description Lorem ispsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },  {
    title: "Template Title ",
    location: "Template Location",
    description: "Template Description Lorem ispsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },  {
    title: "Template Title ",
    location: "Template Location",
    description: "Template Description Lorem ispsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
] as const;

export const projectsData = [
  {
    title: "Template Title",
    description:
      "Template Description , lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc.",
    tags: ["React", "Next.js", "MongoDB"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Template Title",
    description:
      "Template Description , lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc.",
    tags: ["React", "Next.js", "MongoDB"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Template Title",
    description:
      "Template Description , lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc.",
    tags: ["React", "Next.js", "MongoDB"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Template Title",
    description:
      "Template Description , lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc.",
    tags: ["React", "Next.js", "MongoDB"],
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
] as const;
