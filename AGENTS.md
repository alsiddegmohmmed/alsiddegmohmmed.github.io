# AGENTS.md — Portfolio Implementation Instructions

This repository contains the personal portfolio of **Al Siddeg Omer**, a software engineer focused on full-stack, real-time, operational, and enterprise software.

Codex must treat this file as the primary instruction source before making changes.

## 1. Mission

Build a distinctive portfolio website based on the chosen design direction:

**Operational Systems Atlas**

The site must feel like an authored engineering casebook / technical field manual, not a generic AI-generated developer portfolio.

The goal is to help Siddeg earn recognition and opportunities by presenting:

- public frontend work: Expand / AmnAds and Primus;
- serious system work: fuel custody, IoT operations, hospital operations, and cash management;
- credible full-stack engineering ability across frontend, backend, APIs, real-time systems, cloud, data, and operations.

## 2. Non-negotiable design rules

Do not create a generic dark neon portfolio.

Do not use a personal photo.

Do not use oversized gradient cards, fake glowing dashboards, AI-looking glassmorphism, random 3D avatars, fake statistics, or meaningless animations.

The chosen visual language is:

- light editorial background;
- technical casebook / atlas layout;
- refined typography;
- strong whitespace;
- precise borders and grid lines;
- subtle green / ink accents;
- system diagrams and workflow maps;
- calm motion, not flashy motion;
- no personal portrait.

The site should feel engineered, mature, credible, and slightly unusual.

## 3. Content truth rules

Never invent metrics, employers, project outcomes, screenshots, or ownership claims.

Use only defensible claims from the supplied content and CV.

Use confident wording, but avoid false ownership.

Correct positioning:

> Software Engineer building full-stack, real-time, and operational software for complex industries.

Acceptable phrases:

- Built core modules
- Contributed across frontend and backend
- Worked on API-driven workflows
- Supported system areas related to telemetry, reconciliation, reporting, and role-based operations
- Built responsive public websites and dashboard interfaces
- Worked within a larger engineering team

Avoid:

- I single-handedly architected everything
- I built the entire platform alone
- Guaranteed results not supported by evidence
- Fake user counts or invented performance metrics

## 4. Project order

The homepage selected-work section must use this exact order:

1. Expand / AmnAds
2. Primus Trading & Investment Website
3. Fuel Custody & Reconciliation Platform
4. Inseejam IoT Operations Platform
5. Hospital Operations Platform
6. Real-Time Cash Management System

Public projects should have live links. Confidential projects should use representative diagrams and workflow visuals.

## 5. Technical direction

The repo is a Next.js app. Continue using:

- Next.js App Router
- TypeScript
- React
- CSS modules or global CSS as appropriate
- server-rendered/static-first pages where possible
- minimal dependencies

Do not add heavy animation libraries unless there is a strong reason. Prefer CSS transitions, SVG animation, and small client components only where needed.

## 6. Implementation priorities

Implement in this order:

1. Stabilize global design system and layout primitives.
2. Build the homepage from the chosen high-fidelity direction.
3. Build project detail pages using a reusable route/template.
4. Add representative SVG diagrams for confidential projects.
5. Add public project screenshots when provided.
6. Polish responsive layouts.
7. Add accessibility and reduced-motion handling.
8. Add SEO metadata and Open Graph image strategy.
9. Run lint/build checks.

## 7. Accessibility and performance rules

Respect WCAG 2.2 AA expectations.

Required:

- semantic HTML;
- visible focus states;
- keyboard-accessible navigation;
- sufficient color contrast;
- no motion that is required to understand content;
- prefers-reduced-motion support;
- useful alt text for real images;
- aria-hidden for decorative SVGs.

Performance targets:

- avoid heavy runtime JavaScript;
- optimize SVGs;
- avoid large image payloads;
- use Next image optimization for screenshots;
- keep animations cheap: transform, opacity, stroke-dashoffset.

## 8. Motion behavior

Motion must be subtle and purposeful.

Allowed:

- hero SVG line drawing;
- slow layer drift;
- node pulse;
- section reveal with small translate/opacity;
- project card hover lift no more than 4px;
- timeline dot activation on scroll if implemented carefully.

Avoid:

- bouncy motion;
- parallax overload;
- cursor gimmicks;
- constant background animation;
- heavy animation libraries by default.

## 9. Repository hygiene

Keep the implementation organized.

Recommended structure:

```txt
app/
  page.tsx
  layout.tsx
  globals.css
  data.ts
  projects/[slug]/page.tsx
components/
  atlas/
  diagrams/
  layout/
lib/
  projects.ts
  seo.ts
public/
  images/
  diagrams/
docs/
```

Do not leave unused old HTML template assets in the main implementation path. If old assets remain, do not reference them unless explicitly used.

## 10. Tone of final product

The portfolio should communicate:

- technical seriousness;
- clarity;
- systems thinking;
- product judgement;
- ability to operate across frontend and backend;
- ability to work in Saudi/Arabic/RTL enterprise contexts;
- maturity beyond generic tutorial projects.

The final website should make a hiring manager think:

> This engineer has worked on real operational software, understands system complexity, and can present work with precision.
