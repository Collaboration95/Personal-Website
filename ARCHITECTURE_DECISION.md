# Architecture decision — era and journal edition

Keep the existing Next App Router/Vercel architecture. The experience needs
server-rendered content, static articles, responsive images, and a few small
client interactions. A framework migration does not solve a verified problem
in this refresh; the existing Next 14 version still needs a separately scoped
supported-version upgrade.

## Shape

- `lib/data.ts` holds personal information and supplied photo/archive assets.
- `lib/eras.ts`, `lib/home-content.ts`, `lib/projects.ts`, and `lib/journal.ts`
  keep content independent of visual components.
- The homepage remains one continuous story. Full articles and the broader
  catalogue live at `/journal/[slug]` and `/projects`.
- Article parameters come only from published records. Unknown/draft articles
  do not get routes; the same publication manifest generates feed and sitemap.
- `/journal` uses server-rendered query filters; it does not need a client search
  service or a CMS. Article bodies are typed data blocks, with no remote MDX.
- Client code is limited to the dial, explicit photo controls, two illustrative
  widgets, and decorative image failure handling. CSS and static transparent
  artwork provide depth without a mandatory canvas or 3D runtime.
- The existing image optimizer and fonts are retained. No runtime dependency was
  added. The final build reports approximately 106 kB first-load JS for home.
- Development output remains separate in `.next-dev`, allowing build checks
  alongside an active local development server.

The four worlds are section-scoped visual treatments, not a global theme switch.
No reveal animation gates text. Reduced motion and static HTML remain useful.
