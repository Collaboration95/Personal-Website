import type { StaticImageData } from "next/image";

import airconBotImage from "@/public/AirconBot.png";
import angryBirdsImage from "@/public/angrybirdsspace.png";
import breakoutImage from "@/public/Breakout_C.png";
import healthMateImage from "@/public/HealthMate.png";
import invoiceHubImage from "@/public/InvoiceHub.png";
import portraitImage from "@/public/intro-alone.jpeg";

export type SocialLink = {
  label: string;
  href: string;
  shortLabel: string;
};

export type Project = {
  title: string;
  period: string;
  description: string;
  context: string;
  technologies: readonly string[];
  image: StaticImageData;
  imageAlt: string;
};

export type Experience = {
  title: string;
  organisation: string;
  period: string;
  description: string;
};

export type PhotoMoment = {
  title: string;
  period: string;
  caption: string;
  image: StaticImageData;
  imageAlt: string;
};

export type TimelineChapter = {
  id: string;
  navLabel: string;
  eyebrow: string;
  title: string;
  purpose: string;
  kind: "project" | "photo" | "note";
  project?: Project;
  photo?: PhotoMoment;
  note?: {
    heading: string;
    body: string;
    items: readonly Experience[];
  };
};

export const siteContent = {
  name: "Guru Prasath",
  shortName: "Guru",
  location: "Singapore",
  role: "Software engineer / systems builder",
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://guruprasathgopal-collaboration95s-projects.vercel.app",
  description:
    "Guru Prasath is a software engineer building useful tools across web, IoT, cloud services, and small experiments.",
  hero: {
    eyebrow: "A personal working archive",
    title: "I like building the useful parts of software.",
    paragraph:
      "I’m Guru — a software engineer who moves between web apps, IoT systems, cloud services, and the small details that make a tool feel easier to use.",
    image: portraitImage,
    imageAlt:
      "Portrait of Guru Prasath in a light blue shirt, looking toward the camera.",
  },
  about: {
    eyebrow: "A little context",
    title: "Curious by default. Practical when it counts.",
    body:
      "I studied Information Systems Technology and Design at SUTD. Since then, my work has ranged from teaching Python and setting up Raspberry Pi labs to improving robot dashboards, maintaining Flutter code, and making small tools that remove a little friction.",
  },
  contact: {
    email: "guruprasath3200@gmail.com",
    prompt: "Have a problem worth making smaller?",
    body:
      "I’m open to thoughtful conversations about software, systems, and work that is useful to real people.",
  },
  socials: [
    {
      label: "LinkedIn",
      shortLabel: "LI",
      href: "https://www.linkedin.com/in/guruprasath3200/",
    },
    {
      label: "GitHub",
      shortLabel: "GH",
      href: "https://github.com/Collaboration95",
    },
  ] satisfies readonly SocialLink[],
  experiences: [
    {
      title: "Teaching Assistant — Intro to Python Programming",
      organisation: "Singapore University of Technology",
      period: "Nov 2021 — Jan 2022",
      description:
        "Facilitated Python instruction, mentored students on coursework and projects, and coordinated IoT lab setup with Raspberry Pi.",
    },
    {
      title: "Software Engineer Intern — R&D",
      organisation: "Primech A&P Pte Ltd",
      period: "Aug 2023 — Jan 2024",
      description:
        "Improved robot dashboard APIs and UI, worked through authentication issues, refactored JavaScript, and supported a Python IoT platform.",
    },
    {
      title: "Software Engineer Intern — R&D",
      organisation: "Primech A&P Pte Ltd",
      period: "Apr 2024 — Sep 2024",
      description:
        "Updated a legacy Flutter codebase, helped build a PHP personnel application, produced a CESG promotional video, and documented an older system.",
    },
  ] satisfies readonly Experience[],
  projects: [
    {
      title: "HealthMate",
      period: "Fitness / mobile",
      description:
        "A fitness app for calorie tracking and activity syncing through Google Fitness.",
      context:
        "The work combined a Java backend with Firebase storage and a simple way to keep activity data moving.",
      technologies: ["Java", "Firebase", "Google Fitness"],
      image: healthMateImage,
      imageAlt:
        "HealthMate project board showing a fitness dashboard, phone screens, and Google Fitness integration flow.",
    },
    {
      title: "InvoiceHub",
      period: "Full-stack / OCR",
      description:
        "A full-stack application that turns convenience-store receipts into structured records.",
      context:
        "AWS OCR extracted receipt information before it was stored in MySQL; the project also used Agile planning and Figma prototypes.",
      technologies: ["AWS OCR", "MySQL", "Agile", "Figma"],
      image: invoiceHubImage,
      imageAlt:
        "InvoiceHub project image showing receipt OCR extraction and the application's interface.",
    },
    {
      title: "3D Angry Bird Space",
      period: "Graphics / physics",
      description:
        "A computer-graphics physics simulation built around cubes, collisions, and a self-built C++ engine.",
      context:
        "An experiment in making the rules of a small world visible through OpenGL.",
      technologies: ["OpenGL", "C++", "Physics engine"],
      image: angryBirdsImage,
      imageAlt:
        "3D Angry Bird Space project screenshot showing a bird-shaped model in a block-based scene.",
    },
    {
      title: "Atari Breakout",
      period: "Game / C",
      description: "A 2D Breakout game made with C and the SDL2 library.",
      context:
        "A compact exercise in input, collision logic, and the satisfying feedback loop of a game that fits on one screen.",
      technologies: ["C", "SDL2"],
      image: breakoutImage,
      imageAlt:
        "Atari Breakout project screenshot showing the paddle, ball, and rows of coloured bricks.",
    },
    {
      title: "Aircon Balance Bot",
      period: "Automation / Python",
      description:
        "Python bots that simplified checking university aircon balances through web scraping.",
      context:
        "BeautifulSoup and Selenium handled the repetitive part so checking a balance took less attention.",
      technologies: ["Python", "BeautifulSoup", "Selenium"],
      image: airconBotImage,
      imageAlt:
        "Aircon Balance Bot project screenshot showing a GitHub repository with Python bot files.",
    },
  ] satisfies readonly Project[],
  photo: {
    title: "A small pause",
    period: "Portrait / 2024",
    caption:
      "The work is technical. The reason for doing it is usually more ordinary: make the next step easier to see.",
    image: portraitImage,
    imageAlt:
      "A close portrait of Guru Prasath, framed against a bright interior background.",
  } satisfies PhotoMoment,
} as const;

