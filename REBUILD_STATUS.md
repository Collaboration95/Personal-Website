# Presentation and interactive companions — 20 October 2026

This follow-up implements the user's correction to the published era refresh.
The current review branch is `codex/researchagent-presentation-pets`; the matching
profile branch is `codex/researchagent-stage-story` in the sibling profile checkout.

## Delivered

- ResearchAgent's 10 October main-stage presentation at AI Tinkerers Singapore
  has a prominent homepage feature, a dedicated article, a Talks & demos filter,
  authentic event photography with credits, and links to the slides/walkthrough.
- The separate SingHacks finalist result and Cloud Run top-three demo distinction
  retain their dates, team context, and scope. The retired hosting is explicit.
- The hero rotates through all fourteen supplied photos every 4.5 seconds, with
  pause/resume and manual browsing. It pauses on hover, keyboard focus, off-screen
  placement and hidden tabs; reduced motion starts in manual mode.
- Four Sol 6.1 generated sprite sheets contain sixteen distinct poses. All era,
  dial, and journal pets respond to click/tap/keyboard input. Wave, snack, nap and
  wake controls use ordinary buttons, visible focus and polite status feedback.
- The journal now has nine articles; the project collection still has 27 entries.
  No runtime dependency was added.

## Verification

- Final `npm run check` passed: no lint warnings, TypeScript, content validation,
  and a production build with 20 generated pages and approximately 108 kB home
  first-load JavaScript.
- Asset validation covers all four transparent sprite sheets, four distinct
  populated frames per sheet, geometry and size budgets, plus article images.
- Isolated Chromium browser checks passed for automatic rotation, pause/resume,
  keyboard photo navigation, all four pets' reactions and sleep/wake behavior,
  compact dial interaction, touch at 375px and 320px, 44px controls, no horizontal
  overflow, and clearance from the edge dial.
- Reduced-motion browser checks passed: photos stay still until manually changed;
  pet pose changes work with zero active reaction animations and auto scrolling.
- A real JavaScript-disabled browser check passed for content, presentation
  navigation, initial imagery, hidden inactive controls and disabled pet controls.
- Throttled Previous requests retain the loaded photo; failed Previous and Next
  requests preserve it and permit retry. Off-screen rotation pause passed.
- The new talk filter, article, authentic cover, and related engineering-story
  link passed browser checks. Desktop and mobile captures were visually inspected.
- Sol's first review found one P2 in pending-image transitions. The fix separates
  requested and displayed photos. The focused second review passed with no
  remaining actionable finding, including stale-request and retry checks.
- Profile: all eleven image references and relative links resolve; referenced
  images total 906,272 bytes. The presentation photo matches the website asset.

## Reproduction and scope

The collaborative preview reported successful resize operations but retained a
1402px page viewport. Two ineffective attempts were followed by an isolated
Playwright 1.56.1 browser using installed Brave in headless mode and a fresh
profile. It did not operate the user's browser session. That test dependency and
browser screenshots/reports remain under the temporary QA directory, outside
this repository; no production dependency was introduced.

The site keeps Next 14; a supported-version framework upgrade remains separate
maintenance. No screen-reader usability session or security-audit claim is made.
Article publication dates identify this website edition, separate from event dates.
Original sources and generation prompts are recorded in `docs/design/`.

The Git repository's default branch is `main`. The existing Vercel production
integration follows `deployment`; publish approved main changes through a PR to
that branch and verify the public URLs after the deployment completes.
