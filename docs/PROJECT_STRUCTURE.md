# Recommended Project Structure

This document defines the target repository organization for the portfolio implementation.

## Current context

The project is a Next.js App Router portfolio.

Existing important files:

```txt
app/layout.tsx
app/page.tsx
app/globals.css
app/data.ts
package.json
```

The goal is to keep the codebase small, readable, and easy for Codex or a developer to continue.

## Target structure

```txt
app/
  data.ts
  globals.css
  layout.tsx
  page.tsx
  projects/
    [slug]/
      page.tsx

components/
  atlas/
    CapabilityCard.tsx
    ContactPanel.tsx
    ExperienceTimeline.tsx
    HeroSystemDiagram.tsx
    ProjectCard.tsx
    ProjectVisual.tsx
  diagrams/
    CashDiagram.tsx
    FuelDiagram.tsx
    HospitalDiagram.tsx
    IotDiagram.tsx
    WebsiteMockup.tsx
  layout/
    SideIndex.tsx
    SiteFooter.tsx
    SiteNav.tsx

lib/
  projects.ts
  seo.ts
  utils.ts

public/
  images/
    expand/
    primus/
  diagrams/

docs/
  CODEX_TASKS.md
  CONTENT_GUIDE.md
  DESIGN_DIRECTION.md
  MOTION_AND_ACCESSIBILITY.md
  PROJECT_STRUCTURE.md
```

## File responsibility

### `app/data.ts`

Single source for portfolio content:

- projects;
- timeline;
- capabilities;
- contact;
- tech snapshot.

Do not scatter project content across many components.

### `app/page.tsx`

Homepage composition only.

It can import components and data, but should not contain large diagram components after refactor.

### `app/projects/[slug]/page.tsx`

Dynamic case-study route.

Responsibilities:

- locate project by slug;
- return `notFound()` if slug is invalid;
- render project header;
- render problem, role, contribution, architecture, impact, stack;
- render safe visual based on project visual type;
- generate project metadata if implemented.

### `components/atlas/`

Portfolio-specific UI components.

Use for components tied to the Operational Systems Atlas design.

### `components/diagrams/`

Reusable SVG/diagram components for project visuals.

Keep diagrams lightweight and semantic.

### `components/layout/`

Navigation, side index, footer, layout elements.

### `lib/projects.ts`

Optional helper functions:

```ts
getProjectBySlug(slug)
getNextProject(slug)
getPreviousProject(slug)
```

### `lib/seo.ts`

Optional metadata helpers for project pages.

## Refactor plan

Step 1: Keep the current homepage working.

Step 2: Extract hero diagram.

Step 3: Extract project card.

Step 4: Extract project visual.

Step 5: Create dynamic project detail page.

Step 6: Improve CSS and responsiveness.

Step 7: Add public screenshots later when available.

## Data model rule

If adding a new project, update only `app/data.ts`. The UI should render it automatically.

## Public screenshots rule

Public screenshots should be placed under:

```txt
public/images/expand/
public/images/primus/
```

Use descriptive file names:

```txt
public/images/expand/homepage-desktop.webp
public/images/expand/homepage-mobile.webp
public/images/primus/homepage-desktop.webp
```

Do not commit huge raw PNGs if optimized WebP can be used.

## Confidential visuals rule

Confidential project visuals should be generated as SVG components or safe static diagrams.

Do not place client screenshots in the repo unless the user explicitly confirms they are safe to publish.

## CSS organization

Global CSS is acceptable for this small portfolio.

However, keep it organized by sections:

```css
/* Tokens */
/* Reset */
/* Layout */
/* Navigation */
/* Hero */
/* Projects */
/* Capabilities */
/* Timeline */
/* Contact */
/* Project detail */
/* Responsive */
/* Reduced motion */
```

## Build rule

The implementation is not complete until:

```bash
npm run lint
npm run build
```

both pass.
