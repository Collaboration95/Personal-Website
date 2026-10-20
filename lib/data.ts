import type { StaticImageData } from "next/image";

import airconBotImage from "@/public/AirconBot.png";
import angryBirdsImage from "@/public/angrybirdsspace.png";
import breakoutImage from "@/public/Breakout_C.png";
import detectTImage from "@/public/detectt-posenet-setup.png";
import healthMateImage from "@/public/HealthMate.png";
import invoiceHubImage from "@/public/InvoiceHub.png";
import portraitImage from "@/public/intro-alone.jpeg";
import portrait2924Image from "@/public/portrait-reel/IMG_2924.jpg";
import portrait2978Image from "@/public/portrait-reel/IMG_2978.jpg";
import portrait3498Image from "@/public/portrait-reel/IMG_3498.jpg";
import portrait4358Image from "@/public/portrait-reel/IMG_4358.jpg";
import portrait4544Image from "@/public/portrait-reel/IMG_4544.jpg";
import portrait4777Image from "@/public/portrait-reel/IMG_4777.jpg";
import portrait5601Image from "@/public/portrait-reel/IMG_5601.jpg";
import portrait5716Image from "@/public/portrait-reel/IMG_5716.jpg";
import portrait5737Image from "@/public/portrait-reel/IMG_5737.jpg";
import portrait5880Image from "@/public/portrait-reel/IMG_5880.jpg";
import portrait5898Image from "@/public/portrait-reel/IMG_5898.jpg";
import portrait6950Image from "@/public/portrait-reel/IMG_6950.jpg";
import portrait7021Image from "@/public/portrait-reel/IMG_7021.jpg";

export type SocialLink = {
  label: string;
  href: string;
  shortLabel: string;
};

export type PortraitReelImage = {
  image: StaticImageData;
  alt: string;
};

