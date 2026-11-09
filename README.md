# Built by Keshav

Personal digital garden and portfolio built with Next.js App Router.

## Tech Stack

- Next.js 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS 4
- Framer Motion

## Project Structure

- src/app: Route segments and page-level metadata
- src/components/common: Cross-page UI pieces (navbar, footer, command palette)
- src/components/ui: Reusable primitives (card, badge, container)
- src/lib: Shared utilities and shared types
- src/content: Route content, site copy, and external links
- public: Static assets

## Local Development

1. Install dependencies

	 npm install

2. Start dev server

	 npm run dev

3. Open http://localhost:3000

## Quality Checks

- Lint:

	npm run lint

- Production build:

	npm run build

- Run production server locally:

	npm run start

## Deployment

Recommended: Vercel

1. Push repository to GitHub
2. Import project in Vercel
3. Keep framework preset as Next.js
4. Build command: npm run build
5. Start command: npm run start (used for self-hosting, not needed on Vercel)
6. Add custom domain in Project Settings > Domains

## Environment Configuration

Create .env.local for local development.

Suggested pattern:

- .env.local: local-only values
- .env.staging: staging values
- .env.production: production values (managed in hosting provider secrets)

Do not commit secrets.

## Performance and SEO Notes

- Route-level metadata is defined in app routes
- Static generation is used for most pages
- Dynamic project listing supports query filtering

## Security Notes

Baseline response headers are configured in next.config.ts:

- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy: restrictive defaults

## Roadmap

- Add automated tests (unit + integration)
- Add analytics and error monitoring
- Add CI pipeline for lint + build + test
