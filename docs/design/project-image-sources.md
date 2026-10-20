# Project imagery and content evidence

Reviewed 20 October 2026. This content pass owns `lib/projects.ts`,
`public/project-images/*`, and this document. Routes, article bodies, and styling
belong to the parent implementation.

## Image provenance

All six new files come from existing public project assets, retrieved through
the authenticated `gh` CLI. Originals and optimized outputs were visually
inspected. These are screenshots of the actual projects or a photograph of the
documented hardware, not newly generated portfolio mockups. The Commons itself
uses generated illustrations and sprites; its screenshot preserves that product
artwork.

| Portfolio file | Public original, pinned to the reviewed commit | Attribution and context | Output |
| --- | --- | --- | --- |
| `/project-images/commons.webp` | [Room-only screenshot](https://github.com/Collaboration95/common-grounds-makeathon/blob/aa6867063a8dc2d606f05baa71812497706cd0f2/docs/screens/04-world-room-only.png) | Guru Prasath / The Commons public project. Shared-room view with illustrated background and product creatures; no visitor name panel, host console, PIN, or join QR. Suitable hero candidate. | 1200 × 675 · 67,172 bytes |
| `/project-images/researchagent.webp` | [Answer-v2 walkthrough](https://github.com/Collaboration95/theFastandtheFungible/blob/c280ba2c6329b1655ca5105c23cdefa10404ac68/docs/ux-walkthrough/current/03-answer-v2.jpg) | ResearchAgent team project. Screen explicitly identifies fixture research, fictional demo evidence, simulated SGD, and no real funds. An answer view, not a private agent transcript. Preserve the simulation label when presenting it. | 1200 × 750 · 73,302 bytes |
| `/project-images/screenshot-declutterer.webp` | [Cleanup-batch demo board](https://github.com/Collaboration95/screenshot-declutterer/blob/f555a966e7c67ca225ecd06110f78ec6acd51ffb/docs/assets/cleanup-batches/1440x900-board-light.png) | Guru Prasath / Screenshot Declutterer public project. Actual review interface populated with synthetic screenshot fixtures. Generic charts and tables contain no customer or health records. | 1200 × 750 · 49,986 bytes |
| `/project-images/fitback.webp` | [Pose demo](https://github.com/Collaboration95/DetectT/blob/d29d5518b05e1dae5247e398ba85e1b652107c3c/images/posenet-setup.png) | Detect-T public component of the team Fitback chapter. Published camera demonstration and pose overlay; not an accuracy result or the full commercial product. No identity or biometric measurements inferred from the image. | 1200 × 874 · 41,752 bytes |
| `/project-images/sushi-shakedown.webp` | [Gameplay screenshot](https://github.com/Collaboration95/Sushi-Shakedown/blob/660506b90af6c37c749a85c3e858ef71bd65f2f8/ReadmeAssets/GamePlayScreen1.png) | Sushi Shakedown team game; screenshot from Guru's extended fork. Credit [jaga991's upstream project](https://github.com/jaga991/Sushi-Shakedown), the team, and existing game artwork. Does not imply solo authorship of the game or its art. | 1200 × 677 · 89,406 bytes |
| `/project-images/solar-tracker.webp` | [Physical prototype photograph](https://github.com/Collaboration95/Solar_Sun_Tracker/blob/2292b2babeddf0a7a5af1a138cd0c1a759f85c45/assets/physical-project.jpeg) | Guru Prasath / Solar Sun Tracker public build notes. Panel, sensors, and Arduino wiring on a worktable; no readable personal records or infrastructure details. Photograph supports a physical build, not efficiency or axis-range claims. | 1200 × 900 · 75,254 bytes |

Existing `/Breakout_C.png` is referenced without modification (1020 × 697).
It was visually checked: a game menu with no player records or identifying data.
It belongs to the existing portfolio's Breakout team-project presentation; this
pass does not establish an additional upstream asset license.

Repository publication is the provenance of these portfolio illustrations, not
a claim that every embedded illustration has an unrestricted third-party reuse
license. Retain team/upstream credits when moving the images elsewhere.

## Optimization and reproduction

Used the repository's existing Sharp dependency; no dependencies added. All six
outputs preserve the entire original frame and aspect ratio. Resize to at most
1200 pixels wide without enlargement, encode as WebP with effort 6, and strip
metadata through Sharp's default output behaviour. Quality is 84 for Commons,
Fitback, Sushi Shakedown, and solar; 94 for the text-heavy ResearchAgent and
Screenshot Declutterer views. Combined new image payload: 396,872 bytes. Every
file is below 250KB. Width and height in `lib/projects.ts` match decoded output.

To retrieve a source again, use `gh api` on the repository's git tree at the
pinned commit, find the path's blob SHA, then fetch that git blob with `gh api`
and decode its base64 content. The blob route also handles originals above the
contents endpoint's inline-content limit. Never fetch GitHub assets with curl,
browser automation, or an unauthenticated HTTP client.

Example optimization, with the authenticated download already saved locally:

```js
await sharp(originalPath)
  .resize({ width: 1200, withoutEnlargement: true })
  .webp({ quality: 84, effort: 6 })
  .toFile(outputPath);
```

## Catalog boundaries

The 25 public-source entries use the completed GitHub and LinkedIn research summarized in the root content inventory. Each entry links to a
verified public repository or authored submission. Presentation links were
established in the research through public Pages configuration/source; they are
retained explainers, not a promise of an active hosted application. Additional
read-only README checks used `gh` for Commons, HRM Live, StyleMind, InvoiceHub,
HealthMate, Handoff, SMYA, Uno, the notifier, and solar.

Periods are editorial chapter labels based on visible source activity and
published context, not invented launch/completion dates. Solar specifically says
“Public notes · 2025” because its repository date does not establish the original
hardware build date. Eras are editorial groupings, not employment attribution.

- Rewind V1 is grouped under Rewind. Fitback's pose and chart-extraction
  experiments are one entry; Detect-T substantiates the public component, not
  the entire team product or numerical sizing results.
- MandateFlow credits the team and supplied Agent Launchpad starter, with the
  specific Go gateway contribution. Sushi Shakedown links both the extended
  fork and upstream. Julius Baer is an authored, unmerged submission, not
  ownership of the organizer's challenge.
- YALD has a GitHub preview package; no npm-publication claim. Its spend is an
  API list-price estimate. HRM Live's candidate is not notarized. ResearchAgent
  uses fictional evidence and testnet/simulated payments; the removed Cloud Run
  deployment is not linked as live. Commons is marked wound down.
- FlickPond retains the team/course context and incomplete measurement coverage.
  FindMyCar uses cloud Textract. Movie booking remains an educational,
  single-process Raft-style simulation.
- No private health dashboards, agent-log screenshots, visitor panels, deployment
  consoles, or infrastructure diagrams were copied. Safe image evidence was
  unavailable for the remaining entries; their image fields are omitted rather
  than filled with invented UI or unrelated stock imagery.

Generic forks, empty repositories, exercises, course starters, profile/site
duplicates, and interview notes are excluded. The C++ Breakout scaffold is not a
second completed game. Early auto-linkedin is not conflated with applyd without
confirmed lineage. Small AWS quizzes, static bakery work, documentation-only
collections, design-only prototypes, and older trivia/bot collections are left
outside this 25-entry selection. The time-sensitive pricing utility is omitted
without renewed pricing verification. Aircon Balance Bot and the OpenGL physics
experiment lack verified public source links in the completed research.

Seven article routes are reserved by the data contract and owned by the parent:
`commons-room`, `researchagent-evidence`, `local-screenshot-naming`,
`apple-health-importer`, `yald-agent-logs`, `fitback-size-recommendation`, and
`mandateflow-provenance`.

## Retained early archive

The parent retained two additional original-portfolio experiments (3D Angry Bird Space and Aircon Balance Bot) without inventing repository URLs, bringing the collection to 27. HealthMate and InvoiceHub reuse their existing portfolio images. These originals and their provenance are recorded in the original asset inventory/Git history.
