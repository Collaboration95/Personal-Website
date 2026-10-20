import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { getPublishedArticles } from "@/lib/journal";
import { articleCover, formatDate, readingMinutes } from "@/lib/publication";
import { siteContent } from "@/lib/data";
import { eras } from "@/lib/eras";

export const dynamicParams = false;
export function generateStaticParams() {
  return getPublishedArticles().map(({ slug }) => ({ slug }));
}
export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const article = getPublishedArticles().find(
    ({ slug }) => slug === params.slug,
  );
  if (!article)
    return { title: "Note not found", robots: { index: false, follow: false } };
  const cover = articleCover(article);
  const images = cover
    ? [
        {
          url: cover.src,
          width: cover.width,
          height: cover.height,
          alt: cover.alt,
        },
      ]
    : ["/social-card.png"];
  return {
    title: article.title,
    description: article.description,
    alternates: {
      canonical: `/journal/${article.slug}`,
      types: { "application/rss+xml": "/feed.xml" },
    },
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      url: `/journal/${article.slug}`,
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt ?? article.publishedAt,
      authors: [siteContent.name],
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images,
    },
  };
}
export default function Article({ params }: { params: { slug: string } }) {
  const article = getPublishedArticles().find(
    ({ slug }) => slug === params.slug,
  );
  if (!article) notFound();
  const related = getPublishedArticles().filter(
    (other) =>
      other.slug !== article.slug &&
      other.projectIds.some((id) => article.projectIds.includes(id)),
  );
  const cover = articleCover(article);
  const era = eras.find(({ theme }) => theme === article.era)!;
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt ?? article.publishedAt,
    author: {
      "@type": "Person",
      name: siteContent.name,
      url: siteContent.siteUrl,
    },
    mainEntityOfPage: `${siteContent.siteUrl}/journal/${article.slug}`,
    image: `${siteContent.siteUrl}${cover?.src ?? "/social-card.png"}`,
  };
  return (
    <>
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className="article-main page-width">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
        />
        <nav className="article-breadcrumbs" aria-label="Breadcrumb">
          <Link href="/journal">← All notes</Link>
          <Link href={`/#${era.id}`}>{era.label} ↗</Link>
        </nav>
        <article>
          <header className="article-header">
            <p className="eyebrow">
              {article.kind} / {article.eventLabel}
            </p>
            <h1>{article.title}</h1>
            <p className="article-header__description">{article.description}</p>
            <div className="article-header__meta">
              <span>By {siteContent.name}</span>
              <span>{readingMinutes(article)} min read</span>
              <span>
                Website edition ·{" "}
                <time dateTime={article.publishedAt}>
                  {formatDate(article.publishedAt)}
                </time>
              </span>
            </div>
          </header>
          {cover && (
            <figure className="article-cover">
              <Image
                src={cover.src}
                alt={cover.alt}
                width={cover.width}
                height={cover.height}
                sizes="(max-width: 760px) 90vw, 1000px"
                priority
              />
              <figcaption>{cover.caption ?? cover.alt}</figcaption>
            </figure>
          )}
          <div className="article-body">
            {article.blocks.map((block, index) => {
              switch (block.type) {
                case "paragraph":
                  return <p key={index}>{block.text}</p>;
                case "heading":
                  return <h2 key={index}>{block.text}</h2>;
                case "list":
                  return (
                    <ul key={index}>
                      {block.items.map((text) => (
                        <li key={text}>{text}</li>
                      ))}
                    </ul>
                  );
                case "callout":
                  return (
                    <aside className="article-callout" key={index}>
                      <strong>{block.label}</strong>
                      <p>{block.text}</p>
                    </aside>
                  );
                case "image":
                  return (
                    <figure key={index}>
                      <Image
                        src={block.src}
                        alt={block.alt}
                        width={block.width}
                        height={block.height}
                        sizes="(max-width: 760px) 90vw, 680px"
                      />
                      <figcaption>{block.caption}</figcaption>
                    </figure>
                  );
              }
            })}
            <section
              className="article-sources"
              aria-labelledby="sources-title"
            >
              <h2 id="sources-title">Follow the trail</h2>
              <ul>
                {article.sources.map((source) => (
                  <li key={source.href}>
                    <a
                      href={source.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {source.label} ↗
                    </a>
                  </li>
                ))}
              </ul>
            </section>
            {related.length > 0 && (
              <section
                className="article-sources"
                aria-labelledby="related-title"
              >
                <h2 id="related-title">More from this project</h2>
                <ul>
                  {related.map((other) => (
                    <li key={other.slug}>
                      <Link href={`/journal/${other.slug}`}>
                        {other.title} ↗
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </article>
        <nav className="article-return" aria-label="Continue reading">
          <Link className="text-link" href="/journal">
            ← Back to the journal
          </Link>
          <Link className="text-link" href={`/#${era.id}`}>
            Explore this era ↗
          </Link>
        </nav>
      </main>
      <SiteFooter />
    </>
  );
}
