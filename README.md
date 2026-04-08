# swift-everywhere.org

The source for [swift-everywhere.org](https://swift-everywhere.org) — a
community site about running Swift on every platform: Android, server,
embedded, WebAssembly, Windows, and Linux desktop. The site also hosts
a blog, an upcoming Swift events calendar, and an automated Android
build-status report for the wider Swift package ecosystem.

## A brief Astro primer

The site is built with [Astro](https://astro.build), a static-site
framework with three things worth knowing if you're new to it:

1. **`.astro` files** look like HTML with a frontmatter "code fence"
   (`---`) at the top where you can write TypeScript that runs at build
   time. Anything you `await` there is resolved before the page is
   rendered to static HTML.
2. **Pages** under `src/pages/` become URLs automatically
   (`src/pages/blog/index.astro` → `/blog/`). Files named `[...slug].astro`
   are dynamic routes that use `getStaticPaths()` to enumerate every
   page they generate.
3. **Content collections** under `src/content/` are markdown files
   typed by a Zod schema in `src/content.config.ts`. Pages query them
   with `getCollection('blog')`, `getCollection('projects')`, or
   `getCollection('events')`.

That's enough to follow most of this site. If you want more:

- [Astro documentation](https://docs.astro.build) — the canonical reference.
- [Astro tutorial](https://docs.astro.build/en/tutorial/0-introduction/)
  — walks you through building an Astro site from scratch.
- [Content collections guide](https://docs.astro.build/en/guides/content-collections/)
  — covers schemas, loaders, and `getCollection`.
- [Routing guide](https://docs.astro.build/en/guides/routing/) — file-based
  pages and dynamic `[...slug]` routes.

## Running the site locally

You'll need [Node.js](https://nodejs.org) (version 20 or later
recommended) and `npm`.

```sh
git clone https://github.com/swift-everywhere/swift-everywhere.github.io.git
cd swift-everywhere.github.io
npm install
npm run dev
```

This starts a local development server at <http://localhost:4321>
with live reload — edit any file under `src/` and the browser will
update automatically.

### Other useful commands

| Command           | What it does                                          |
| ----------------- | ----------------------------------------------------- |
| `npm run dev`     | Start the dev server with hot reloading               |
| `npm run build`   | Produce a production build into `dist/`               |
| `npm run preview` | Serve the contents of `dist/` locally to sanity-check |
| `npm run astro`   | Run the Astro CLI directly (e.g. `npm run astro check`) |

Always run `npm run build` before opening a pull request — the GitHub
Actions deploy workflow runs the same command, and content-collection
schema mistakes (missing fields, invalid dates, bad URLs) only surface
at build time.

## Project layout

```
src/
├── components/        # reusable .astro components (Header, Footer, ProjectIcon)
├── content/
│   ├── blog/          # blog posts (markdown)
│   ├── events/        # conferences and meetups (markdown frontmatter)
│   └── projects/      # one file per Swift Everywhere workstream
├── content.config.ts  # Zod schemas for the three collections
├── layouts/
│   └── BaseLayout.astro
├── pages/             # routes — file path == URL
│   ├── index.astro            # landing page
│   ├── android-builds.astro   # legacy Android build status report
│   ├── blog/
│   ├── events/
│   └── projects/
└── styles/global.css
public/                # static assets copied verbatim into the site root
  ├── favicon.svg
  └── icons/projects/  # Material Symbols / Tux SVGs used by ProjectIcon
_data/                 # JSON consumed by android-builds.astro (updated by CI)
```

## Contributing changes

Contributions are welcome via pull request. The most common changes
fall into one of these categories:

### Add a blog post

1. Create `src/content/blog/your-post-slug.md`.
2. Use the existing posts as a template — required frontmatter is
   `title`, `pubDate`, and an optional `tags` array. Tag a post with a
   project slug (`android`, `server`, `embedded`, `webassembly`,
   `windows`, `linux`) to make it appear automatically on that
   project's landing page.
3. Run `npm run dev` and visit `/blog/` to preview.

### Add or update a project

Each project lives at `src/content/projects/<slug>.md`. Frontmatter
fields are validated by `src/content.config.ts`:

```yaml
---
title: Swift on Foo
tagline: One-line pitch shown on cards.
tag: foo                  # blog posts tagged with this appear on the page
icon: foo                 # filename (no extension) under public/icons/projects/
tint: "#22C55E"           # hex color used for the icon and page accents
order: 7
featured: true
---
```

The body of the markdown file becomes the project's landing page
content. To add a new icon, drop an SVG (with no inline `fill`) into
`public/icons/projects/<name>.svg` so the `ProjectIcon` component can
tint it via CSS `mask-image`.

### Add an event

Drop a markdown file into `src/content/events/`:

```yaml
---
title: My Swift Conference 2027
summary: A one-line description for the listing.
location: Berlin, Germany
startDate: 2027-05-12
endDate: 2027-05-14
url: https://example.com
type: conference          # or "meetup"
online: false
---
```

Past events are filtered out automatically at build time, so you don't
need to clean them up after they pass.

### Submitting a pull request

1. Fork the repository on GitHub.
2. Create a branch: `git checkout -b my-change`.
3. Make your changes and run `npm run build` locally to confirm the
   site still builds.
4. Commit and push: `git push origin my-change`.
5. Open a pull request against `main`. CI will build the site again
   and report any issues. A maintainer will review and merge.

Once a PR is merged, the
[Build and Deploy workflow](.github/workflows/deploy.yml) publishes
the updated site to <https://swift-everywhere.org> automatically.

