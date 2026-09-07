import type { StaticImageData } from "next/image";

import airconBotImage from "@/public/AirconBot.png";
import angryBirdsImage from "@/public/angrybirdsspace.png";
import breakoutImage from "@/public/Breakout_C.png";
import detectTImage from "@/public/detectt-posenet-setup.png";
import healthMateImage from "@/public/HealthMate.png";
import invoiceHubImage from "@/public/InvoiceHub.png";
import mandateFlowProvenanceImage from "@/public/mandateflow-provenance.jpg";
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
import screenshotDecluttererImage from "@/public/screenshot-declutterer-before-after.png";

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

export type CaseStudy = {
  title: string;
  period: string;
  summary: string;
  context: string;
  constraint: string;
  role: string;
  decision: string;
  evidence: string;
  limitation: string;
  technologies: readonly string[];
  visual: "provenance" | "benchmark" | "local-ai" | "fitback" | "systems";
  image?: StaticImageData;
  imageAlt?: string;
  links: readonly { label: string; href: string }[];
};

export type TimelineChapter = {
  id: string;
  navLabel: string;
  eyebrow: string;
  purpose: string;
  kind: "case-study" | "photo" | "note";
  caseStudy?: CaseStudy;
  photo?: PhotoMoment;
  note?: {
    heading: string;
    body: string;
    items: readonly Experience[];
    archive: readonly Project[];
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
    "Guru Prasath is a Singapore-based software engineer building systems that are easier to inspect, measure, and trust.",
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
  principles: [
    {
      label: "Start from the constraint.",
      body:
        "Retail sizing charts, slow health exports, screenshot overload, and agent-data restrictions all make the useful path clearer.",
      related: "See the constraints",
      href: "#chapter-provenance",
    },
    {
      label: "Measure before declaring victory.",
      body:
        "Benchmarks and small experiments reveal which part of a system deserves the rewrite—and which part should stay boring.",
      related: "See the measurements",
      href: "#chapter-performance",
    },
    {
      label: "Make the decision inspectable.",
      body:
        "Receipts, provenance, documentation, and safe-to-trash behavior let the next person understand what happened and why.",
      related: "See the decisions",
      href: "#chapter-local-first",
    },
  ],
  contact: {
    email: "guruprasath3200@gmail.com",
    prompt: "Have a problem worth making smaller?",
    body:
      "I’m interested in software roles where the work has real constraints—data, users, devices, or decisions—and where careful engineering changes the outcome.",
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
      organisation: "Singapore University of Technology",
      period: "Nov 2021 — Jan 2022",
      description:
        "Facilitated Python instruction, mentored students on coursework and projects, and coordinated IoT lab setup with Raspberry Pi.",
    },
  ] satisfies readonly Experience[],
  caseStudies: [
    {
      title: "An agent’s permission is not enough; its evidence matters.",
      period: "2026 / policy gateway",
      summary:
        "MandateFlow places a policy gateway between an agent and protected tools, checking the provenance of the information behind an action.",
      context:
        "A support request can become a CRM case when its lineage is allowed. A payment-failure request can look similar while carrying a different data boundary.",
      constraint:
        "The same public call can arrive with different references, so permission alone cannot explain whether the next tool call is safe.",
      role:
        "Team project. This page keeps my individual contribution at the system level until the final scope is documented.",
      decision:
        "Use a Go MCP gateway to resolve provenance, apply policy, and write a redacted receipt before the protected tool runs.",
      evidence:
        "Support → CRM is allowed; payment → CRM is denied before execution, with an aggregate payment-failure path that does not re-identify a customer.",
      limitation:
        "The public project status and final contribution boundary still need a release review before this becomes a full case study.",
      technologies: ["Go", "MCP gateway", "React / Fastify", "SQLite receipts"],
      visual: "provenance",
      image: mandateFlowProvenanceImage,
      imageAlt:
        "MandateFlow diagram showing a provenance-aware gateway separating allowed and denied tool calls.",
      links: [
        {
          label: "View the public repo",
          href: "https://github.com/Collaboration95/tktk-tjam-2026",
        },
      ],
    },
    {
      title: "The slow path was not where I first thought it was.",
      period: "2026 / performance study",
      summary:
        "Apple Health imports started as a parsing problem. Profiling showed a different shape: Python object creation and per-record work were holding the file hostage.",
      context:
        "The documented test used a 626 MB export with 1.35 million records, workouts, and activity summaries.",
      constraint:
        "A six-month export took about 26 minutes, and the bottleneck lived in the ingestion architecture rather than one slow database query.",
      role:
        "I profiled the importer, corrected the bottleneck hypothesis, and rewrote the hot path around memory-mapped byte scans and parallel workers.",
      decision:
        "Skip the XML tree for record extraction, emit Parquet shards, and let DuckDB assemble the results after the expensive work is parallelized.",
      evidence:
        "Reported 26 min → 9.77 s in the documented test environment. The result is a benchmark, not an unqualified production SLA.",
      limitation:
        "The number is tied to the stated machine, export, and test date; larger exports still need their own benchmark before making a promise.",
      technologies: ["Python", "mmap", "Parquet", "DuckDB", "ProcessPoolExecutor"],
      visual: "benchmark",
      links: [
        {
          label: "Read the project",
          href: "https://github.com/Collaboration95/talktoit",
        },
      ],
    },
    {
      title: "A screenshot cleaner should not send your desktop to the cloud.",
      period: "2026 / local-first desktop tool",
      summary:
        "Screenshot Declutterer turns a desktop full of unnamed captures into a local keep / unsorted / trash workflow, with optional on-device rename suggestions.",
      context:
        "The useful part is small: recognize what a screenshot is, make the filename searchable, and let the person decide what happens to the file.",
      constraint:
        "Uploading screenshots just to classify or rename them would defeat the privacy premise. Permanent deletion would make a mistaken decision expensive.",
      role:
        "I built the local triage flow and evaluated the vision rename path on a 16 GB Apple Silicon Mac.",
      decision:
        "Use LiteRT-LM with Gemma 4 E2B locally, and move discarded files to the native Trash through send2trash rather than deleting them permanently.",
      evidence:
        "Across 39 screenshots, LiteRT-LM averaged 6.5 s per image versus 20.9 s with Ollama; the model footprint fell from 7.2 GB to 2.4 GB.",
      limitation:
        "macOS is the tested platform. Cross-platform support is intended, not a shipping claim.",
      technologies: ["Python", "Flask", "LiteRT-LM", "Gemma 4 E2B"],
      visual: "local-ai",
      image: screenshotDecluttererImage,
      imageAlt:
        "Screenshot Declutterer before-and-after visual showing a filename suggestion turning a timestamped screenshot into a descriptive name.",
      links: [
        {
          label: "View the project",
          href: "https://github.com/Collaboration95/screenshot-declutterer",
        },
        {
          label: "Read the evaluation",
          href: "https://gist.github.com/Collaboration95/d89fedec12083990c454807590dd4f9a",
        },
      ],
    },
    {
      title: "Fitback made a retailer’s size chart feel personal.",
      period: "2024—25 / computer-vision product",
      summary:
        "Fitback connects two user photos and retailer-specific sizing data to a recommendation that includes a person’s fit preference.",
      context:
        "Fashion sizing is difficult because a generic chart cannot see the difference between a standard, tight, or loose fit preference.",
      constraint:
        "The system had to turn messy sizing charts and body-pose input into something practical enough for a Shopify purchase flow.",
      role:
        "Technical project lead / self-employed. The final split across product, ML, frontend, backend, and team leadership is kept broad here until confirmed.",
      decision:
        "Combine pose validation and 17 keypoints with an MNASNet + MLP recommendation path, and use AWS Textract to extract retailer chart data.",
      evidence:
        "LinkedIn reports approximately 2 cm mean absolute error and 0.1 s inference. Fitback won the DesignAI category at InspireCon 2025 and was covered by The Business Times.",
      limitation:
        "The award wording, media assets, and exact personal contribution should be confirmed before this chapter is promoted above the current measured work.",
      technologies: ["Shopify Remix", "AWS Textract", "MoveNet / PoseNet", "MNASNet + MLP"],
      visual: "fitback",
      links: [
        {
          label: "View the public repo",
          href: "https://github.com/Collaboration95/DetectT",
        },
        {
          label: "Business Times coverage",
          href: "https://www.businesstimes.com.sg/events-awards/design-ai-tech-awards/design-ai-and-tech-awards/design-ai-next-stage-ai-evolution",
        },
      ],
    },
    {
      title: "Making existing systems safer to change.",
      period: "2023—24 / professional foundation",
      summary:
        "At Primech, the work moved between robot dashboards, REST APIs, authentication, IoT sensor data, internal applications, and documentation.",
      context:
        "The systems were already in motion. The job was to improve the next change without losing the context held by the existing codebase.",
      constraint:
        "Legacy Flutter and PHP tools, real-time widgets, and authentication issues made small changes depend on understanding more than one layer.",
      role:
        "I worked across dashboard CRUD APIs and UI, JWT authentication issues, JavaScript refactoring, Python IoT services, Flutter, PHP, and architecture documentation.",
      decision:
        "Treat documentation and system boundaries as part of the implementation, so the next person can trace a request from the interface to the device.",
      evidence:
        "The two R&D internships covered robot dashboard work, a Python IoT backend, legacy-code modernization, internal tooling, and older-system documentation.",
      limitation:
        "Client information, internal code, service URLs, and proprietary screens stay out of the portfolio.",
      technologies: ["JavaScript", "REST APIs", "JWT", "Python IoT", "Flutter / PHP"],
      visual: "systems",
      links: [],
    },
  ] satisfies readonly CaseStudy[],
  archive: [
    {
      title: "DetectT",
      period: "Computer vision / pose detection",
      description:
        "A browser-based pose-detection prototype that verifies front and side poses, captures images, and feeds a size-analysis workflow.",
      context:
        "Built for Fitback with real-time skeleton overlays, camera feedback, and a finite-state interaction flow.",
      technologies: ["JavaScript", "TensorFlow.js", "MoveNet / PoseNet", "Canvas"],
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
      context: "A first attempt at making personal health data easier to carry through a day.",
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
      context: "An early lesson in making messy inputs useful to the next screen.",
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

export const chapters: readonly TimelineChapter[] = [
  {
    id: "chapter-provenance",
    navLabel: "Provenance",
    eyebrow: "01 / selected work",
    purpose: "Make an agent’s next action explainable.",
    kind: "case-study",
    caseStudy: siteContent.caseStudies[0],
  },
  {
    id: "chapter-performance",
    navLabel: "Performance",
    eyebrow: "02 / selected work",
    purpose: "Measure the shape of the system before changing it.",
    kind: "case-study",
    caseStudy: siteContent.caseStudies[1],
  },
  {
    id: "chapter-local-first",
    navLabel: "Local-first",
    eyebrow: "03 / selected work",
    purpose: "Keep sensitive work close to the person doing it.",
    kind: "case-study",
    caseStudy: siteContent.caseStudies[2],
  },
  {
    id: "chapter-fitback",
    navLabel: "Fitback",
    eyebrow: "04 / selected work",
    purpose: "Turn ambiguous inputs into a practical recommendation.",
    kind: "case-study",
    caseStudy: siteContent.caseStudies[3],
  },
  {
    id: "chapter-photo-pause",
    navLabel: "A small pause",
    eyebrow: "05 / personal note",
    purpose: "The learning habit behind the systems.",
    kind: "photo",
    photo: siteContent.photo,
  },
  {
    id: "chapter-systems",
    navLabel: "Systems",
    eyebrow: "06 / professional foundation",
    purpose: "Improve existing systems without losing their context.",
    kind: "case-study",
    caseStudy: siteContent.caseStudies[4],
  },
  {
    id: "chapter-archive",
    navLabel: "Archive",
    eyebrow: "07 / work archive",
    purpose: "The short record of projects and places that shaped the work.",
    kind: "note",
    note: {
      heading: "Curious by default. Practical when it counts.",
      body:
        "I studied Computer Science and Design at SUTD. The projects below are the earlier layer of the same habit: make something small, use it, and notice what the next person needs.",
      items: siteContent.experiences,
      archive: siteContent.archive,
    },
  },
];

export const dialChapters = [
  { id: "top", label: "Start" },
  { id: "approach", label: "How I work" },
  ...chapters.map(({ id, navLabel }) => ({ id, label: navLabel })),
  { id: "contact", label: "Contact" },
] as const;