export type Project = {
  title: string;
  period: string;
  description: string;
  context: string;
  technologies: readonly string[];
  image: StaticImageData;
  imageAlt: string;
  href?: string;
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

export const siteContent = {
  name: "Guru Prasath",
  shortName: "Guru",
  location: "Singapore",
  role: "Software engineer / systems builder",
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://guruprasathgopal-collaboration95s-projects.vercel.app",
  description:
    "Software, small experiments, and the stories behind them. Guru Prasath’s personal collection of projects, hackathons, and field notes from Singapore.",
  // The current site intentionally points to the verified public profile until
  // a current PDF résumé is ready to publish.
  resumeHref: "https://www.linkedin.com/in/guruprasath3200/",
  resumeLabel: "Résumé (LinkedIn)",
  hero: {
    eyebrow: "Singapore-based software engineer",
    title: "I build software that makes complex systems easier to trust.",
    paragraph:
      "From computer-vision products and local AI tools to data pipelines, APIs, and connected devices, I turn ambiguous problems into practical, measurable systems.",
    education: [
      {
        institution: "NUS",
        qualification: "Master of Technology in Software Engineering",
      },
      {
        institution: "SUTD",
        qualification: "Computer Science & Design graduate",
      },
    ],
    image: portraitImage,
    imageAlt:
      "Portrait of Guru Prasath in a light blue shirt, looking toward the camera.",
    images: [
      {
        image: portraitImage,
        alt: "Portrait of Guru Prasath in a light blue shirt, looking toward the camera.",
      },
      {
        image: portrait5737Image,
        alt: "Portrait of Guru Prasath in a white shirt outdoors among greenery.",
      },
      {
        image: portrait4358Image,
        alt: "Guru Prasath wearing headphones at a desk with colleagues in the background.",
      },
      {
        image: portrait5716Image,
        alt: "Guru Prasath standing with four colleagues outside a building.",
      },
      {
        image: portrait4777Image,
        alt: "Guru Prasath and a colleague beside a whiteboard covered in planning notes.",
      },
      {
        image: portrait2924Image,
        alt: "Guru Prasath taking a group selfie with friends on a colorful street.",
      },
      {
        image: portrait5880Image,
        alt: "Guru Prasath kayaking on a Singapore waterway with the city behind him.",
      },
      {
        image: portrait5898Image,
        alt: "Guru Prasath kayaking with another paddler on a Singapore waterway.",
      },
      {
        image: portrait6950Image,
        alt: "Guru Prasath kayaking with another paddler and an orange kayak behind him.",
      },
      {
        image: portrait5601Image,
        alt: "Guru Prasath taking a mirror selfie in an elevator.",
      },
      {
        image: portrait7021Image,
        alt: "Guru Prasath taking a mirror selfie at home with family in the background.",
      },
      {
        image: portrait2978Image,
        alt: "Guru Prasath and a friend sharing ice cream at an indoor market.",
      },
      {
        image: portrait3498Image,
        alt: "Guru Prasath sitting with a friend on a train.",
      },
      {
        image: portrait4544Image,
        alt: "Guru Prasath standing with an older colleague in formal clothes.",
      },
    ] satisfies readonly PortraitReelImage[],
  },
  contact: {
    email: "guruprasath3200@gmail.com",
    prompt: "Have a problem worth making smaller?",
    body: "I’m interested in software roles where the work has real constraints—data, users, devices, or decisions—and where careful engineering changes the outcome.",
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
      title: "Software Engineer Intern — R&D",
      organisation: "Primech A&P Pte Ltd",
      period: "Aug 2023 — Jan 2024",
      description:
        "Improved robot dashboard APIs and UI, worked through JWT authentication issues, refactored JavaScript, and supported a Python IoT platform.",
    },
    {
      title: "Software Engineer Intern — R&D",
      organisation: "Primech A&P Pte Ltd",
      period: "Apr 2024 — Sep 2024",
      description:
        "Updated a legacy Flutter codebase, helped build a PHP personnel application, produced a CESG promotional video, and documented an older system.",
    },
    {
      title: "Teaching Assistant — Intro to Python Programming",
      organisation: "Singapore University of Technology and Design",
      period: "Nov 2021 — Jan 2022",
      description:
        "Facilitated Python instruction, mentored students on coursework and projects, and coordinated IoT lab setup with Raspberry Pi.",
    },
  ] satisfies readonly Experience[],
  archive: [
    {
      title: "DetectT",
      period: "Computer vision / pose detection",
      description:
        "A browser-based pose-detection prototype that verifies front and side poses, captures images, and feeds a size-analysis workflow.",
      context:
        "Built for Fitback with real-time skeleton overlays, camera feedback, and a finite-state interaction flow.",
      technologies: [
        "JavaScript",
        "TensorFlow.js",
        "MoveNet / PoseNet",
        "Canvas",
      ],
      image: detectTImage,
      imageAlt:
        "DetectT prototype showing original and mirrored camera feeds with a pose skeleton overlay.",
      href: "https://github.com/Collaboration95/DetectT",
    },
    {
      title: "HealthMate",
      period: "Fitness / mobile",
      description:
        "An Android fitness app with calorie tracking, Google Fitness syncing, GPS runs, and a Java backend.",
      context:
        "A first attempt at making personal health data easier to carry through a day.",
      technologies: ["Java", "Firebase", "Google Fitness"],
      image: healthMateImage,
      imageAlt:
        "HealthMate project board showing a fitness dashboard, phone screens, and Google Fitness integration flow.",
    },
    {
      title: "InvoiceHub",
      period: "Full-stack / OCR",
      description:
        "A receipt workflow that used AWS OCR to turn convenience-store invoices into structured records.",
      context:
        "An early lesson in making messy inputs useful to the next screen.",
      technologies: ["AWS OCR", "MySQL", "Agile", "Figma"],
      image: invoiceHubImage,
      imageAlt:
        "InvoiceHub project image showing receipt OCR extraction and the application's interface.",
    },
    {
      title: "3D Angry Bird Space",
      period: "Graphics / physics",
      description:
        "An OpenGL and C++ physics experiment built around cubes, collisions, and a self-built engine.",
      context: "Learning by making the rules of a small world tangible.",
      technologies: ["OpenGL", "C++", "Physics engine"],
      image: angryBirdsImage,
      imageAlt:
        "3D Angry Bird Space project screenshot showing a bird-shaped model in a block-based scene.",
    },
    {
      title: "Atari Breakout",
      period: "Game / C",
      description:
        "A compact SDL2 game about input, collision logic, and feedback that fits on one screen.",
      context: "A small place to learn what the player can feel immediately.",
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
      context: "Automation for the tasks that should take less attention.",
      technologies: ["Python", "BeautifulSoup", "Selenium"],
      image: airconBotImage,
      imageAlt:
        "Aircon Balance Bot project screenshot showing a GitHub repository with Python bot files.",
    },
  ] satisfies readonly Project[],
  photo: {
    title: "Build it, then bring it with you.",
    period: "Learning / ongoing",
    caption:
      "I built an AWS quiz tool from practice questions, then used it on the MRT on the way to climb. The best learning systems have somewhere to go.",
    image: portraitImage,
    imageAlt:
      "A close portrait of Guru Prasath, framed against a bright interior background.",
  } satisfies PhotoMoment,
} as const;
