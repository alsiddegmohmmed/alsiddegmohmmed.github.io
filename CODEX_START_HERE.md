# CODEX_START_HERE.md

Read this file first when opening the repository in Codex.

## Branch

Work on this branch:

```txt
portfolio-atlas-implementation
```

Do not implement directly on `master` until the portfolio is reviewed.

## Primary instruction order

Codex must read the repo guidance in this exact order before editing code:

1. `AGENTS.md`
2. `CODEX_START_HERE.md`
3. `docs/CODEX_MASTER_PROMPT.md`
4. `docs/FULL_IMPLEMENTATION_BRIEF.md`
5. `docs/DESIGN_DIRECTION.md`
6. `docs/CONTENT_GUIDE.md`
7. `docs/PROJECT_STRUCTURE.md`
8. `docs/MOTION_AND_ACCESSIBILITY.md`
9. `docs/ASSET_PLAN.md`
10. `docs/QA_AND_LAUNCH_CHECKLIST.md`

If any instruction conflicts, use this precedence:

```txt
AGENTS.md > CODEX_START_HERE.md > FULL_IMPLEMENTATION_BRIEF.md > specific docs > existing code
```

## What this project is

This is not a normal developer portfolio.

This is the implementation of a personal software engineering portfolio based on the selected direction:

```txt
Operational Systems Atlas
```

The portfolio should feel like a serious engineering casebook: light editorial layout, technical diagrams, restrained motion, precise project evidence, and strong credibility.

The visual identity comes from systems, diagrams, typography, and case-study depth — not from a personal photo.

## What Codex must build

Build a Next.js portfolio that includes:

- homepage;
- selected work section;
- project detail pages;
- diagram-first visual system;
- public project links;
- confidential project treatment;
- responsive desktop/tablet/mobile layouts;
- accessible navigation and focus states;
- subtle SVG/CSS motion;
- deployment-ready Vercel build.

## Exact project order

The selected work section must appear in this exact order:

1. Expand / AmnAds
2. Primus Trading & Investment Website
3. Fuel Custody & Reconciliation Platform
4. Inseejam IoT Operations Platform
5. Hospital Operations Platform
6. Real-Time Cash Management System

Do not reorder based on perceived technical strength. Public websites come first because they are public proof.

## Non-negotiable rules

- No personal photo anywhere.
- No generic AI-looking dark neon portfolio.
- No fake screenshots for confidential projects.
- No invented metrics.
- No inflated ownership claims.
- No heavy animation libraries unless absolutely justified.
- No giant skills-logo wall.
- No random decorative 3D objects.
- No client-sensitive data.
- No internal URLs, payloads, database schemas, or proprietary details.

## Current implementation status

The branch already includes:

```txt
app/data.ts
app/page.tsx
AGENTS.md
docs/CODEX_TASKS.md
docs/DESIGN_DIRECTION.md
docs/CONTENT_GUIDE.md
docs/MOTION_AND_ACCESSIBILITY.md
docs/PROJECT_STRUCTURE.md
```

Codex should continue from that foundation, improve structure, extract components, create project detail pages, and refine CSS to match the chosen visual direction.

## First Codex task

Before writing code, inspect:

```txt
package.json
app/layout.tsx
app/page.tsx
app/globals.css
app/data.ts
```

Then report:

1. what exists;
2. what should be refactored;
3. what files you will create;
4. what order you will implement in;
5. risks or missing assets.

After that, implement Phase 1 from `docs/FULL_IMPLEMENTATION_BRIEF.md`.

## Exact first prompt to give Codex

Use this prompt in Codex:

```txt
You are implementing the Operational Systems Atlas portfolio for Siddeg Omer. Read AGENTS.md, CODEX_START_HERE.md, docs/CODEX_MASTER_PROMPT.md, docs/FULL_IMPLEMENTATION_BRIEF.md, and all docs under /docs before editing. Follow the selected design direction exactly: light editorial systems casebook, no personal photo, no generic AI dark/neon portfolio, no fake screenshots, no invented metrics. Start by inspecting the current Next.js app, then implement the project structure, reusable components, dynamic project detail pages, responsive CSS, subtle SVG/CSS motion, accessibility, SEO, and QA checklist. Keep content truthful and data-driven from app/data.ts. Do not drift from the approved project order: Expand, Primus, Fuel Custody, Inseejam IoT, Hospital Operations, Real-Time Cash Management.
```
