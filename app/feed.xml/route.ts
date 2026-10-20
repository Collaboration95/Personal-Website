import { getPublishedArticles } from "@/lib/journal";
import { escapeXml } from "@/lib/publication";
import { siteContent } from "@/lib/data";
export const dynamic = "force-static";
export function GET() {
  const base = siteContent.siteUrl.replace(/\/$/, "");
  const articles = getPublishedArticles();
  const items = articles
    .map((article) => {
      const url = `${base}/journal/${article.slug}`;
      return `<item><title>${escapeXml(article.title)}</title><link>${escapeXml(url)}</link><guid isPermaLink="true">${escapeXml(url)}</guid><description>${escapeXml(article.description)}</description><pubDate>${new Date(article.publishedAt).toUTCString()}</pubDate><category>${escapeXml(article.kind)}</category></item>`;
    })
    .join("");
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel><title>Guru Prasath — notes from the work</title><link>${escapeXml(base)}/journal</link><description>Projects, hackathons, and things learned by making.</description><language>en</language><atom:link href="${escapeXml(base)}/feed.xml" rel="self" type="application/rss+xml"/>${items}</channel></rss>`,
    {
      headers: {
        "Content-Type": "application/rss+xml; charset=utf-8",
        "Cache-Control": "public, max-age=3600",
      },
    },
  );
}
