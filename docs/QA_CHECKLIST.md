# QA Checklist — Operational Systems Atlas

## Automated checks

- TypeScript: `./node_modules/.bin/tsc --noEmit` passes.
- Production build: `./node_modules/.bin/next build` completes and prerenders the homepage, icon, and all six project detail pages.
- ESLint: `./node_modules/.bin/eslint .` passes.

## Browser smoke checks

Checked with local Chrome against `http://127.0.0.1:3000`.

- Homepage loads with meaningful content.
- No Next.js error overlay.
- No console errors.
- Selected work order is correct:
  1. Expand / AmnAds
  2. Primus Trading & Investment Website
  3. Fuel Custody & Reconciliation Platform
  4. Inseejam IoT Operations Platform
  5. Hospital Operations Platform
  6. Real-Time Cash Management System
- Fuel Custody project detail page loads.
- Confidential note appears on confidential project page.
- Mobile viewport at 390px has no horizontal overflow.
- Desktop viewport at 1440px has no horizontal overflow.
- CSS is loaded and computed styles match the atlas design tokens.

## Manual content checks

- No personal photo is used.
- No dark neon or glassmorphism portfolio treatment is used.
- Public work is listed first.
- Confidential projects use representative SVG diagrams, not fake screenshots.
- Project content is rendered from `app/data.ts`.
- Metadata avoids unsupported seniority inflation.

## Remaining launch checks

- Test keyboard-only navigation through nav links, cards, project pages, and contact links.
- Test operating-system reduced motion preference.
- Replace public-project visual placeholders with approved real screenshots when provided.
