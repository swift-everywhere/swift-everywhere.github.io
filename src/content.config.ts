import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Blog posts. Tag a post with a project slug (e.g. "android", "server")
// to make it appear under that project's landing page.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Swift Everywhere'),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

// Projects: a customizable content collection. Add a markdown file under
// src/content/projects/ to publish a new project. The body of the markdown
// file is rendered as that project's landing page. Posts whose `tags`
// include the project's `tag` are listed on the project's page.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    description: z.string().optional(),
    // Tag used to match blog posts to this project. Defaults to the file slug.
    tag: z.string().optional(),
    // Filename (without extension) under public/icons/projects/.
    icon: z.string(),
    // When true, the icon SVG is rendered with its original colors via
    // <img> instead of being tinted via CSS mask-image. Use this for
    // multi-color brand logos where the original artwork should be
    // preserved (e.g. the official WebAssembly logo).
    iconLiteral: z.boolean().default(false),
    // Base hex tint color (e.g. "#3ddc84"). Used for the icon and as the
    // base for derived light/dark page accents.
    tint: z
      .string()
      .regex(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/, 'tint must be a hex color'),
    order: z.number().default(0),
    featured: z.boolean().default(true),
    repo: z.string().url().optional(),
  }),
});

// Conferences and meetups. The body of each markdown file is rendered as
// a longer description on the listing page if present. Past events are
// filtered out at build time by `src/pages/events/index.astro`.
const events = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    location: z.string(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    url: z.string().url(),
    type: z.enum(['conference', 'meetup']).default('conference'),
    online: z.boolean().default(false),
  }),
});

export const collections = { blog, projects, events };
