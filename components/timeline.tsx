import Image from "next/image";

import CaseStudyVisual from "@/components/case-study-visual";
import { chapters, type CaseStudy, type TimelineChapter } from "@/lib/data";

function CaseStudyEntry({ caseStudy, titleId }: { caseStudy: CaseStudy; titleId: string }) {
  return (
    <article className="case-study-card">
      <div className="case-study-card__heading">
        <div>
          <p className="case-study-card__period">{caseStudy.period}</p>
          <h3 id={titleId}>{caseStudy.title}</h3>
        </div>
        <span className="case-study-card__signal" aria-hidden="true">
          {caseStudy.visual === "benchmark" ? "↗" : caseStudy.visual === "local-ai" ? "◎" : "•"}
        </span>
      </div>

      <p className="case-study-card__summary">{caseStudy.summary}</p>
      <p className="case-study-card__context">{caseStudy.context}</p>
      <CaseStudyVisual caseStudy={caseStudy} />

      <dl className="case-study-facts">
        <div>
          <dt>Constraint</dt>
          <dd>{caseStudy.constraint}</dd>
        </div>
        <div>
          <dt>My role</dt>
          <dd>{caseStudy.role}</dd>
        </div>
        <div>
          <dt>Decision</dt>
          <dd>{caseStudy.decision}</dd>
        </div>
        <div className="case-study-facts__evidence">
          <dt>Evidence</dt>
          <dd>{caseStudy.evidence}</dd>
        </div>
      </dl>

      <div className="case-study-card__bottom">
        <div>
          <p className="case-study-card__label">One honest limit</p>
          <p className="case-study-card__limitation">{caseStudy.limitation}</p>
        </div>
        <div className="case-study-card__links">
          {caseStudy.links.map((link) => (
            <a href={link.href} key={link.href} target="_blank" rel="noopener noreferrer">
              {link.label} <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </div>

      <ul className="tag-list" aria-label={`${caseStudy.title} technologies`}>
        {caseStudy.technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>
    </article>
  );
}

function PhotoEntry({ chapter, titleId }: { chapter: TimelineChapter; titleId: string }) {
  if (!chapter.photo) return null;
  const photo = chapter.photo;

  return (
    <figure className="photo-card">
      <div className="photo-card__image">
        <Image
          src={photo.image}
          alt={photo.imageAlt}
          width={photo.image.width}
          height={photo.image.height}
          loading="lazy"
          sizes="(max-width: 720px) min(22rem, 82vw), 27rem"
        />
      </div>
      <div className="photo-card__body">
        <p className="eyebrow">{photo.period}</p>
        <h3 id={titleId}>{photo.title}</h3>
        <figcaption>{photo.caption}</figcaption>
      </div>
    </figure>
  );
}

function ArchiveEntry({ chapter, titleId }: { chapter: TimelineChapter; titleId: string }) {
  if (!chapter.note) return null;

  return (
    <div className="archive-card">
      <div className="archive-card__intro">
        <p className="eyebrow">A compact chronology</p>
        <h3 id={titleId}>{chapter.note.heading}</h3>
        <p>{chapter.note.body}</p>
      </div>

      <div className="experience-list-wrap">
        <p className="case-study-card__label">Work context</p>
        <ul className="experience-list" aria-label="Work context">
          {chapter.note.items.map((experience) => (
            <li key={`${experience.organisation}-${experience.period}`}>
              <p className="experience-list__period">{experience.period}</p>
              <div>
                <p className="experience-list__title">{experience.title}</p>
                <p className="experience-list__organisation">{experience.organisation}</p>
                <p className="experience-list__description">{experience.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="archive-projects">
        <div className="archive-projects__heading">
          <p className="case-study-card__label">Earlier experiments</p>
          <span>range, kept small</span>
        </div>
        <div className="archive-projects__grid">
          {chapter.note.archive.map((project) => (
            <article className="archive-project" key={project.title}>
              <div className="archive-project__image">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  width={project.image.width}
                  height={project.image.height}
                  loading="lazy"
                  sizes="(max-width: 720px) 42vw, 13rem"
                />
              </div>
              <div className="archive-project__body">
                <p>{project.period}</p>
                <h4>{project.title}</h4>
                <span>{project.technologies.join(" / ")}</span>
                {project.href ? (
                  <a
                    className="archive-project__readme"
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read README <span aria-hidden="true">↗</span>
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

function ChapterContent({ chapter, titleId }: { chapter: TimelineChapter; titleId: string }) {
  if (chapter.kind === "case-study" && chapter.caseStudy) {
    return <CaseStudyEntry caseStudy={chapter.caseStudy} titleId={titleId} />;
  }
  if (chapter.kind === "photo") return <PhotoEntry chapter={chapter} titleId={titleId} />;
  return <ArchiveEntry chapter={chapter} titleId={titleId} />;
}

export default function Timeline() {
  return (
    <section className="timeline" id="work" aria-labelledby="work-title" tabIndex={-1}>
      <header className="timeline-intro">
        <div>
          <p className="eyebrow">Selected work / field notes</p>
          <p className="timeline-intro__label">
            A sequence of systems, constraints, and the decisions that made them easier to inspect.
          </p>
        </div>
        <div>
          <h2 id="work-title">
            Things I&apos;ve built, <em>and what they changed.</em>
          </h2>
          <p className="timeline-intro__copy">
            Five chapters from current experiments, a product with outside proof, and work inside existing systems. The common thread is making the next step clearer.
          </p>
        </div>
      </header>

      <div className="timeline__rail">
        <div className="timeline__line" aria-hidden="true" />
        {chapters.map((chapter, index) => (
          <section
            className="timeline-entry"
            data-side={index % 2 === 0 ? "left" : "right"}
            data-kind={chapter.kind}
            id={chapter.id}
            key={chapter.id}
            aria-labelledby={`${chapter.id}-title`}
            tabIndex={-1}
          >
            <span className="timeline-entry__marker" aria-hidden="true" />
            <div className="timeline-entry__content">
              <div className="timeline-entry__meta">
                <span>{chapter.eyebrow}</span>
                <span className="timeline-entry__purpose">{chapter.purpose}</span>
              </div>
              <ChapterContent chapter={chapter} titleId={`${chapter.id}-title`} />
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
