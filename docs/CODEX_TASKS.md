# Codex Task Plan — Operational Systems Atlas Portfolio

Use this document as the implementation checklist for the `portfolio-atlas-implementation` branch.

## Current objective

Convert the existing portfolio into the chosen **Operational Systems Atlas** design direction.

The branch already contains the initial content model in `app/data.ts` and an initial homepage implementation in `app/page.tsx`. Continue from there, but improve structure and quality before final deployment.

## Phase A — Repository cleanup and structure

1. Inspect the existing repo.
2. Identify old static template files that are no longer part of the Next.js implementation.
3. Do not delete assets blindly. First verify whether anything is referenced by the app.
4. Create component directories if needed:

```txt
components/
  atlas/
  diagrams/
  layout/
lib/
  seo.ts
  projects.ts
```

5. Move large UI pieces out of `app/page.tsx` if the file becomes too large.

Recommended extraction:

- `components/layout/SiteNav.tsx`
- `components/layout/SideIndex.tsx`
- `components/atlas/HeroSystemDiagram.tsx`
- `components/atlas/ProjectCard.tsx`
- `components/atlas/CapabilityCard.tsx`
- `components/atlas/ExperienceTimeline.tsx`
- `components/atlas/ContactPanel.tsx`
- `components/diagrams/ProjectDiagram.tsx`

## Phase B — Homepage implementation

Homepage sections, in order:

1. Navigation
2. Left side casebook index
3. Hero
4. Selected Work
5. Capabilities
6. Tech Snapshot
7. Experience Timeline
8. Contact panel
9. Footer

### Hero requirements

Hero copy should remain close to:

```txt
I build systems that solve real problems at scale.

Systems thinking. Measurable impact.

I build full-stack software across frontend, backend, real-time workflows, and cloud-connected platforms for industries where reliability matters.
```

Hero visual:

- SVG layered system diagram;
- no photo;
- no generic dashboard screenshot;
- labels such as Data In, Operators, Outcomes, Layers, Services;
- subtle animated nodes and data paths;
- must respect `prefers-reduced-motion`.

### Selected Work requirements

Use this exact order:

1. Expand / AmnAds
2. Primus Trading & Investment Website
3. Fuel Custody & Reconciliation Platform
4. Inseejam IoT Operations Platform
5. Hospital Operations Platform
6. Real-Time Cash Management System

Card behavior:

- public projects have `Public` label;
- confidential projects have `Confidential` label;
- each card links to its project detail page;
- public projects can also include external live link on detail page;
- confidential projects use diagrams, not fake screenshots.

## Phase C — Project detail pages

Create route:

```txt
app/projects/[slug]/page.tsx
```

Each project detail page should use data from `app/data.ts`.

Page structure:

1. Back to work link
2. Project header
3. Status, category, stack, live link if public
4. Overview
5. Problem
6. Role
7. What I worked on
8. Architecture / system context
9. Impact
10. Representative diagram or public screenshot area
11. Next/previous project navigation

Confidential note:

```txt
This case study avoids client-sensitive screens, internal data, and proprietary implementation details. Visuals are representative system diagrams created to explain the workflow safely.
```

## Phase D — Design system and CSS

Implement the chosen style:

- off-white background;
- ink text;
- deep green accent;
- thin borders;
- editorial spacing;
- serif or refined display heading if available;
- mono/small technical labels;
- cards that feel like casebook entries, not SaaS pricing cards.

CSS must include:

- responsive grid rules;
- mobile navigation behavior;
- focus-visible states;
- reduced-motion support;
- print-safe basic readability if possible.

## Phase E — Motion and interaction

Use CSS/SVG motion first.

Implement:

- hero SVG stroke-draw animation;
- subtle node pulse;
- card hover lift;
- button arrow movement;
- timeline active dot hover/focus state.

Do not implement:

- custom cursor;
- heavy parallax;
- excessive scroll-jacking;
- animations that continue aggressively after the hero loads.

## Phase F — SEO and metadata

Update `app/layout.tsx` metadata to avoid inaccurate seniority inflation if needed.

Suggested title:

```txt
Al Siddeg Omer | Software Engineer
```

Suggested description:

```txt
Software engineer building full-stack, real-time, and operational software across IoT, fintech, healthcare, fuel operations, and public web platforms.
```

Add project-level metadata if implementing dynamic metadata.

## Phase G — QA before final merge

Run:

```bash
npm install
npm run lint
npm run build
```

Manual checks:

- homepage desktop;
- homepage mobile;
- every project detail page;
- keyboard navigation;
- focus states;
- reduced motion;
- external links open correctly;
- no fake screenshots;
- no personal photo;
- no invented metrics;
- Vercel deployment passes.

## Acceptance criteria

Implementation is acceptable when:

- site no longer feels like a generic AI portfolio;
- project order is correct;
- public projects are easy to inspect;
- confidential projects are safely represented;
- homepage works on mobile and desktop;
- typography and spacing are disciplined;
- all case studies are reachable;
- code builds without errors;
- content is accurate and defensible.
