import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { projects } from "@/lib/projects";

const description =
  "A collection of useful tools, team builds, and experiments by Guru Prasath, with real project images and links to the work.";
export const metadata: Metadata = {
  title: "Projects",
  description,
  twitter: {
    card: "summary_large_image",
    title: "Things made along the way — Guru Prasath",
    description,
    images: ["/social-card.png"],
  },
  alternates: {
    canonical: "/projects",
    types: { "application/rss+xml": "/feed.xml" },
  },
  openGraph: {
    title: "Things made along the way — Guru Prasath",
    description,
    url: "/projects",
    type: "website",
    images: ["/social-card.png"],
  },
};
const groups = [
  { name: "AI & data", id: "ai-data" },
  { name: "Products & systems", id: "products-systems" },
  { name: "Experiments", id: "experiments" },
] as const;
export default function Projects() {
  return (
    <>
      <SiteHeader />
      <main
        id="main-content"
        tabIndex={-1}
        className="collection-main page-width"
      >
        <header className="collection-header">
          <p className="eyebrow">The wider collection</p>
          <h1>
            Things made
            <br />
            <em>along the way.</em>
          </h1>
          <p>
            Useful tools, team builds, weekend experiments, and a few things
            that started with “what if.” Here’s the work, with its context still
            attached.
          </p>
          <div className="collection-header__bottom">
            <span>{projects.length} selected projects</span>
            <Link href="/#work">Take the scenic route ↗</Link>
          </div>
        </header>
        <nav className="filter-nav" aria-label="Project groups">
          {groups.map((group) => (
            <a key={group.id} href={`#${group.id}`}>
              {group.name}
            </a>
          ))}
        </nav>
        {groups.map((group) => {
          const collection = projects.filter(
            (project) => project.category === group.name,
          );
          return (
            <section
              className="project-group"
              id={group.id}
              key={group.id}
              aria-labelledby={`${group.id}-title`}
            >
              <header className="project-group__heading">
                <h2 id={`${group.id}-title`}>{group.name}</h2>
                <span>{String(collection.length).padStart(2, "0")}</span>
              </header>
              <div className="project-grid">
                {collection.map((project, index) => (
                  <article
                    className={`project-tile${project.image ? "" : " project-tile--text"}`}
                    data-era={project.era}
                    key={project.id}
                    id={project.id}
                  >
                    {project.image ? (
                      <div className="project-tile__image">
                        <Image
                          src={project.image.src}
                          alt={project.image.alt}
                          width={project.image.width}
                          height={project.image.height}
                          sizes="(max-width: 760px) 90vw, 560px"
                        />
                      </div>
                    ) : (
                      <p className="project-tile__index">
                        {String(index + 1).padStart(2, "0")} /{" "}
                        {project.technologies.slice(0, 2).join(" + ")}
                      </p>
                    )}
                    <div className="project-tile__heading">
                      <h3>{project.name}</h3>
                      <span>{project.period}</span>
                    </div>
                    <p>{project.summary}</p>
                    <p className="project-tile__note">{project.note}</p>
                    <span className="project-tile__status">
                      {project.status}
                    </span>
                    <div className="project-tile__links">
                      {project.articleSlug && (
                        <Link href={`/journal/${project.articleSlug}`}>
                          Read the story ↗
                        </Link>
                      )}
                      {project.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.label} ↗
                        </a>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          );
        })}
      </main>
      <SiteFooter />
    </>
  );
}
