# Era and journal refresh — 20 October 2026

The implementation is ready for review on `codex/portfolio-integration`, in
[website PR #2](https://github.com/Collaboration95/Personal-Website/pull/2).
This edition is not a production merge. The previous Vercel preview URL belongs
to the older build and must not be used as evidence for this version.

## Delivered

- A photo-led welcome, four distinct era worlds, a continuous timeline, and contact.
- The lab, studio, field, and playground use different typography, surfaces,
  project compositions, tactile CSS objects, and Pip companion variants.
- A manually browsed photo stack; illustrative policy and system-trace widgets.
- Eight substantial journal articles, category navigation, static article pages,
  RSS, canonical/social metadata, and a sitemap.
- 27 selected projects: 25 with verified public source trails and two retained
  early-portfolio experiments without invented repository links.
- Six additional optimized public project images and four generated alpha WebP
  companions. Prompt/source records are in `docs/design/`.
- A separate informal, image-led GitHub profile refresh, prepared in the sibling
  `collaboration95-refresh-20261020` checkout on `codex/personal-project-shelf`.
  The older unpublished `collaboration95` folder remains untouched.

## Verification

- Final `npm run check` passed: lint, TypeScript, content integrity, production build.
- Content validation checks 27 project records, eight articles, 14 referenced
  content-image records, four transparent companions, unique IDs, relationships,
  source URL shape, image geometry, and draft exclusion.
- The final production server passed HTTP checks for 14 page/filter variants,
  eight RSS items, 11 sitemap URLs, canonical and feed-discovery tags, collection
  Twitter metadata, internal fragments, image alt attributes, and unknown-article 404s.
- Desktop hero and era layouts were visually inspected. Mobile layouts were
  checked at 375px and 320px. The final 320px check reported a 320px document
  width, no broken loaded images, and the correct active era.
- Policy-button selection, keyboard selection/focus, system-trace changes, and
  era navigation were exercised. The mobile dial has a reserved edge gutter.
- Reduced-motion emulation reported `scroll-behavior: auto` and zero active
  animations. The photo stack has no autoplay.
- No-JS structure was checked in server HTML: complete text/images/links,
  hidden inactive controls, and explanatory `noscript` content. A complete
  browser run with JavaScript disabled was not confirmed; do not describe it as
  a passed browser test.
- Sol reviewed the integrated code and evidence. Two P3 findings were fixed
  (collection Twitter metadata and a profile worker-boundary statement); the
  scoped follow-up returned no remaining actionable findings.
- The profile agent validated GitHub-rendered Markdown, desktop/mobile wrapping,
  dark appearance, all ten local images, and 18 public repository links. The
  final wording correction was subsequently reviewed.

## Limits and handoff

- Hosted verification for this exact version is separate from local checks.
  The existing deployment may require an authenticated Vercel preview session.
- This pass retains the existing Next 14 runtime. A supported-version upgrade
  remains separate maintenance; no clean security-audit claim is made.
- The build reports an existing outdated Browserslist database notice.
- No live cloud infrastructure, public profile pins, account settings, or
  production branch was changed as part of implementation.
- Credential dates with conflicting evidence and unverified role/accuracy claims
  were omitted. Article event periods and website publication dates are distinct.

Local website preview: `http://localhost:3000/`. Production-mode QA uses port
3100. Profile review shell uses `http://127.0.0.1:8796/` while its server runs.
Research reports and browser working files remain outside the public repositories.
