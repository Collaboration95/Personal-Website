import { projects } from "./projects";
import type { JournalArticle } from "./journal-types";

export function articleCover(article: JournalArticle) {
  return (
    article.cover ??
    projects.find(
      (project) => article.projectIds.includes(project.id) && project.image,
    )?.image
  );
}
export function readingMinutes(article: JournalArticle) {
  const text = article.blocks
    .map((block) =>
      block.type === "list"
        ? block.items.join(" ")
        : "text" in block
          ? block.text
          : block.caption,
    )
    .join(" ");
  return Math.max(1, Math.ceil(text.split(/\s+/).length / 220));
}
export function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-SG", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(date));
}
export function escapeXml(value: string) {
  return value.replace(
    /[<>&'"]/g,
    (character) =>
      ({
        "<": "&lt;",
        ">": "&gt;",
        "&": "&amp;",
        "'": "&apos;",
        '"': "&quot;",
      })[character]!,
  );
}
