# Design Direction — Operational Systems Atlas

This document translates the approved visual direction into build rules.

## Chosen visual direction

**Operational Systems Atlas**

The website should feel like:

- an engineering casebook;
- a technical field manual;
- a product architecture archive;
- a calm, premium, systems-focused portfolio.

It should not feel like:

- a generic AI portfolio;
- a neon developer template;
- a startup SaaS landing page;
- a personal influencer site;
- a 3D avatar showcase.

## Core visual principles

### 1. Editorial over template

Use strong typography, meaningful hierarchy, and controlled whitespace.

Avoid repetitive cards that look like a generated portfolio. Every section should have a clear editorial role.

### 2. Systems language

Use diagrams, annotations, labels, grids, nodes, layers, and workflow fragments.

The visual identity should come from the type of work Siddeg does: operational software, real-time systems, IoT, backend/frontend workflows, and industrial domains.

### 3. Quiet confidence

Avoid shouting. The design should communicate seriousness through precision.

Use:

- fine borders;
- structured layouts;
- careful spacing;
- compact annotations;
- subtle motion;
- controlled accent color.

### 4. No personal photo

The hero should not include a portrait.

Identity should come from:

- name;
- casebook mark;
- system diagram;
- content quality;
- project evidence.

## Color system

Suggested tokens:

```css
--bg: #f7f4ed;
--surface: #fffdf8;
--ink: #0d1b1e;
--muted: #66706c;
--line: #ded8cc;
--line-strong: #bfb7a8;
--green: #0b3d36;
--green-soft: #e6efeb;
--blueprint: #1e5b88;
--copper: #b16b3b;
```

Use green as the primary action color. Use blueprint/copper sparingly for diagram annotations only.

## Typography direction

Recommended pairing:

- Display/headings: a refined serif or high-quality editorial display font if available.
- Body/UI: modern sans-serif.
- Labels/metadata: mono or technical sans.

The current implementation can use system fonts first. Do not block implementation on font selection.

Heading style:

- large but not loud;
- strong line-height control;
- avoid too many gradients or text effects.

Labels:

- uppercase;
- letter-spaced;
- small;
- used for section numbers, status, and technical annotations.

## Layout system

Use a wide editorial container:

```css
max-width: 1180px or 1240px;
side index visible on desktop;
main content centered;
large hero split layout;
project grid below.
```

Desktop:

- left side casebook index;
- main content aligned to a clear grid;
- hero: text left, diagram right;
- selected work: 3-column or mixed grid;
- capabilities: 4 cards or horizontal band;
- contact: dark green panel.

Mobile:

- remove side index;
- simple top nav;
- hero text first;
- diagram after hero copy;
- project cards stacked;
- capability cards stacked;
- contact panel simplified.

## Component styling rules

### Buttons

Primary button:

- deep green or ink background;
- sharp rectangular shape with slight radius;
- arrow icon;
- subtle hover shift.

Secondary button:

- transparent or surface background;
- thin border;
- clear focus state.

### Cards

Project cards should feel like casebook entries.

Use:

- thin borders;
- small order number;
- public/confidential label;
- diagram or screenshot area;
- short summary;
- 2–4 tech tags;
- arrow link.

Avoid:

- heavy shadows;
- glass effects;
- rounded SaaS cards;
- bright gradients;
- fake stats on every card.

### Diagrams

Diagrams should be simple, schematic, and readable.

Use:

- boxes;
- nodes;
- lines;
- labels;
- arrows;
- layers;
- small annotations.

Each confidential project should have a representative diagram that communicates system context safely.

## Homepage feeling

The homepage should communicate:

```txt
This engineer can understand systems, not just screens.
```

The first 10 seconds should show:

- name;
- software engineer positioning;
- system-thinking visual;
- project order with public work first;
- serious domains: advertising, enterprise website, fuel, IoT, healthcare, cash management.

## Project-detail feeling

Project detail pages should feel like technical case studies.

Structure:

- header with status and category;
- precise summary;
- problem;
- role;
- contributions;
- architecture/system context;
- impact;
- representative visual;
- stack.

Do not over-design the detail pages. Their value is clarity and credibility.

## Anti-generic checklist

Before finalizing a screen, ask:

- Does this look like a template?
- Could this belong to any developer if we changed the name?
- Is there enough domain specificity?
- Are diagrams related to the actual projects?
- Is there excessive glow, gradient, or fake glass?
- Is the motion useful or decorative noise?
- Is the typography doing real work?

If the answer exposes generic design, refine before shipping.
