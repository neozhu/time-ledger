## TimeLedger Marketing Site

Production-ready bilingual marketing site for TimeLedger, built with:

- Next.js 16 App Router
- TypeScript
- Tailwind CSS
- next-intl
- pnpm

## Quick Start

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Internationalization

- Supported locales: `zh` and `en`
- Default route: `/` redirects to `/zh`
- All UI text and metadata live in:
  - `messages/zh.json`
  - `messages/en.json`

## Scripts

- `pnpm dev` - start local server
- `pnpm build` - production build (webpack mode)
- `pnpm start` - run production server
- `pnpm lint` - run ESLint
- `pnpm format` - format code
- `pnpm format:check` - check formatting

## Structure

```text
app/[locale]
components/sections
components/ui
messages/
```

## SEO

Implemented:

- Locale-aware metadata via `generateMetadata`
- `app/sitemap.ts`
- `app/robots.ts`
- OpenGraph + Twitter metadata

## Deployment

Set `NEXT_PUBLIC_SITE_URL` for canonical URLs, sitemap, robots, and metadata base URL.
Production domain: `https://timeledger.blazorserver.com`.

## Docker Deployment

Build and run:

```bash
docker compose up -d --build
```

Open `http://localhost:3000`.