export const chapters: readonly TimelineChapter[] = [
  {
    id: "work-healthmate",
    navLabel: "HealthMate",
    eyebrow: "01 / selected work",
    title: siteContent.projects[0].title,
    purpose: "A first look at building a tool around a daily habit.",
    kind: "project",
    project: siteContent.projects[0],
  },
  {
    id: "photo-pause",
    navLabel: "A small pause",
    eyebrow: "02 / personal note",
    title: siteContent.photo.title,
    purpose: "A quieter moment between systems and screens.",
    kind: "photo",
    photo: siteContent.photo,
  },
  {
    id: "work-invoicehub",
    navLabel: "InvoiceHub",
    eyebrow: "03 / selected work",
    title: siteContent.projects[1].title,
    purpose: "Making messy inputs easier to carry forward.",
    kind: "project",
    project: siteContent.projects[1],
  },
  {
    id: "work-angry-bird",
    navLabel: "Angry Bird Space",
    eyebrow: "04 / selected work",
    title: siteContent.projects[2].title,
    purpose: "Learning by making the rules of a world tangible.",
    kind: "project",
    project: siteContent.projects[2],
  },
  {
    id: "work-breakout",
    navLabel: "Atari Breakout",
    eyebrow: "05 / selected work",
    title: siteContent.projects[3].title,
    purpose: "A small game with nowhere for the feedback to hide.",
    kind: "project",
    project: siteContent.projects[3],
  },
  {
    id: "work-aircon-bot",
    navLabel: "Aircon Bot",
    eyebrow: "06 / selected work",
    title: siteContent.projects[4].title,
    purpose: "Automation for the tasks that should take less attention.",
    kind: "project",
    project: siteContent.projects[4],
  },
  {
    id: "work-archive",
    navLabel: "Work archive",
    eyebrow: "07 / work archive",
    title: "The through line is usefulness.",
    purpose: "A short record of the places and people that shaped the work.",
    kind: "note",
    note: {
      heading: siteContent.about.title,
      body: siteContent.about.body,
      items: siteContent.experiences,
    },
  },
];

export const dialChapters = [
  { id: "top", label: "Start" },
  ...chapters.map(({ id, navLabel }) => ({ id, label: navLabel })),
  { id: "contact", label: "Contact" },
] as const;
