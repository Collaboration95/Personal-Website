import type { EraTheme } from "./eras";

export type ArticleKind = "project" | "hackathon" | "certification" | "talk";
export type ArticleBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | {
      type: "image";
      src: string;
      alt: string;
      caption: string;
      width: number;
      height: number;
    }
  | { type: "list"; items: readonly string[] }
  | { type: "callout"; label: string; text: string };

export type JournalArticle = {
  slug: string;
  title: string;
  description: string;
  kind: ArticleKind;
  era: EraTheme;
  /** Date of this website edition; source/event dates are separate. */
  publishedAt: string;
  updatedAt?: string;
  eventLabel: string;
  status: "published" | "draft";
  projectIds: readonly string[];
  cover?: {
    src: string;
    alt: string;
    width: number;
    height: number;
    caption?: string;
  };
  blocks: readonly ArticleBlock[];
  sources: readonly { label: string; href: string }[];
};

export type PortfolioProject = {
  id: string;
  name: string;
  era: EraTheme;
  category: "AI & data" | "Products & systems" | "Experiments";
  summary: string;
  note: string;
  period: string;
  status: string;
  technologies: readonly string[];
  image?: { src: string; alt: string; width: number; height: number };
  links: readonly { label: string; href: string }[];
  articleSlug?: string;
};
