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

This file records the design decisions only. The codebase has not been
re-themed yet; the next implementation pass should apply Warm Paper first and
keep the same content structure and interaction model.
