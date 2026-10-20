# Guru Prasath — things built, lessons kept

A personal portfolio and journal: one photo-led welcome, four visual eras,
substantial articles, a broader project collection, and a closing invitation.
The timeline travels from current experiments back through earlier work.

- **The lab:** local tools, agents, and measured experiments; graphite and lilac.
- **The studio:** Fitback and product work; warm paper and editorial type.
- **In the field:** Primech R&D; teal drafting surfaces and a system trace.
- **The playground:** early games, bots, and experiments; sage retro objects.

Pip, an original pocket-otter companion, changes material with each era. The
fixed dial tracks the page and becomes a compact edge control with reserved space on phones.
Images, text, and ordinary navigation remain available without JavaScript.
Motion respects reduced-motion preferences; the photo stack has explicit
controls and never advances automatically.

## Development

```bash
npm ci
npm run dev
npm run check
```

The dev server uses `.next-dev`; builds use `.next`. A production preview can
run separately with `npm run start -- --port 3100` after a build. No new runtime
dependency was added for the era design, widgets, journal, or companions.

## Content

| File | Responsibility |
| --- | --- |
| `lib/data.ts` | Personal details, social/contact URLs, supplied photos, early archive |
| `lib/eras.ts` | Era labels, periods, themes, and navigation |
| `lib/home-content.ts` | Curated homepage story copy |
| `lib/projects.ts` | Public project catalogue, status, credits, images, and links |
| `lib/journal.ts` | Typed article records and substantial article bodies |
| `lib/journal-types.ts` | Shared article/project contracts |
| `lib/publication.ts` | Cover selection, reading times, dates, XML escaping |

The initial edition contains 27 selected projects and eight articles. Project
images are actual public screenshots or retained early portfolio assets.
Team projects and authored forks retain their context. Do not invent links for
older projects whose public repository has not been established.

To add an article, add a `JournalArticle` in `lib/journal.ts`, with a unique
slug, category, era, description, sources, and body blocks. `publishedAt` dates
the **website edition**; `eventLabel` describes when the underlying work took
place. Set `status: "draft"` until ready: drafts have no generated route, feed
entry, index listing, or sitemap entry. Source evidence and private working
material must not be copied into public assets or article records.

## Routes and checks

- `/`: curated era journey. Earlier project hash links still resolve.
- `/journal`: server-rendered article index with category links.
- `/journal/[slug]`: generated articles with canonical, social, and structured metadata.
- `/projects`: the wider collection grouped by purpose.
- `/feed.xml`, `/sitemap.xml`, `/robots.txt`, `/manifest.webmanifest`.

`npm run check` runs ESLint, TypeScript, content-integrity checks, and the
production build. Content checks cover unique IDs, relationships, publication
filtering, public-source URLs, image existence/dimensions, and companion alpha
and size budgets. Browser checks are also required for layout or interaction
changes; build success alone does not establish visual correctness.

## Design and provenance

- [DESIGN.md](DESIGN.md): current visual and interaction decisions.
- [Era plan](docs/design/era-refresh-plan.md): planning separated from implementation.
- [Content inventory](CONTENT_INVENTORY.md): publication evidence and limits.
- [Project image sources](docs/design/project-image-sources.md): public originals and credits.
- [Companion assets](docs/design/companion-assets.md): exact generation prompts and validation.
- [Rebuild status](REBUILD_STATUS.md): verification and review/deployment state.

The existing Next App Router/Vercel architecture is retained. A supported-version
Next upgrade is separate maintenance: this refresh does not claim to have
upgraded the existing Next 14 runtime. Keep `NEXT_PUBLIC_SITE_URL` aligned with
the chosen production domain when deployment changes.
