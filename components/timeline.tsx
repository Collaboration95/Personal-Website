import Image from "next/image";

import { chapters, type TimelineChapter } from "@/lib/data";

function ProjectEntry({ chapter }: { chapter: TimelineChapter }) {
  if (!chapter.project) return null;
  const project = chapter.project;

  return (
    <div className="project-card">
      <div className="project-card__image">
        <Image
          src={project.image}
          alt={project.imageAlt}
          width={project.image.width}
          height={project.image.height}
          loading={chapter.id === "work-healthmate" ? "eager" : "lazy"}
          priority={chapter.id === "work-healthmate"}
          sizes="(max-width: 720px) calc(100vw - 4rem), (max-width: 1100px) 42vw, 31rem"
        />
      </div>
      <div className="project-card__body">
        <h3>{project.title}</h3>
        <p className="project-card__description">{project.description}</p>
        <p className="project-card__context">{project.context}</p>
        <ul className="tag-list" aria-label={`${project.title} technologies`}>
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function PhotoEntry({ chapter }: { chapter: TimelineChapter }) {
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
        <h3>{photo.title}</h3>
        <figcaption>{photo.caption}</figcaption>
      </div>
    </figure>
  );
}

function NoteEntry({ chapter }: { chapter: TimelineChapter }) {
  if (!chapter.note) return null;

  return (
    <div className="note-card">
      <p className="eyebrow">The through line</p>
      <h3>{chapter.note.heading}</h3>
      <p className="note-card__body">{chapter.note.body}</p>
      <ul className="experience-list" aria-label="Work archive">
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
  );
}

export default function Timeline() {
  return (
    <section className="timeline" id="work" aria-labelledby="work-title" tabIndex={-1}>
      <header className="timeline-intro">
        <div>
          <p className="eyebrow">Selected work / field notes</p>
          <p className="timeline-intro__label">
            A chronological mix of projects, experiments, and the occasional
            reminder to look away from the screen.
          </p>
        </div>
        <div>
          <h2 id="work-title">
            Things I&apos;ve built, <em>and what they taught me.</em>
          </h2>
          <p className="timeline-intro__copy">
            A few real projects from coursework, internships, and side paths.
            The common thread is not a stack — it is making the next step
            clearer.
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
              <h2 className="sr-only" id={`${chapter.id}-title`}>
                {chapter.title}
              </h2>
              {chapter.kind === "project" && <ProjectEntry chapter={chapter} />}
              {chapter.kind === "photo" && <PhotoEntry chapter={chapter} />}
              {chapter.kind === "note" && <NoteEntry chapter={chapter} />}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
