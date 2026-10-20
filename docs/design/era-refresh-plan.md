# Era refresh — 20 October 2026

## Intent

Turn the portfolio into a personal collection of things built, lessons learned,
and moments along the way. The user's latest direction combines career chapters
with distinct visual worlds, tactile 3D objects, small widgets, and a companion
for each era. GitHub should read like a person sharing projects, with varied
formats and real project images, not a résumé or technical-skills catalogue.

## Decisions before implementation

- One photo-led hero, one continuous timeline, one closing contact section.
- Travel from present work back through earlier chapters. Label this explicitly;
  a visitor can jump straight to any era using the stable edge dial.
- Four visual worlds: **The lab** (current experiments, graphite and lilac),
  **The studio** (Fitback/product, peach and editorial type), **In the field**
  (R&D, teal drafting surfaces), **The playground** (earlier projects, sage
  retro objects). Periods overlap where the work does. Do not invent precise
  dates for undated projects.
- Keep the photo-led personal welcome; reduce the standalone principles block
  and move those ideas into project stories. Use different compositions for
  different projects, including screenshots, figures, short notes, and image
  plates. Photos remain personal interludes unless their event is verified.
- One proposed fictional companion, Pip the pocket otter, changes material
  across eras. Generated transparent 3D assets sit beside the dial and within
  era introductions. The silhouette stays recognizable.
- Small interactive objects explain something: a local-processing comparison,
  a pose/fit diagram, a system trace, and a toy-like retro project shelf. Avoid
  mandatory canvas, simulated loading screens, cursor capture, or scroll locks.

## Content and routes

- `/`: curated era journey with selected article previews.
- `/journal`: substantial project, hackathon, and certification stories, with
  dates and clear category navigation. No generic engagement posts.
- `/journal/[slug]`: readable articles, figure captions, source links, project
  connections, and a return path to their era.
- `/projects`: the broader public project collection, grouped by purpose;
  original work and forks are not conflated.
- `/feed.xml`, sitemap, per-route canonical and social metadata.

Keep personal information in `lib/data.ts`; project and article records live in
typed content modules independent of components. Generate article routes from
published content. Distinguish an event/source date from the publication date
of the new website article. Evidence must be public or explicitly approved for
publication; private source files and research remain outside the delivered
site. Exact metrics need the tested conditions. Unverified credentials, awards,
roles, and private project links stay out of public copy.

## Technical approach

Retain the existing static-first Next App Router deployment and native CSS.
The route/content model is compatible with the current app. A supported-version
framework upgrade is separate work; do not mix a framework migration into this
visual/content change. Use existing responsive image optimization and no new
runtime UI dependency. Keep downloadable fonts to the existing set or local
equivalents; use system serif where an era needs an editorial voice.

Keep old case-study hash links useful. Add stable era IDs and a small scroll
observer that chooses a section by its position, not by a transient observer
callback batch. On small screens use a compact edge dial with a reserved content gutter. Preserve ordinary anchors and server-rendered content without JS.

## Motion and accessibility

- 3D CSS surfaces and rendered companions provide depth at rest.
- Pointer/keyboard interactions can briefly tilt or lift an object; they must
  never move content out of reach or require dragging.
- Respect reduced motion. Prefer static hero photography with explicit previous
  and next controls to an autoplay reel that shifts the page height.
- Use visible focus, meaningful heading order, comfortable text size, useful
  alt text, and enough edge/bottom space for the dial.
- Verify desktop, narrow screens, no horizontal overflow, keyboard navigation,
  image failures, static HTML, route metadata, draft exclusion, and RSS.

## GitHub treatment

Use the existing sibling `collaboration95` repository. Lead with a short human
introduction and visual project stories. Vary the presentation deliberately:
before/after image, demo still, annotated screenshot, small experiment, and a
compact shelf of older work. Include text equivalents and useful source links.
No skills wall, résumé sections, repetitive project cards, fake activity stats,
or claims without evidence. Keep images in the repository where possible.

## Research and execution

6.1 Sol owns evidence research for LinkedIn milestones, public GitHub projects,
and design/architecture, plus the companion artwork. The parent reconciles
findings, plans the experience, integrates, and verifies. Design exploration is
recorded separately in `era-worlds.html`; production implementation follows the
decisions above. Research reports are temporary working files, not public site
assets. Final content and verification notes will record the evidence used and
any limits that remain.
