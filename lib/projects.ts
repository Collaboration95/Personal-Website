import type { PortfolioProject } from "./journal-types";

// Public evidence reviewed on 20 October 2026. Periods describe the visible
// chapter of work, not a release date. Related prototypes count as one project.
export const projects: readonly PortfolioProject[] = [
  {
    id: "commons",
    name: "The Commons",
    era: "lab",
    category: "Experiments",
    summary:
      "A room that grows its own inhabitants. Visitors wish for creatures on their phones, then watch them join a shared projected world after their generated behaviour is checked.",
    note: "A kopi cup, an otter, and a room full of suggestions.",
    period: "October 2026",
    status: "Makeathon demo · wound down",
    technologies: ["JavaScript", "Node.js", "Canvas", "Claude Code"],
    image: {
      src: "/project-images/commons.webp",
      alt: "The Commons shared room, with a kopi cup, otters, and other creatures moving through an illustrated gathering space.",
      width: 1200,
      height: 675,
    },
    links: [
      {
        label: "Source",
        href: "https://github.com/Collaboration95/common-grounds-makeathon",
      },
      {
        label: "Presentation",
        href: "https://collaboration95.github.io/common-grounds-makeathon/slides.html",
      },
    ],
    articleSlug: "commons-room",
  },
  {
    id: "researchagent",
    name: "ResearchAgent",
    era: "lab",
    category: "AI & data",
    summary:
      "Search free sources first, then decide whether another piece of evidence is worth buying. This team demo tracks budgets, checks delivery proofs, and handles challenges and refunds with a synthetic corpus and testnet or simulated payments.",
    note: "The receipt matters as much as the answer.",
    period: "September–October 2026",
    status: "Team demo · retained walkthrough",
    technologies: ["TypeScript", "React", "x402", "XRPL Testnet"],
    image: {
      src: "/project-images/researchagent.webp",
      alt: "ResearchAgent demo showing a revised answer, cited fictional evidence, and a simulated spending budget.",
      width: 1200,
      height: 750,
    },
    links: [
      {
        label: "Source",
        href: "https://github.com/Collaboration95/theFastandtheFungible",
      },
      {
        label: "Walkthrough",
        href: "https://collaboration95.github.io/theFastandtheFungible/talk/",
      },
    ],
    articleSlug: "researchagent-evidence",
  },
  {
    id: "screenshot-declutterer",
    name: "Screenshot Declutterer",
    era: "lab",
    category: "Products & systems",
    summary:
      "Give screenshot clutter a review board: keep, rename, compare duplicates, or queue for Trash. Undo and a final confirmation keep cleanup deliberate; optional on-device naming helps find things again.",
    note: "Built around the moment before you press delete.",
    period: "2026",
    status: "Source-run macOS app",
    technologies: ["Python", "Flask", "Pillow", "LiteRT-LM"],
    image: {
      src: "/project-images/screenshot-declutterer.webp",
      alt: "Screenshot Declutterer's Keep, Unsorted, and Trash columns, populated with synthetic demo screenshots and cleanup suggestions.",
      width: 1200,
      height: 750,
    },
    links: [
      {
        label: "Source",
        href: "https://github.com/Collaboration95/screenshot-declutterer",
      },
    ],
    articleSlug: "local-screenshot-naming",
  },
  {
    id: "talktoit",
    name: "talktoit",
    era: "lab",
    category: "AI & data",
    summary:
      "Turn an Apple Health export into a database you can ask questions of. A streaming importer feeds DuckDB, dashboards, and natural-language queries, with local defaults and explicit opt-in remote modes.",
    note: "The unglamorous importer became the interesting problem.",
    period: "2026",
    status: "Self-hostable application",
    technologies: ["Python", "DuckDB", "FastAPI", "React"],
    links: [
      { label: "Source", href: "https://github.com/Collaboration95/talktoit" },
    ],
    articleSlug: "apple-health-importer",
  },
  {
    id: "yald",
    name: "YALD",
    era: "lab",
    category: "AI & data",
    summary:
      "A read-only view of coding-agent usage, from local logs to portable reports. Explore tokens, cache use, and API list-price estimates while keeping missing measurements visible.",
    note: "An estimate is useful when you can see its limits.",
    period: "2026",
    status: "v0.1.0 GitHub preview",
    technologies: ["TypeScript", "Bun", "Hono", "React"],
    links: [
      { label: "Source", href: "https://github.com/Collaboration95/yald" },
      {
        label: "Preview package",
        href: "https://github.com/Collaboration95/yald/releases/tag/v0.1.0",
      },
    ],
    articleSlug: "yald-agent-logs",
  },
  {
    id: "plotline",
    name: "Plotline",
    era: "lab",
    category: "AI & data",
    summary:
      "How much of a forest map does a screening decision actually need? A geospatial prototype stores the facts a defined rule uses, then compares compact and original answers through reproducible checks and an inspection UI.",
    note: "Keep the decision. Measure what was left behind.",
    period: "October 2026",
    status: "Measured hackathon prototype",
    technologies: ["Python", "NumPy", "Rasterio", "React"],
    links: [
      { label: "Source", href: "https://github.com/Collaboration95/hr-2026" },
      {
        label: "Presentation",
        href: "https://collaboration95.github.io/hr-2026/presentation/",
      },
    ],
  },
  {
    id: "rewind",
    name: "Rewind",
    era: "lab",
    category: "Products & systems",
    summary:
      "Small moments, saved for later together. This team-built time capsule collects contributions over a cycle and reveals them as a group, growing from a device-only experiment into a connected mobile prototype.",
    note: "Some things are better when they are not instant.",
    period: "2026",
    status: "Active team prototype",
    technologies: ["TypeScript", "React Native", "Expo", "Node.js"],
    links: [
      {
        label: "Source",
        href: "https://github.com/Collaboration95/rewind-app",
      },
      {
        label: "Earlier prototype",
        href: "https://github.com/Collaboration95/rewind-v1",
      },
    ],
  },
  {
    id: "flickpond",
    name: "FlickPond",
    era: "lab",
    category: "Products & systems",
    summary:
      "From an uploaded video to playable MP4 and HLS. A Team 17 course platform separates media access from asynchronous processing, with bounded workers and recorded AWS runs that retain missed and unmeasured targets.",
    note: "The difficult part starts when a worker stops halfway.",
    period: "2026",
    status: "Team course platform",
    technologies: ["Python", "PostgreSQL", "FFmpeg", "AWS"],
    links: [
      { label: "Source", href: "https://github.com/Collaboration95/dc2" },
    ],
  },
  {
    id: "hrm-live",
    name: "HRM Live",
    era: "lab",
    category: "Products & systems",
    summary:
      "A Bluetooth heart-rate strap, a quiet number in the macOS menu bar, and a popover for zones and session history. Record a session and choose when to export its CSV or JSON.",
    note: "A small desktop companion to a physical sensor.",
    period: "2026",
    status: "v0.9.0 candidate · not notarized",
    technologies: ["Python", "Bluetooth LE", "AppKit"],
    links: [
      { label: "Source", href: "https://github.com/Collaboration95/hrm-live" },
      {
        label: "Release candidate",
        href: "https://github.com/Collaboration95/hrm-live/releases/tag/v0.9.0",
      },
    ],
  },
  {
    id: "stylemind",
    name: "StyleMind",
    era: "lab",
    category: "AI & data",
    summary:
      "Fashion recommendations with some memory of your taste. Conversation becomes a structured persona, which guides graph and vector retrieval before the assistant puts an outfit together.",
    note: "Preferences have relationships, not just keywords.",
    period: "April–May 2026",
    status: "Working prototype",
    technologies: ["Python", "Neo4j", "FastAPI", "Streamlit"],
    links: [
      { label: "Source", href: "https://github.com/Collaboration95/stylemind" },
    ],
  },
  {
    id: "handoff",
    name: "Handoff",
    era: "lab",
    category: "AI & data",
    summary:
      "Before an invoice becomes a draft, check it against the contract, accepted delivery, and prior billing. A team finance demo surfaces conflicts, asks for approval, and reads back the Airwallex sandbox result.",
    note: "A known-error demo, with the evidence left in view.",
    period: "September 2026",
    status: "Team hackathon prototype",
    technologies: ["Python", "Airwallex", "LiveKit", "Langfuse"],
    links: [
      { label: "Source", href: "https://github.com/Collaboration95/handoff" },
    ],
  },
  {
    id: "mandateflow",
    name: "MandateFlow",
    era: "lab",
    category: "AI & data",
    summary:
      "An agent's permission should depend on where its information came from. Contributed the Go provenance and authorization gateway, policy checks, and demo hardening to this team build on the supplied Agent Launchpad starter.",
    note: "A tool call needs a reason you can trace.",
    period: "August–September 2026",
    status: "Team hackathon proof of concept",
    technologies: ["Go", "MCP", "React", "Fastify"],
    links: [
      {
        label: "Team source",
        href: "https://github.com/tradaokamsa/MandateFlow",
      },
    ],
    articleSlug: "mandateflow-provenance",
  },
  {
    id: "uno-dos-tres",
    name: "uno-dos-tres",
    era: "lab",
    category: "Experiments",
    summary:
      "Point a phone at an Uno deck and let it follow the top card. Recognition runs in a browser worker on the phone, while detections and game events travel to a laptop dashboard.",
    note: "A card game made a good excuse to try phone-side inference.",
    period: "October 2026",
    status: "Local computer-vision demo",
    technologies: ["TypeScript", "ONNX Runtime Web", "WebGPU", "WebSocket"],
    links: [
      {
        label: "Source",
        href: "https://github.com/Collaboration95/uno-dos-tres",
      },
    ],
  },
  {
    id: "applyd",
    name: "applyd",
    era: "lab",
    category: "Products & systems",
    summary:
      "A local workbench for job-application bookkeeping: capture opportunities, spot duplicates, reuse sourced answers, and check a form before recording a confirmed submission.",
    note: "Still early; the review step is already central.",
    period: "October 2026",
    status: "Early prototype",
    technologies: ["Python"],
    links: [
      { label: "Source", href: "https://github.com/Collaboration95/applyd" },
    ],
  },
  {
    id: "smya",
    name: "Show Me Your Agents",
    era: "lab",
    category: "AI & data",
    summary:
      "A learning event becomes a bounded diagnostic job, then a mastery proposal with supporting evidence. This early tutoring slice keeps a human tutor in charge of reviewing the proposal.",
    note: "A proposal can be useful without becoming a verdict.",
    period: "August 2026",
    status: "Early vertical slice",
    technologies: ["Python", "FastAPI", "Next.js", "SQLite"],
    links: [
      {
        label: "Source",
        href: "https://github.com/Collaboration95/smya-tution-agent",
      },
    ],
  },
  {
    id: "julius-baer-sidequest",
    name: "Payment & incident investigations",
    era: "lab",
    category: "AI & data",
    summary:
      "Two authored submissions to the Julius Baer challenge: payment investigation with retrieval tools, and deterministic incident correlation with quoted evidence and calibrated uncertainty. Built within the organizer's starter, with the submission still unmerged.",
    note: "A useful answer should show why it might be wrong.",
    period: "September 2026",
    status: "Submitted · unmerged",
    technologies: ["Python", "BM25"],
    links: [
      {
        label: "Submission",
        href: "https://github.com/Singhacks-2026/juliusbaer-sidequest/pull/15",
      },
      {
        label: "Authored fork",
        href: "https://github.com/Collaboration95/juliusbaer-sidequest",
      },
    ],
  },
  {
    id: "agent-done-notifier",
    name: "Agent Done Notifier",
    era: "lab",
    category: "Experiments",
    summary:
      "A small reusable skill that sends a completion notification through ntfy when a coding agent finishes its task.",
    note: "So the next step does not depend on watching a spinner.",
    period: "March 2026",
    status: "Small utility",
    technologies: ["Shell", "ntfy"],
    links: [
      {
        label: "Source",
        href: "https://github.com/Collaboration95/agent-done-skill",
      },
    ],
  },
  {
    id: "fitback",
    name: "Fitback / Detect-T",
    era: "studio",
    category: "AI & data",
    summary:
      "The public camera-guidance proof of concept behind the team Fitback chapter. Pose feedback and capture run in the browser, while an older model runtime lives in a worker so incompatible TensorFlow versions can coexist.",
    note: "One camera flow, two model runtimes.",
    period: "2024–2025",
    status: "Historical component prototype",
    technologies: ["JavaScript", "React", "TensorFlow.js", "Web Workers"],
    image: {
      src: "/project-images/fitback.webp",
      alt: "Detect-T's published camera demo comparing the original camera feed with a mirrored pose-keypoint overlay.",
      width: 1200,
      height: 874,
    },
    links: [
      {
        label: "Pose prototype",
        href: "https://github.com/Collaboration95/DetectT",
      },
      {
        label: "Sizing-chart UI",
        href: "https://github.com/Collaboration95/ExtractSizingChart",
      },
      {
        label: "Chart processing",
        href: "https://github.com/Collaboration95/ExtractSizingChartBackend",
      },
    ],
    articleSlug: "fitback-size-recommendation",
  },
  {
    id: "sushi-shakedown",
    name: "Sushi Shakedown",
    era: "studio",
    category: "Experiments",
    summary:
      "Run a sushi bar through customer waves, layered food preparation, debt, and upgrades. Contributed background and NPC movement upstream, then substantially extended the team game's Unity fork.",
    note: "The queue keeps moving while you are still making lunch.",
    period: "2025",
    status: "Team game · extended fork",
    technologies: ["Unity", "C#"],
    image: {
      src: "/project-images/sushi-shakedown.webp",
      alt: "Sushi Shakedown gameplay with customer orders above a counter of fish, condiments, and preparation tools.",
      width: 1200,
      height: 677,
    },
    links: [
      {
        label: "Extended fork",
        href: "https://github.com/Collaboration95/Sushi-Shakedown",
      },
      {
        label: "Team upstream",
        href: "https://github.com/jaga991/Sushi-Shakedown",
      },
    ],
  },
  {
    id: "solar-tracker",
    name: "Following the sun",
    era: "studio",
    category: "Experiments",
    summary:
      "A documented solar-tracking hardware prototype using light-dependent resistors and servo-driven positioning. Public photos show the panel, sensor assembly, and Arduino wiring; the repository preserves the build notes rather than firmware or measured efficiency results.",
    note: "A breadboard, a panel, and a very physical feedback loop.",
    period: "Public notes · 2025",
    status: "Documented hardware prototype",
    technologies: ["Arduino", "LDR sensors", "Servo motors"],
    image: {
      src: "/project-images/solar-tracker.webp",
      alt: "A solar panel prototype on a worktable, wired to light sensors, a breadboard, and an Arduino board.",
      width: 1200,
      height: 900,
    },
    links: [
      {
        label: "Build notes",
        href: "https://github.com/Collaboration95/Solar_Sun_Tracker",
      },
    ],
  },
  {
    id: "findmycar",
    name: "FindMyCar",
    era: "field",
    category: "Products & systems",
    summary:
      "Find a parked car through a Raspberry Pi camera, AWS Textract OCR, MQTT updates, and a React dashboard. A course prototype connecting a physical capture device to a searchable parking view.",
    note: "The camera is local; the OCR calls the cloud.",
    period: "December 2024",
    status: "IoT course prototype",
    technologies: ["Raspberry Pi", "AWS Textract", "MQTT", "React"],
    links: [
      {
        label: "Source",
        href: "https://github.com/Collaboration95/FindMyCar_50.046",
      },
    ],
  },
  {
    id: "movie-booking",
    name: "Booking the last seat",
    era: "field",
    category: "Products & systems",
    summary:
      "An educational Raft-style booking simulation in Go, with RPC clients, elections, and log-replication logic. Its peers run in one process and share a seat map, making the boundaries of the experiment explicit.",
    note: "A way to study agreement, one seat at a time.",
    period: "2024",
    status: "Educational simulation",
    technologies: ["Go", "RPC", "Channels"],
    links: [
      {
        label: "Source",
        href: "https://github.com/Collaboration95/Movie_Booking_Backend_Chubby-Raft",
      },
    ],
  },
  {
    id: "breakout",
    name: "Breakout in C",
    era: "play",
    category: "Experiments",
    summary:
      "A paddle, a ball, and the systems around them: collisions, screen states, sound, save files, and persistent high scores. A team-built SDL2 game with contributions to the main game flow and score handling.",
    note: "Simple rules leave plenty of room for small details.",
    period: "2024",
    status: "Completed course project",
    technologies: ["C", "SDL2"],
    image: {
      src: "/Breakout_C.png",
      alt: "Breakout's brick-framed main menu with Quick Game, Load Game, High Score, and Settings buttons.",
      width: 1020,
      height: 697,
    },
    links: [
      {
        label: "Source",
        href: "https://github.com/Collaboration95/Breakout_C",
      },
    ],
  },
  {
    id: "healthmate",
    name: "HealthMate",
    era: "play",
    category: "Products & systems",
    summary:
      "An early team Android app bringing meal logs, activity tracking, and social features into one place. Google Fitness and Maps integrations sit alongside local SQLite storage.",
    note: "An early lesson in making several APIs feel like one app.",
    period: "2023",
    status: "Historical team course project",
    technologies: ["Java", "Android", "SQLite", "Google APIs"],
    image: {
      src: "/HealthMate.png",
      alt: "HealthMate project board with Android screens and its fitness-data flow.",
      width: 646,
      height: 619,
    },
    links: [
      {
        label: "Source",
        href: "https://github.com/Collaboration95/HealthMate",
      },
    ],
  },
  {
    id: "invoicehub",
    name: "InvoiceHub",
    era: "play",
    category: "Products & systems",
    summary:
      "A team retail-invoice application for uploading documents, managing invoice and payment pages, and keeping records in SQL. Contributed upload-server work within the wider course build.",
    note: "Paperwork was an early reason to build a web app.",
    period: "2023",
    status: "Historical team course project",
    technologies: ["JavaScript", "Node.js", "Express", "MySQL"],
    image: {
      src: "/InvoiceHub.png",
      alt: "InvoiceHub's early receipt-processing and application interface.",
      width: 556,
      height: 400,
    },
    links: [
      {
        label: "Source",
        href: "https://github.com/Collaboration95/InvoiceHub",
      },
    ],
  },
  {
    id: "angry-bird-space",
    name: "3D Angry Bird Space",
    era: "play",
    category: "Experiments",
    summary:
      "An OpenGL and C++ experiment in building a small world: cubes, collisions, and a physics engine. The surviving project image is part of the early portfolio archive.",
    note: "The rules become much more interesting when you have to write them.",
    period: "Earlier experiment",
    status: "From the early project archive",
    technologies: ["C++", "OpenGL"],
    image: {
      src: "/angrybirdsspace.png",
      alt: "A bird-shaped model in the block-based 3D Angry Bird Space experiment.",
      width: 893,
      height: 634,
    },
    links: [],
  },
  {
    id: "aircon-balance-bot",
    name: "Aircon Balance Bot",
    era: "play",
    category: "Experiments",
    summary:
      "Python bots for checking university aircon balances through web scraping. A small automation for a task that deserved less attention.",
    note: "Sometimes the useful project is the one that saves you another login.",
    period: "Earlier experiment",
    status: "From the early project archive",
    technologies: ["Python", "BeautifulSoup", "Selenium"],
    image: {
      src: "/AirconBot.png",
      alt: "The original Aircon Balance Bot project listing with its Python scripts.",
      width: 1701,
      height: 534,
    },
    links: [],
  },
];
