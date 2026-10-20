import type { MetadataRoute } from "next";
import { siteContent } from "@/lib/data";
import { getPublishedArticles } from "@/lib/journal";
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-10-20T00:00:00Z");
  return [
    {
      url: `${siteContent.siteUrl}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteContent.siteUrl}/journal`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteContent.siteUrl}/projects`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...getPublishedArticles().map((article) => ({
      url: `${siteContent.siteUrl}/journal/${article.slug}`,
      lastModified: new Date(article.updatedAt ?? article.publishedAt),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
