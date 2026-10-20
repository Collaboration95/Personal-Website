# Guru Prasath Personal Portfolio

## Project identity

This project is Guru Prasath's personal portfolio and digital home. It should
feel like a real person with a point of view: someone who builds useful
software, cares about craft, and notices interesting details in the world.

This is not an agency landing page, a generic resume dump, a SaaS marketing
template, or an AI-generated portfolio filled with interchangeable language.

## Product goal

Build a fast, readable, memorable personal website that makes it easy to:

- Understand who Guru is and what he builds.
- See credible examples of his work and technical range.
- Discover his personality through photography and small narrative details.
- Reach him through clear social and contact links.
- Explore the page through a tactile scroll experience that remains calm and
  purposeful.

The site should be distinctive without making visitors work to understand it.
Personality is valuable, but clarity comes first.

## Experience requirements

### One continuous story

The primary experience is one unified page:

1. A photo-led hero.
2. A top-to-bottom scrolling timeline.
3. A closing contact and social area.

Do not create a duplicated intro section or a separate left-side introduction
that competes with the hero.

### Hero

- Use a transparent cutout portrait or another large, personal image treatment.
- Place the personal statement beside the image with generous breathing room.
- Put LinkedIn and GitHub calls to action directly below the paragraph.
- Keep the first viewport immediately understandable without requiring motion.

### Timeline

- Use a visible vertical line or rail as the organizing spine.
- Alternate project cards and personal photography along the page.
- Allow images to sit on either side of the spine, with short captions and
  context.
- Keep the rhythm varied but intentional; avoid a repetitive card grid.

### Edge dial / scroll navigator

Include a small fixed dial-like navigator at the edge of the viewport. Its
visual language is a quiet vertical stack of tick marks, with an active marker
that tracks the visitor's position.

- Represent the hero, timeline chapters, and closing/contact area.
- Update the active marker as the visitor scrolls.
- Support click/tap navigation to sections.
- Expose section names through keyboard focus and assistive technology.
- Adapt to a compact edge or bottom control on narrow screens.
- Keep it subtle enough that it never covers project cards or photography.

The dial is the stable navigation anchor for the cursor rail. A small cursor or
abstract shape may morph as the visitor scrolls, but it should animate around or
through the dial rather than become a competing navigator.

## Motion and interaction principles

- Motion should reward scrolling, not gate access to content.
- Use progressive enhancement: the page must remain complete when motion is
  disabled or unavailable.
- Respect `prefers-reduced-motion` and provide equivalent non-animated states.
- Keep motion small, legible, and tied to section changes or meaningful user
  input.
- Three-dimensional or canvas effects are optional enhancements, never the
  foundation of the experience.
- Avoid cursor effects that interfere with text selection, touch, or keyboard
  navigation.

## Technical principles

The implementation is intentionally framework-agnostic. Do not assume that the
existing stack is the right long-term choice, and do not preserve a framework
solely because it was previously popular.

- Choose the simplest stable architecture that supports the experience.
- Keep content and project data independent from visual layout code.
- Optimize images without losing their character; provide useful alt text.
- Protect first-load performance and avoid making large effects mandatory.
- Keep external links, social handles, and contact details easy to update.
- Use semantic HTML and maintain a clear heading hierarchy.
- Support keyboard navigation, visible focus, touch input, and small screens.
- Verify contrast, reduced motion, loading states, and graceful failure states.
- Add dependencies only when they solve a clear problem that the platform or
  existing tools cannot solve cleanly.

## Working rules for future agents

1. Treat the user's taste and explicit direction as the source of truth.
2. Before a major change, state the intended outcome and any assumptions.
3. Do not make the site more generic in the name of polish or convention.
4. Preserve meaningful personal details; do not replace them with filler.
5. Separate design exploration from production implementation.
6. Do not assume a framework, routing model, component structure, or hosting
   setup is permanent.
7. Avoid destructive changes unless the user clearly asks for them.
8. Prefer small, reversible changes and verify them visually where possible.
9. Explain important tradeoffs, especially around motion, performance, and
   accessibility.
10. Leave the project in a state another agent can understand and continue.

When instructions conflict, follow the newest explicit user direction while
preserving the accessibility, readability, and personal character of the site.
