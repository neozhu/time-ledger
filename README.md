## TimeLedger Marketing Site

Production-ready bilingual marketing site for TimeLedger, built with:

- Next.js 16 App Router
- TypeScript
- Tailwind CSS
- next-intl
- pnpm

## What This Site Includes

- Bilingual landing page (`zh` / `en`)
- Sticky top navigation with brand icon
- Scroll-triggered section reveal animations (with reduced-motion support)
- Product screen showcase (including attendance device management)
- SEO basics: sitemap, robots, OpenGraph, Twitter metadata

## Quick Start

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Internationalization

- Supported locales: `zh` and `en`
- Default route: `/` redirects to `/zh`
- Landing content, labels, and metadata live in:
  - `messages/zh.json`
  - `messages/en.json`

### Content Update Tips

- Pain points: `landing.painPoints.items`
- Product screenshots: `landing.screens.items`
- Reliability/tech credibility: `landing.reliability`

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
public/images/screens
messages/
```

## Brand Assets

- Favicon: `app/favicon.ico`
- Landing brand icon: inline SVG in `app/[locale]/page.tsx`

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
