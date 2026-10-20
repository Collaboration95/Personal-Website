import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import Companion from "@/components/companion";
import PolicyWidget from "@/components/policy-widget";
import SystemWidget from "@/components/system-widget";
import { eras, type EraTheme } from "@/lib/eras";
import { homeFeatures as copy } from "@/lib/home-content";
import { siteContent } from "@/lib/data";
import { projects } from "@/lib/projects";
import { getPublishedArticles } from "@/lib/journal";

function StoryLink({ slug, children }: { slug: string; children?: ReactNode }) {
  const article = getPublishedArticles().find(
    (article) => article.slug === slug,
  );
  if (!article) return null;
  return (
    <Link className="text-link" href={`/journal/${slug}`}>
      {children ?? "Read the story"} <span aria-hidden="true">↗</span>
    </Link>
  );
}
function ProjectImage({ id, caption }: { id: string; caption?: string }) {
  const project = projects.find((project) => project.id === id);
  if (!project?.image) return null;
  return (
    <figure className="project-image">
      <Image
        src={project.image.src}
        alt={project.image.alt}
        width={project.image.width}
        height={project.image.height}
        sizes="(max-width: 760px) 90vw, 580px"
      />
      <figcaption>{caption ?? project.name}</figcaption>
    </figure>
  );
}
function Era({ theme, children }: { theme: EraTheme; children: ReactNode }) {
  const era = eras.find((era) => era.theme === theme)!;
  return (
    <section
      className={`era era--${theme}`}
      id={era.id}
      aria-labelledby={`${era.id}-title`}
      tabIndex={-1}
    >
      <div className="era__inner page-width">
        <div className="era__rail" aria-hidden="true" />
        <header className="era__header">
          <div className="era__title">
            <p className="era__kicker">
              <span>{era.number}</span> {era.label}{" "}
              <span className="era__period">{era.period}</span>
            </p>
            <h2 id={`${era.id}-title`}>{era.title}</h2>
          </div>
          <div className="era__intro">
            <p>{era.introduction}</p>
          </div>
          <div className="era__pet">
            <Companion theme={theme} />
            <span>Pip / {era.companion}</span>
          </div>
        </header>
        {children}
        <div className="era__end">
          <span>{era.number} / end of chapter</span>
          <span aria-hidden="true">↓</span>
        </div>
      </div>
    </section>
  );
}
function Note({
  slug,
  featured = false,
}: {
  slug: string;
  featured?: boolean;
}) {
  const article = getPublishedArticles().find(
    (article) => article.slug === slug,
  );
  if (!article) return null;
  return (
    <article
      className={`note-preview${featured ? " note-preview--large" : ""}`}
    >
      <p className="eyebrow">
        {article.kind} / {article.eventLabel}
      </p>
      <h3>
        <Link href={`/journal/${article.slug}`}>
          {article.title} <span aria-hidden="true">↗</span>
        </Link>
      </h3>
      <p>{article.description}</p>
    </article>
  );
}
export default function Timeline() {
  return (
    <div id="work" className="era-journey">
      <Era theme="lab">
        <article className="era-spread era-spread--lead" id="chapter-commons">
          <div className="spread__media">
            <div className="screen-object">
              <div className="screen-object__bar">
                <span aria-hidden="true">● ● ●</span>
                <span>THE COMMONS</span>
                <span aria-hidden="true">↗</span>
              </div>
              <ProjectImage id="commons" caption={copy.commons.caption} />
            </div>
            <p className="margin-note">A wish → a creature → a shared world.</p>
          </div>
          <div className="spread__copy">
            <p className="eyebrow">{copy.commons.eyebrow}</p>
            <h3>{copy.commons.title}</h3>
            <p>{copy.commons.copy}</p>
            <StoryLink slug="commons-room" />
            <div className="award-object">
              <span aria-hidden="true">✳</span>
              <p>{copy.commons.recognition}</p>
            </div>
          </div>
        </article>
        <article className="era-spread stage-spread" id="chapter-researchagent">
          <figure className="stage-photo">
            <div className="stage-photo__dateline">
              <span>Main stage</span>
              <span>Singapore / 10.10.26</span>
            </div>
            <Image
              {...copy.researchagent.image}
              alt={copy.researchagent.image.alt}
              sizes="(max-width: 760px) 85vw, 720px"
            />
            <figcaption>
              Presenting ResearchAgent at Singtel 8George.
              <br />
              <a
                href={copy.researchagent.gallery}
                target="_blank"
                rel="noopener noreferrer"
              >
                Photo: event attendee / AI Tinkerers Singapore ↗
              </a>
            </figcaption>
          </figure>
          <div className="spread__copy">
            <p className="eyebrow">{copy.researchagent.eyebrow}</p>
            <h3>{copy.researchagent.title}</h3>
            <p>{copy.researchagent.copy}</p>
            <div className="stage-recognition">
              <span aria-hidden="true">✳</span>
              <p>{copy.researchagent.recognition}</p>
            </div>
            <StoryLink slug="researchagent-main-stage">
              The presentation and what came next
            </StoryLink>
            <div className="stage-links">
              <a
                href={copy.researchagent.slides}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open the slides ↗
              </a>
              <StoryLink slug="researchagent-evidence">
                How the evidence checks work
              </StoryLink>
            </div>
          </div>
        </article>
        <div
          className="era-spread era-spread--reverse"
          id="chapter-local-first"
        >
          <article className="spread__copy">
            <p className="eyebrow">{copy.screenshot.eyebrow}</p>
            <h3>{copy.screenshot.title}</h3>
            <p>{copy.screenshot.copy}</p>
            <StoryLink slug="local-screenshot-naming" />
            <div className="mini-measure">
              <strong>39</strong>
              <span>
                screenshots in the
                <br />
                documented runtime comparison
              </span>
            </div>
          </article>
          <div className="spread__media">
            <div className="print-object">
              <ProjectImage id="screenshot-declutterer" />
              <span className="print-object__seal">
                LOCAL
                <br />
                FIRST
              </span>
            </div>
          </div>
        </div>
        <div className="era-spread lab-notes">
          <div id="chapter-provenance">
            <PolicyWidget />
            <StoryLink slug="mandateflow-provenance">
              Why provenance changes the answer
            </StoryLink>
          </div>
          <div className="lab-notes__stack">
            <div id="chapter-performance">
              <Note slug="apple-health-importer" />
            </div>
            <Note slug="yald-agent-logs" />
          </div>
        </div>
        <div className="learning-strip">
          <div className="learning-strip__stamp" aria-hidden="true">
            a little
            <br />
            <strong>every day.</strong>
          </div>
          <div>
            <p className="eyebrow">Learning log / AWS certifications</p>
            <h3>The study tool came along for the ride.</h3>
            <p>
              Cloud architecture, a home-built quiz tool, and study sessions on
              the MRT. Five AWS certifications, with the useful lessons kept
              along the way.
            </p>
            <StoryLink slug="aws-learning-by-building">
              Open the learning notes
            </StoryLink>
          </div>
        </div>
        <div className="era-more">
          <Link href="/projects">
            More from the workbench <span aria-hidden="true">↗</span>
          </Link>
          <Link href="/journal">
            All field notes <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </Era>
      <Era theme="studio">
        <article className="era-spread studio-spread" id="chapter-fitback">
          <div className="spread__copy">
            <p className="eyebrow">{copy.fitback.eyebrow}</p>
            <h3>{copy.fitback.title}</h3>
            <p>{copy.fitback.copy}</p>
            <StoryLink slug="fitback-size-recommendation" />
            <p className="recognition-line">{copy.fitback.recognition}</p>
          </div>
          <div className="spread__media">
            <div className="fitback-frame">
              <span className="fitback-frame__label">FIT / BACK</span>
              <ProjectImage id="fitback" caption={copy.fitback.caption} />
            </div>
            <div className="fit-tokens" aria-label="Fitback inputs">
              <span>
                2<br />
                <small>photos</small>
              </span>
              <span>
                17
                <br />
                <small>keypoints</small>
              </span>
              <span>
                you
                <br />
                <small>fit preference</small>
              </span>
            </div>
          </div>
        </article>
        <div className="era-spread photo-interlude" id="chapter-photo-pause">
          <figure className="personal-print">
            <Image
              src={siteContent.hero.images[11].image}
              alt={siteContent.hero.images[11].alt}
              sizes="(max-width: 760px) 80vw, 360px"
            />
            <figcaption>A little room for the things in between.</figcaption>
          </figure>
          <div className="interlude-copy">
            <p className="eyebrow">From the camera roll</p>
            <p>
              Projects leave a trail.
              <br />
              So do the people
              <br />
              <em>and the little moments.</em>
            </p>
            <span>Personal photographs, collected along the way.</span>
          </div>
        </div>
      </Era>
      <Era theme="field">
        <article className="era-spread" id="chapter-systems">
          <div className="spread__copy">
            <p className="eyebrow">{copy.field.eyebrow}</p>
            <h3>{copy.field.title}</h3>
            <p>{copy.field.copy}</p>
            <ul className="work-periods">
              {copy.field.periods.map((period) => (
                <li key={period}>{period}</li>
              ))}
            </ul>
          </div>
          <div className="spread__media">
            <SystemWidget />
          </div>
        </article>
        <div className="era-spread field-photo">
          <div className="field-note">
            <span className="field-note__pin" aria-hidden="true" />
            <p className="eyebrow">A note to keep</p>
            <p>
              Good documentation
              <br />
              is part of
              <br />
              <em>the working system.</em>
            </p>
          </div>
          <figure className="personal-print">
            <Image
              src={siteContent.hero.images[4].image}
              alt={siteContent.hero.images[4].alt}
              sizes="(max-width: 760px) 80vw, 440px"
            />
            <figcaption>{copy.field.caption}</figcaption>
          </figure>
        </div>
      </Era>
      <Era theme="play">
        <div className="era-spread" id="chapter-archive">
          <div className="spread__media">
            <div className="retro-monitor">
              <div className="retro-monitor__screen">
                <Image
                  src={siteContent.archive[4].image}
                  alt={siteContent.archive[4].imageAlt}
                  sizes="(max-width: 760px) 80vw, 460px"
                />
              </div>
              <div className="retro-monitor__chin">
                <span>BREAKOUT / C + SDL2</span>
                <i aria-hidden="true" />
              </div>
            </div>
          </div>
          <div className="spread__copy">
            <p className="eyebrow">{copy.play.eyebrow}</p>
            <h3>{copy.play.title}</h3>
            <p>{copy.play.copy}</p>
            <Link className="text-link" href="/projects#experiments">
              Explore the earlier experiments <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
        <div className="cartridge-shelf">
          {siteContent.archive
            .filter((project) =>
              ["HealthMate", "InvoiceHub", "3D Angry Bird Space"].includes(
                project.title,
              ),
            )
            .map((project, index) => (
              <Link
                className="project-cartridge"
                href={`/projects#${project.title === "HealthMate" ? "healthmate" : project.title === "InvoiceHub" ? "invoicehub" : "angry-bird-space"}`}
                key={project.title}
              >
                <div>
                  <span>0{index + 1}</span>
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    sizes="(max-width: 760px) 80vw, 300px"
                  />
                </div>
                <h3>{project.title}</h3>
                <p>{project.period}</p>
                <span className="project-cartridge__arrow" aria-hidden="true">
                  ↗
                </span>
              </Link>
            ))}
        </div>
        <aside className="teaching-note">
          <span aria-hidden="true">&gt;_</span>
          <div>
            <p className="eyebrow">
              SUTD / teaching assistant / Nov 2021 — Jan 2022
            </p>
            <p>
              Teaching Python meant helping other people find their way through
              the same questions—coursework, projects, and Raspberry Pi lab
              setups.
            </p>
          </div>
        </aside>
        <p className="archive-footnote">
          Some dates overlap. These are chapters in the work, rather than neat
          boxes around a life.
        </p>
      </Era>
    </div>
  );
}
