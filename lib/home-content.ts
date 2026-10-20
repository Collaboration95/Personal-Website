export const homeFeatures = {
  commons: {
    eyebrow: "The Commons / solo makeathon build",
    title: "A room, made\nby the room.",
    copy: "People send in a wish. An agent turns it into a small creature, tests its program, and gives it a place in a shared projected world. A little chaotic. Very much alive.",
    caption: "The Commons · a shared room of generated inhabitants",
    recognition: "Best Use of Tech · Common Grounds makeathon",
  },
  screenshot: {
    eyebrow: "Screenshot Declutterer / local tool",
    title: "Your screenshots.\nYour machine.",
    copy: "Keep, rename, or send to Trash. A small tool for the screenshots that pile up—and an experiment in making on-device naming practical.",
  },
  researchagent: {
    eyebrow: "10 October 2026 / AI Tinkerers Singapore",
    title: "ResearchAgent,\non the main stage.",
    copy: "I presented our team’s research agent with a wallet: start with free evidence, decide what is worth buying, and check what arrives. A live walkthrough at Singtel 8George, following our SingHacks finalist build.",
    recognition: "Top three Google Cloud Run demos · US$100 in cloud credits",
    image: {
      src: "/project-images/researchagent-main-stage.webp",
      alt: "ResearchAgent’s answer and spending budget projected beside a presenter at the Singtel podium.",
      width: 1600,
      height: 900,
    },
    gallery:
      "https://singapore.aitinkerers.org/meetup/mu_oOS3ivaBeO4/gallery?page=2",
    slides: "https://collaboration95.github.io/theFastandtheFungible/slides/",
  },
  fitback: {
    eyebrow: "Fitback / SUTD capstone team",
    title: "Two photos.\nA more personal fit.",
    copy: "Buying clothes online makes you guess. We explored a different path: guide the camera capture, understand the retailer’s size chart, and account for the fit someone actually wants.",
    caption: "DetectT · the public pose-guidance and capture prototype",
    recognition: "1st place · Design AI · InspireCon 2025",
  },
  field: {
    eyebrow: "Primech A&P / two R&D internships",
    title: "Get to know the\nsystem first.",
    copy: "I worked across robot dashboards, REST APIs, JWT authentication, Python IoT services, and later Flutter and PHP applications. Some of the most useful work was making an older system easier for the next person to understand.",
    periods: ["Aug 2023 — Jan 2024", "Apr — Sep 2024"],
    caption:
      "At the whiteboard. A personal interlude from the photo collection.",
  },
  play: {
    eyebrow: "Earlier experiments",
    title: "Small worlds.\nBig learning curves.",
    copy: "Games taught me to pay attention to feedback. Little automations taught me to notice friction. The projects got bigger; the urge to try things stayed.",
  },
} as const;
