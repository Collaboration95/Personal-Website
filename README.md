# Guru Prasath — personal portfolio

This is a static-first Next.js App Router portfolio for Guru Prasath. The page
is one continuous story: a photo-led introduction, a content-driven timeline of
real projects and work notes, and a closing contact section.

The active visual direction is Warm Paper. See [DESIGN.md](DESIGN.md) for the
palette, type choices, motion boundaries, and layout intent. See the companion
delivery notes for the rebuild audit:

- [REBUILD_STATUS.md](REBUILD_STATUS.md) — current delivery state and known limits
- [CONTENT_INVENTORY.md](CONTENT_INVENTORY.md) — verified copy and link sources
- [ASSET_INVENTORY.md](ASSET_INVENTORY.md) — image provenance and optimization notes
- [ARCHITECTURE_DECISION.md](ARCHITECTURE_DECISION.md) — why Next.js remains the stack
- [VERCEL_AUDIT.md](VERCEL_AUDIT.md) — safe preview/production route

## Local development

Requires Node.js and npm.

```bash
npm ci
npm run dev
```

Open <http://localhost:3000>. The same commands are available as Make targets:

```bash
make install
make dev
```

Development output is isolated in `.next-dev`, so running a production build
does not corrupt an active dev server.

Useful checks:

```bash
make lint       # Next lint
make typecheck  # TypeScript without emit
make test       # content/assets validation
make check      # lint + typecheck + content test + production build
make build      # production build only
make start      # serve the production build locally
```

## Updating content

The source of truth is [`lib/data.ts`](lib/data.ts). Keep personal details,
project descriptions, technology labels, periods, social URLs, and alt text
there. The visual components in `components/` should render the data rather
than become a second content store.

Project links are intentionally absent until a repository or live URL is
verified. Add them to the typed model and the project renderer together when
they become available. Do not add a live Instagram feed; add only user-owned
photo exports with a source and alt-text note in `ASSET_INVENTORY.md`.

## Images and fonts

Images are imported through `next/image`, which reserves layout space and emits
responsive optimized variants. The portrait is the only verified personal
photo currently available; most project visuals were restored from this
repository's Git history, with the DetectT demo copied from its public
repository. Outfit, Figtree, and JetBrains Mono are loaded through
`next/font/google` with `swap` display and system fallbacks.

## Deployment

The repository's GitHub default branch is `main`, and GitHub reports the
connected Vercel homepage as
<https://guruprasathgopal-collaboration95s-projects.vercel.app>. Push a feature
branch to create a Vercel preview through the existing integration, verify that
preview in a browser, then merge to `main` for production. No Vercel token,
environment secret, or custom-domain setting belongs in this repository.
