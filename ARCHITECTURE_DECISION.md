# Architecture decision

## Decision

Keep the existing Next.js 14 App Router application and rebuild the one-page experience in place.

## Why

The portfolio is a static document with a small amount of progressive enhancement. The repository already has a working Next/Vercel path, a lockfile, an App Router entry point, and a known production URL. Replacing it with Astro or another static framework would increase migration and deployment surface without solving a verified problem. The new implementation keeps server-rendered content as the default and limits client JavaScript to edge-dial state and small scroll reveals.

## Implementation shape

- `lib/data.ts` owns the typed personal, project, work-history, photo, and chapter content.
- `components/hero.tsx`, `components/timeline.tsx`, and `components/site-footer.tsx` render semantic document sections.
- `components/edge-dial.tsx` owns the accessible progressive-enhancement navigator.
- `app/globals.css` owns the Warm Paper token mapping and responsive layout system.
- Next static image imports provide explicit dimensions and responsive optimization.
- `Makefile` and package scripts provide the local developer workflow.

## Rejected alternatives

- Full Astro migration: not justified for this already-connected, single-page Next app.
- Framer Motion and the old vertical-timeline package: removed from the active surface because native CSS/IntersectionObserver cover the requested motion and reduce client/runtime weight.
- Dark-theme switcher: explicitly rejected by `DESIGN.md`; Ember Night is retained only as a future reference.
- Live Instagram feed or remote stock images: rejected for rights, privacy, performance, and truthfulness reasons.
