---
version: alpha
name: "Guru Prasath Portfolio"
description: "A warm-paper personal portfolio for a software engineer who builds useful systems and notices the details around them."
colors:
  primary: "#B9684D"
  paper: "#F4EEE5"
  paper-deep: "#EBE2D7"
  surface: "#FAF6EF"
  ink: "#201D1A"
  muted: "#706A64"
  copper: "#B9684D"
  lilac: "#A995B9"
  teal: "#587C79"
  peach: "#D79B86"
  plum: "#765C72"
omitted:
  - section: rounded
    reason: "Square editorial frames and a component-specific circular portrait crop replace a shared radius scale."
typography:
  display:
    fontFamily: "Outfit, Arial Narrow, sans-serif"
  body:
    fontFamily: "Figtree, Helvetica Neue, sans-serif"
  mono:
    fontFamily: "JetBrains Mono, SFMono-Regular, Consolas, monospace"
spacing:
  content-width: "90rem"
  gutter-min: "1.25rem"
components:
  primary-action:
    backgroundColor: "#201D1A"
    textColor: "#F4EEE5"
  project-panel:
    backgroundColor: "#FAF6EF"
    textColor: "#201D1A"
  edge-dial:
    backgroundColor: "#EBE2D7"
    textColor: "#201D1A"
---

# Guru Prasath — Design Direction

**Decision date:** 2026-08-22  
**Working direction:** Warm Paper  
**Figma source:** [Guru Prasath — Portfolio Direction](https://www.figma.com/design/AQJ6BoMQffEAi9BbgG9mYj)

## Theme decision

Warm Paper is the selected direction for the next implementation pass. It keeps
the soft evening-light feeling, preserves readability, and gives the portfolio
room for photography and subtle color diffusion without making the interface
feel generic or overly yellow.

Ember Night is retained as the dark alternative and visual reference. It should
remain structurally identical to Warm Paper so the two directions can be
compared without changing layout, typography, imagery, or motion.

Shadcn Mono and Indigo Dusk were explored and removed from the Figma board. Do
not bring them back unless the direction is intentionally revisited.

## Shared composition

- One unified page: photo-led hero followed by the vertical scrolling timeline.
- No separate intro rail or duplicated introductory section.
- Transparent cutout portrait in the hero, with the personal statement beside
  it.
- LinkedIn and GitHub CTAs directly below the hero paragraph.
- Projects and personal Instagram photography alternate along the timeline,
  with captions and a visible central line/rail.

## Interaction requirements

### Edge dial / scroll navigator

Add a small, fixed dial-like navigator at the edge of the viewport. The visual
cue is a quiet vertical stack of short tick marks, with one active marker that
tracks the reader's position through the page.

- The dial represents the hero, timeline chapters, and closing/contact area.
- Scrolling updates the active tick; the active state may change length, weight,
  color, or shape without becoming visually noisy.
- Clicking or tapping a tick jumps to its section. Keyboard focus should expose
  the section name, and the control must have an accessible navigation label.
- On smaller screens, collapse it into a compact edge or bottom control rather
  than letting it cover project cards or photography.
- Use the Warm Paper copper/ink system and restrained diffusion; no yellow/gold
  treatment.

The dial should be the stable navigation anchor for the small cursor rail. The
cursor can still morph as the user scrolls, but it should animate around or
through the dial rather than introduce a competing second navigator.

## Warm Paper tokens

| Token | Value | Use |
| --- | --- | --- |
| Paper | `#F4EEE5` | Primary background |
| Ink | `#201D1A` | Headings and body text |
| Copper | `#B9684D` | Primary accent and CTA emphasis |
| Lilac | `#A995B9` | Soft diffusion and secondary accent |
| Teal | `#587C79` | Supporting accent |
| Peach | `#D79B86` | Warm diffusion and image accents |
| Plum | `#765C72` | Deep supporting accent |

Warm Paper should feel atmospheric through restrained radial diffusion and
softly layered color spots. Keep text contrast high; avoid low-contrast dark
text on dark surfaces.

## Ember Night tokens

| Token | Value | Use |
| --- | --- | --- |
| Night | `#121214` | Primary background |
| Surface | `#1C1C20` | Cards and elevated sections |
| Surface 2 | `#242429` | Secondary surfaces |
| Foreground | `#F4F4F5` | Headings and body text |
| Muted | `#8E8E98` | Supporting text |
| Copper | `#D0785C` | Primary accent and CTA emphasis |
| Border | `#3F3F46` | Dividers and card edges |
| Peach | `#D79B86` | Warm secondary accent |
| Lilac | `#B7A5C9` | Secondary accent |

## Type and tone

- **Outfit** for the wordmark, headings, and large statements.
- **Figtree** for body copy and supporting descriptions.
- **JetBrains Mono** for metadata, labels, dates, and timeline markers.
- Keep the voice direct, personal, observant, and slightly playful rather than
  polished into generic agency language.

## Implementation boundary

This file records the design decisions only. The Warm Paper direction is now
implemented in `app/globals.css` through semantic variables (`--paper`,
`--ink`, `--copper`, `--lilac`, `--teal`, `--peach`, and `--plum`). Outfit,
Figtree, and JetBrains Mono are loaded in `app/layout.tsx`; components consume
the variables rather than repeating raw colour literals. The edge dial is the
only required client interaction and degrades to ordinary anchor links when
JavaScript is unavailable.

The available repository assets do not include a verified Instagram photo set,
so the timeline uses the restored portrait for one learning-related personal
moment and never fabricates a social feed. Flagship case studies mix stable
same-origin project diagrams with HTML/CSS evidence figures so a missing photo
does not turn into a fabricated claim. Add future personal photography through
the documented asset/content inventory before publishing it.
