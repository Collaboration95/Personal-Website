# Asset inventory

## 20 October 2026 edition

The four era companions and six new public project images are documented in
[companion prompts](docs/design/companion-assets.md) and
[project image sources](docs/design/project-image-sources.md). `public/social-card.png`
is a repository-drawn typographic social preview, not a project screenshot.

The hero now uses a manually browsed, fixed-geometry photo stack. Several of the
supplied photos also form timeline interludes; their captions do not invent
dates or associations with particular projects. The original asset records
below preserve provenance.

## Original asset records

| Asset | Source | Treatment | Status |
| --- | --- | --- | --- |
| `public/intro-alone.jpeg` | Historical repository commit `cae50a4` | Editorial portrait crop with explicit dimensions and descriptive alt text | Restored |
| `public/portrait-reel/*.jpg` | User-supplied `/Desktop/personal-website-images/` set | Optimized, auto-oriented, metadata-stripped personal photographs, reused in the manual photo stack and timeline | Added |
| `public/detectt-posenet-setup.png` | Public `Collaboration95/DetectT` repository | DetectT pose-detection prototype demo for the archive card | Added |
| `public/HealthMate.png` | Historical repository commit `cae50a4` | Lazy responsive project image | Restored |
| `public/InvoiceHub.png` | Historical repository commit `cae50a4` | Lazy responsive project image | Restored |
| `public/angrybirdsspace.png` | Historical repository commit `cae50a4` | Lazy responsive project image | Restored |
| `public/Breakout_C.png` | Historical repository commit `40b1f68` | Lazy responsive project image | Restored |
| `public/AirconBot.png` | Historical repository commit `cae50a4` | Lazy responsive project image | Restored |
| `public/mandateflow-provenance.jpg` | Local MandateFlow CodeJam docs | Provenance decision diagram for the selected case study | Added |
| `public/screenshot-declutterer-before-after.png` | Local LinkedIn planning asset | Before/after rename flow for the local-first case study | Added |
| `public/FinalResume.pdf` | Local working copy | Source document used for editorial verification; contains direct personal details and is intentionally not checked in or linked | Local-only |
| `public/corpcomment.png` | Current repository | Malformed legacy icon-resource file; no longer referenced | Retained for safety, unused |

## Rights and privacy

Restored visuals come from this repository's own history, with the DetectT demo
copied from the user's public `Collaboration95/DetectT` repository. The hero
reel uses the user-supplied personal photo set; its non-visual camera metadata
was stripped before publication. No Instagram media, stock imagery, or remote
image URL is used at runtime, and Next's optimized image response is used for
rendered views.

## Current coverage

The supplied photo set supports the personal interludes now implemented. No
social feed is scraped. Project illustrations and generated companions are
same-origin assets with explicit dimensions and responsive/lazy delivery.
