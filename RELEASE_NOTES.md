# Portfolio rebuild release candidate

## Summary

This release candidate replaces the placeholder portfolio surface with one
continuous Warm Paper story: a personal hero, a photo-led project timeline,
and a contact close. The page keeps real resume/project content and uses only
assets recovered from the repository's own history.

## Key decisions

- Retained Next.js App Router for the existing Vercel-connected repository.
- Moved page content into `lib/data.ts` so projects, experience, links, and
  image metadata can be updated without rewriting layout components.
- Kept motion progressive: the edge dial is the only client enhancement and
  ordinary anchor navigation remains available without JavaScript.
- Used Warm Paper tokens from `DESIGN.md` with Outfit, Figtree, and JetBrains
  Mono; no dark-mode switcher, stock imagery, or unsupported social feed was
  introduced.

## Validation

- `npm run check` — passed (lint, typecheck, content validation, production
  build).
- Strict frontend audit — passed with zero findings.
- Browser/computer view — hero, timeline, dial, keyboard navigation, history
  navigation, mobile clearance, resource endpoints, and local console checked.
- Responsive widths — 320px, 375px, 768px, 1024px, and 1440px with no horizontal
  overflow.

## Deployment

- Preview branch: `codex/portfolio-integration`.
- Preview URL: pending connected Vercel deployment.
- Production URL: `https://guruprasathgopal-collaboration95s-projects.vercel.app`.
- Production merge: intentionally pending preview verification.

## Known follow-ups

- Add a verified personal photography set when the source files and usage
  rights are available; the current timeline uses one portrait editorial pause
  rather than fabricating an Instagram feed.
- Add verified project repository/live-demo URLs if Guru wants project cards to
  link outward.

## Rollback

The pre-rebuild production reference is commit `9da9d19` (`Added agents and
design`). Prefer the connected Vercel prior deployment rollback when available;
otherwise revert the integration commit in a new Git commit.
