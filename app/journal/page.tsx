import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import Companion from "@/components/companion";
import { getPublishedArticles } from "@/lib/journal";
import { articleCover, readingMinutes } from "@/lib/publication";
import type { ArticleKind } from "@/lib/journal-types";

const description =
  "Build stories, hackathon notes, and useful things learned along the way. The working journal of Guru Prasath.";
export const metadata: Metadata = {
  title: "Journal",
  description,
  twitter: {
    card: "summary_large_image",
    title: "Notes from the work — Guru Prasath",
    description,
    images: ["/social-card.png"],
  },
  alternates: {
    canonical: "/journal",
    types: { "application/rss+xml": "/feed.xml" },
  },
  openGraph: {
    title: "Notes from the work — Guru Prasath",
    description,
    url: "/journal",
    type: "website",
    images: ["/social-card.png"],
  },
};
const filters = [
  { value: "all", label: "All notes" },
  { value: "project", label: "Projects" },
  { value: "talk", label: "Talks & demos" },
  { value: "hackathon", label: "Hackathons" },
  { value: "certification", label: "Learning & certifications" },
] as const;

export default function Journal({
  searchParams,
}: {
  searchParams: { type?: string | string[] };
}) {
  const requested =
    typeof searchParams.type === "string" ? searchParams.type : "all";
  const selected = filters.some(({ value }) => value === requested)
    ? requested
    : "all";
  const all = getPublishedArticles();
  const articles = all.filter(
    (article) =>
      selected === "all" || article.kind === (selected as ArticleKind),
  );
  return (
    <>
      <SiteHeader />
      <main
        id="main-content"
        tabIndex={-1}
        className="collection-main page-width"
      >
        <header className="collection-header">
          <p className="eyebrow">The journal / notes kept along the way</p>
          <h1>
            There’s a story
            <br />
            <em>behind the build.</em>
          </h1>
          <p>
            The useful bits: decisions, experiments, hackathons, and things I
            learned by making something. A place to go a little deeper.
          </p>
          <div className="collection-header__bottom">
            <span>{all.length} field notes</span>
            <a href="/feed.xml">Follow via RSS ↗</a>
          </div>
        </header>
        <nav className="filter-nav" aria-label="Filter journal by subject">
          {filters.map(({ value, label }) => (
            <Link
              key={value}
              href={value === "all" ? "/journal" : `/journal?type=${value}`}
              aria-current={selected === value ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="journal-list">
          {articles.map((article) => {
            const cover = articleCover(article);
            return (
              <article className="journal-entry" key={article.slug}>
                <div className="journal-entry__meta">
                  <span>{article.kind}</span>
                  <p>{readingMinutes(article)} min read</p>
                </div>
                <div className="journal-entry__body">
                  <p className="eyebrow">{article.eventLabel}</p>
                  <h2>
                    <Link href={`/journal/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h2>
                  <p>{article.description}</p>
                  <Link className="text-link" href={`/journal/${article.slug}`}>
                    Read the note <span aria-hidden="true">↗</span>
                  </Link>
                </div>
                {cover ? (
                  <Link
                    className="journal-entry__image"
                    href={`/journal/${article.slug}`}
                    aria-label={`Read ${article.title}`}
                  >
                    <Image
                      src={cover.src}
                      alt=""
                      width={cover.width}
                      height={cover.height}
                      sizes="(max-width: 760px) 60vw, 190px"
                    />
                  </Link>
                ) : (
                  <div className="journal-entry__object">
                    <Companion theme={article.era} size={140} compact />
                  </div>
                )}
              </article>
            );
          })}
        </div>
        {!articles.length && (
          <p className="empty-state">
            No notes in this chapter yet.{" "}
            <Link href="/journal">Browse all notes.</Link>
          </p>
        )}
      </main>
      <SiteFooter />
    </>
  );
}
