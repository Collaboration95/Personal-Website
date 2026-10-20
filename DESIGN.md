# Guru Prasath — four eras, one story

Decision: 20 October 2026. The user's latest direction combines real career
chapters with distinct visual worlds, 3D trinkets, small widgets, an era
companion, and substantial writing. This supersedes the earlier uniform Warm
Paper treatment. The hero and farewell retain its warmth.

## Story and composition

The page begins with a personal photograph beside a clear statement and direct
LinkedIn/GitHub links. Visitors then move from current work back through earlier
chapters. Periods can overlap; they are editorial groupings, not invented job
boundaries. One central rail connects the desktop journey and moves left on
phones. Personal photographs interrupt the project rhythm without pretending
to document an event or project whose association is unverified.

The old standalone principles block and repeated detailed case-study cards are
replaced by selected project spreads and linked articles. Full explanations
belong in `/journal/[slug]`; `/projects` holds the wider collection. The homepage
uses a monitor-like Commons feature, a screenshot print, an evidence demo,
notes, a learning stamp, a Fitback editorial plate, an engineering notebook,
and a retro game shelf.

## Worlds

| World | Surface / ink / muted / accent | Typography and objects |
| --- | --- | --- |
| Welcome / farewell | `#F3EFE7` / `#262721` / `#66665D` / `#98543D` | Outfit, Figtree, system Georgia emphasis; photo stack and keycap |
| Lab | `#25282B` / `#F4F0E6` / `#BEC1BA` / `#C8B6ED` | Clear sans headings, instrument labels; lilac resin Pip, monitor, policy sketch |
| Studio | `#EDDCD1` / `#3D302B` / `#705A50` / `#984A37` | Georgia editorial headings; ceramic Pip, print plate, sculpted input tokens |
| Field | `#DBE4DF` / `#203F3C` / `#4C645C` / `#286354` | Mono headings over a quiet drafting grid; enamel Pip and raised system buttons |
| Playground | `#EEEACA` / `#34432E` / `#5B684E` / `#566B3B` | Mono headings and sage toy surfaces; blocky Pip, CRT-like frame, cartridges |

Figtree remains the body face. Outfit and JetBrains Mono are the existing
font assets; the editorial era adds no downloaded serif family. Each era owns
its scoped tokens in CSS. Adjacent worlds remain readable at their boundary;
scrolling does not recolor the whole document or hide unrevealed content.

## Motion and interaction

The photo stack rotates every 4.5 seconds through all fourteen supplied images.
Pause/resume and previous/next controls remain visible. Hover, keyboard focus,
off-screen placement, and hidden tabs pause rotation; reduced motion starts in
manual mode. The current loaded photo stays visible while a selected image loads
or if its request fails. The frame reserves its geometry.
The policy example switches between two documented fixture routes; the system
trace exposes the purpose of each boundary. Both use native buttons and text
feedback. These are illustrative widgets, not live infrastructure or payments.

Pip uses generated transparent sprite sheets with a consistent silhouette and
baseline. Wave, Snack, Nap, and Wake are native buttons; a tap on the pet cycles
reactions. The dial and journal versions use compact pet buttons. Discrete poses
provide feedback even with reduced motion; brief CSS wave/hop motions run only
when motion is enabled. Original stills remain as loading/failure fallbacks.
There are no scroll locks, cursor capture, or sound.

Reduced motion disables transitions and smooth scrolling. Static layouts,
photographs, text, anchors, and article links work without JavaScript. Controls
that need hydration stay hidden until usable; the widgets include explanatory
no-script text. All interactive controls retain visible focus.

The dial has six anchors: hello, four eras, contact. Scroll state follows the
last section crossing a reading line and does not move focus. Explicit keyboard
activation focuses the target section. On phones the dial stays at the edge with a dedicated content gutter, so it does not cover articles or photographs. Six tall targets keep each chapter reachable.

## Imagery and provenance

Use real, source-backed project figures and the user's existing photo exports.
Do not create fake screenshots or imply that personal photo dates/people match
particular projects. Generated artwork is confined to the fictional companion.
The four original 512px alpha WebPs total about 134 KB; four new 512px sprite
sheets add 203 KB and sixteen poses. Authentic event photos now document the
ResearchAgent main-stage presentation with gallery attribution. Images are optimized and
lazy-loaded. Exact sources and prompts are recorded in the design notes.

## GitHub counterpart

The profile is a personal project shelf with varied story forms: a room image,
a before/after pair, a bounded proof figure, a three-image walkthrough, short
personal tool notes, a camera prototype, and earlier game saves. No technical
skills catalogue, résumé structure, external stats widget, or badge wall.
