# Built by Keshav

A statically generated portfolio and digital garden built with the Next.js App Router.

## Technology

- Next.js 16 and React 19
- TypeScript in strict mode
- Tailwind CSS 4
- Framer Motion
- Next.js image optimization and metadata APIs

## Architecture

```text
assets/placeholder/       Project cover source images
public/                   Files served without processing, including the resume
src/
  app/                    Routes, route metadata, and page composition
  components/             Active reusable interface components
    common/               Cross-page behavior
    layout/               Site shell
    shared/               Small shared navigation pieces
    ui/                   Reusable primitives
  data/                   Typed portfolio content
    projects/
      assets.ts           Project image registry
      catalog.ts          Project records
      validation.ts       Runtime catalog invariants
      index.ts            Public project-data entry point
  lib/                    Formatting, parsing, types, and pagination helpers
```

Routes import data through each directory's public `index.ts` entry point. Project records are checked for missing fields, duplicate IDs, and empty stack/tag collections when the catalog loads.

Project notes remain author-friendly plain text in the catalog and are transformed into semantic headings, paragraphs, and lists by `src/lib/project-content.ts`.

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality Commands

```bash
npm run lint       # ESLint
npm run typecheck  # TypeScript without emitting files
npm run check      # Lint and type-check together
npm run build      # Optimized production build
```

Run `npm run check` before committing changes.

## Content Updates

- Edit profile and external links in `src/data/site.ts`.
- Edit biography content in `src/data/about/index.ts`.
- Edit timeline entries in `src/data/timeline/index.ts`.
- Add project images to `assets/placeholder/`, register them in `src/data/projects/assets.ts`, and add project records to `src/data/projects/catalog.ts`.

## Deployment

The project is compatible with Vercel's default Next.js deployment settings. No runtime environment variables are currently required.

## Security and Performance

- Security response headers are configured in `next.config.ts`.
- External links use safe `noopener noreferrer` behavior where needed.
- Project pages are statically generated from validated project data.
- Project covers use the Next.js image component for responsive delivery.
