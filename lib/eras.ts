export type EraTheme = "lab" | "studio" | "field" | "play";

export const eras = [
  {
    id: "era-lab",
    theme: "lab",
    number: "01",
    label: "The lab",
    period: "2026 / still experimenting",
    title: "Small tools.\nDeeper questions.",
    introduction:
      "What stays on your machine? What makes an agent’s decision trustworthy? Lately, the interesting part has been finding the right boundary—and measuring what happens there.",
    companion: "Lilac resin",
  },
  {
    id: "era-studio",
    theme: "studio",
    number: "02",
    label: "The studio",
    period: "2024–25 / from prototype to product",
    title: "A better fit.\nIn more ways than one.",
    introduction:
      "A model is only one part of a product. Fitback brought together camera feedback, sizing charts, and the very human question of how someone wants their clothes to fit.",
    companion: "Peach ceramic",
  },
  {
    id: "era-field",
    theme: "field",
    number: "03",
    label: "In the field",
    period: "2023–24 / R&D at Primech",
    title: "The code already\nhas a history.",
    introduction:
      "Two R&D internships, existing systems, and plenty to untangle. Robot dashboards, authentication, connected devices, and the documentation that makes the next change less mysterious.",
    companion: "Teal enamel",
  },
  {
    id: "era-play",
    theme: "play",
    number: "04",
    label: "The playground",
    period: "Earlier projects / learning by making",
    title: "What happens\nif I build it?",
    introduction:
      "A paddle and a ball. A small physics engine. A bot for an annoying everyday task. These experiments are where the habit started: make a thing, try it, and find the next question.",
    companion: "Sage cartridge",
  },
] as const;

export const eraNavigation = [
  { id: "top", label: "Hello", theme: "lab" },
  ...eras.map(({ id, label, theme }) => ({ id, label, theme })),
  { id: "contact", label: "Say hello", theme: "lab" },
] satisfies { id: string; label: string; theme: EraTheme }[];
