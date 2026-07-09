# Full Implementation Brief — Operational Systems Atlas Portfolio

This is the full build brief for the portfolio implementation. Codex must follow it without summarizing away requirements.

## 1. Objective

Build Siddeg Omer’s portfolio as a distinctive, production-quality software engineering portfolio.

The portfolio must be persuasive to hiring managers and engineering managers by showing:

- public frontend proof;
- full-stack capability;
- real operational systems experience;
- ability to work across frontend/backend/API/data/real-time/IoT/cloud systems;
- good visual taste and product judgment;
- respect for confidentiality.

The final site should not look auto-generated.

## 2. Approved design direction

The approved direction is:

```txt
Operational Systems Atlas
```

Also described as:

```txt
Operational Systems Casebook / Systems Atlas
```

It is a light editorial technical casebook with diagram-first storytelling.

It should feel:

- precise;
- authored;
- calm;
- technical;
- credible;
- premium;
- system-oriented;
- human-designed.

It should not feel:

- generic;
- AI-generated;
- neon;
- dark SaaS template;
- overanimated;
- personality/influencer driven;
- like a copy of common developer portfolios.

## 3. Visual reference summary

The chosen visual resembles:

- warm off-white paper background;
- left editorial rail on desktop;
- top navigation;
- large serif or editorial hero heading;
- technical SVG diagram in the hero;
- 3x2 casebook project grid;
- thin line cards;
- compact status labels;
- line icons;
- capability strip;
- timeline;
- dark green contact footer panel.

Do not use the generated mockup text blindly. The mockups are visual direction only. Use real content from `app/data.ts` and this documentation.

## 4. Final site architecture

Target routes:

```txt
/
/projects/[slug]
```

Optional future route, not required unless time remains:

```txt
/notes
```

## 5. Homepage structure

Homepage order must be:

1. Header / navigation
2. Desktop side casebook rail
3. Hero
4. Selected Work
5. Capabilities
6. Tech Snapshot
7. Experience Timeline
8. Contact CTA
9. Footer

### 5.1 Header

Content:

- left brand: `Siddeg Omer` or `Al Siddeg Omer` + `Software Engineer`;
- right nav: Work, Capabilities, Experience, Contact;
- Contact button.

Behavior:

- sticky or fixed-feeling on desktop;
- compact and unobtrusive;
- no huge header;
- mobile should not break into crowded links.

### 5.2 Desktop side rail

Desktop-only.

Labels:

```txt
01 Casebook
02 Selected Work
03 Capabilities
04 Experience
05 Contact
```

Purpose:

- gives the portfolio an editorial casebook feel;
- helps navigation;
- should not dominate content.

Mobile:

- hide side rail completely;
- preserve section labels inside content.

### 5.3 Hero

Preferred hero copy:

```txt
I build systems that solve real problems at scale.
```

Supporting line:

```txt
Systems thinking. Measurable impact.
```

Paragraph:

```txt
I build full-stack software across frontend, backend, real-time workflows, and cloud-connected platforms for industries where reliability matters.
```

Primary CTA:

```txt
Explore my work
```

Secondary CTA:

```txt
View experience
```

Hero metadata:

- Based in: Saudi Arabia
- Available for: Full-time opportunities

Hero visual:

- custom SVG layered system diagram;
- no personal photo;
- no video;
- no heavy image;
- use labels such as Data In, Operators, Outcomes, Dashboard, Application Layer, Service Layer, Data Layer, Edge Layer.

Hero success condition:

Within 5 seconds, a hiring manager should understand that Siddeg is not just presenting a template portfolio; he is presenting work around real systems.

### 5.4 Selected Work

Required order:

1. Expand / AmnAds
2. Primus Trading & Investment Website
3. Fuel Custody & Reconciliation Platform
4. Inseejam IoT Operations Platform
5. Hospital Operations Platform
6. Real-Time Cash Management System

Desktop layout:

- 3x2 grid preferred;
- cards must align cleanly;
- equal height or carefully balanced height;
- card visual area should be consistent.

Mobile layout:

- stacked cards;
- entire card tappable;
- no hover-only content required.

Card anatomy:

- index number;
- status badge: Public or Confidential;
- title;
- subtitle/category;
- artifact area: screenshot or diagram;
- short summary;
- tech tags;
- view case study arrow;
- live link visible on project detail pages for public work.

Public cards:

- use screenshot placeholders until real screenshots are supplied;
- later replace with real screenshots from Expand and Primus.

Confidential cards:

- use diagrams;
- do not fake UI screenshots;
- use safe system visual metaphors.

### 5.5 Capabilities

Capabilities should frame engineering responsibility, not random tools.

Use four or five capability cards:

- System Architecture
- Full-Stack Engineering
- Real-Time & Edge Systems
- Operational Software
- Data & Reliability if needed

Each capability should include:

- short title;
- one short explanation;
- 2–3 precise points.

Avoid long paragraphs and colorful tool logos.

### 5.6 Tech Snapshot

Compact tool evidence.

Allowed technologies:

- React
- Next.js
- TypeScript
- Node.js
- NestJS
- FastAPI
- Django
- PostgreSQL
- Redis
- AWS
- Docker
- WebSockets
- ThingsBoard
- Tailwind CSS
- RTL / Arabic UI

Do not make this the main section. It supports the project evidence.

### 5.7 Experience Timeline

Order:

1. Primus Trading & Investment
2. Inseejam
3. AmnAds / Expand
4. Dateline
5. Freelance & Contract Projects

Purpose:

- show progression;
- do not duplicate the full CV;
- keep each item concise.

### 5.8 Contact CTA

Headline:

```txt
Let’s build systems that solve real problems.
```

Support:

```txt
Open to software engineering opportunities where full-stack execution, reliability, and product thinking matter.
```

Include:

- email;
- LinkedIn;
- GitHub;
- location;
- primary CTA: Start a conversation.

Footer:

- text/monogram only;
- no photo.

## 6. Project detail pages

Implement dynamic route:

```txt
app/projects/[slug]/page.tsx
```

All project data should come from `app/data.ts` or helper functions based on it.

### 6.1 Project page structure

Each project page must include:

1. Back to work link
2. Project number and status
3. Title
4. Subtitle
5. Category/domain
6. Live link if public
7. Stack tags
8. Overview
9. Problem
10. My role
11. What I worked on
12. Architecture / system context
13. Impact
14. Visual artifact / diagram
15. Confidentiality note when needed
16. Next/previous project navigation

### 6.2 Public project page variant

For Expand and Primus:

- include live link;
- use screenshot frame when available;
- explain frontend work;
- keep business/system claims modest;
- show responsiveness and public proof.

### 6.3 Confidential project page variant

For Fuel, Inseejam, Hospital, Cash:

- show confidentiality badge;
- include the confidentiality note;
- use representative diagrams;
- include architecture/system context;
- never imply diagrams are production screenshots.

Use this note:

```txt
Selected details are generalized to protect confidential product and client information. Visuals are representative system diagrams, not production screenshots.
```

## 7. Project-specific implementation details

### 7.1 Expand / AmnAds

Status: Public

Live URL:

```txt
https://tryexpand.com/
```

Positioning:

```txt
Public marketing and advertising platform website.
```

What to show:

- public frontend work;
- responsive implementation;
- Arabic/English or RTL-aware capability where relevant;
- reusable components;
- page polish.

Do not overstate backend unless clearly supported.

### 7.2 Primus Trading & Investment Website

Status: Public

Live URL:

```txt
https://primus-tra.com/
```

Positioning:

```txt
Public corporate website for a technology and software solutions company.
```

What to show:

- polished public company website;
- frontend implementation;
- corporate clarity;
- public proof connected to broader Primus system work.

### 7.3 Fuel Custody & Reconciliation Platform

Status: Confidential

Positioning:

```txt
Enterprise fuel-governance platform for stations, tanks, vehicles, and field devices.
```

System themes:

- fuel pumps and dispensers;
- ATG/tank integration;
- tanker deliveries;
- RFID / plate recognition;
- fleet authorization;
- wallet/loyalty;
- compliance/audit reporting;
- offline-first operations;
- reconciliation;
- fraud prevention.

Visual:

- field devices -> ingestion -> normalization -> reconciliation -> alerts -> reports;
- no internal screenshots.

### 7.4 Inseejam IoT Operations Platform

Status: Confidential

Positioning:

```txt
Centralized IoT platform for distributed infrastructure and branch operations.
```

System themes:

- edge devices;
- meters/controllers/sensors;
- telemetry;
- attributes;
- device health;
- scheduler rules;
- branch/site grouping;
- ThingsBoard;
- WebSockets;
- real-time visibility.

Visual:

- branch/site -> edge device -> telemetry -> ThingsBoard/API -> dashboard -> scheduler/control.

### 7.5 Hospital Operations Platform

Status: Confidential

Positioning:

```txt
Role-based healthcare system for clinical and administrative workflows.
```

System themes:

- registration;
- doctors;
- nurses;
- lab;
- pharmacy;
- billing;
- admin;
- RBAC/JWT;
- patient operations;
- queues;
- dashboard workflows.

Visual:

- patient registration -> queue -> doctor/nurse -> lab/pharmacy -> billing/admin.

### 7.6 Real-Time Cash Management System

Status: Confidential

Positioning:

```txt
Offline-first cash operations platform for supermarket payment infrastructure.
```

System themes:

- POS;
- CDM / cash recycler;
- edge gateway;
- local SQLite buffering;
- 4G failover;
- AWS API Gateway;
- Lambda;
- EventBridge;
- Aurora PostgreSQL;
- Redis;
- WebSockets;
- React dashboard;
- React Native app.

Visual:

- POS -> CDM -> edge gateway -> cloud event pipeline -> management dashboard.

## 8. Design tokens

Use these as direction tokens.

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
--dark-panel: #071f1d;
```

Important:

- never pure white page background;
- avoid heavy shadows;
- rely on border, spacing, hierarchy;
- small radius only;
- no pill-heavy SaaS style.

## 9. Typography direction

Preferred:

- display: editorial serif for hero and major headings;
- body: clean sans-serif;
- metadata: mono or technical sans.

If external font setup is not ready, use sensible fallbacks first.

Heading behavior:

- large but controlled;
- refined line-height;
- no gradient text;
- no overly bold startup headline.

## 10. Motion system

Motion must feel like system instrumentation.

Allowed:

- hero SVG line drawing;
- layers rising 4–8px;
- nodes pulsing lightly;
- data path line with one subtle moving dot;
- project card border/arrow hover;
- scroll reveal opacity + translateY only.

Forbidden:

- bouncy animation;
- 3D spinning;
- particle storms;
- scroll-jacking;
- cursor-following blob;
- aggressive parallax;
- motion that distracts from reading.

Reduced motion:

- all animated states must have static fallback;
- support `prefers-reduced-motion` globally and in component logic if needed.

## 11. Accessibility

Required:

- semantic HTML;
- `main`, `nav`, `section`, `article`, `footer`;
- visible focus states;
- keyboard navigation;
- high contrast;
- descriptive link text;
- no hover-only essential content;
- aria labels where needed;
- SVG title if diagram is meaningful;
- decorative SVGs use `aria-hidden="true"`;
- mobile touch targets at least 44px.

## 12. SEO

Update metadata in `app/layout.tsx`.

Suggested site title:

```txt
Al Siddeg Omer | Software Engineer
```

Suggested description:

```txt
Software engineer building full-stack, real-time, and operational software across IoT, fintech, healthcare, fuel operations, and public web platforms.
```

For project pages, generate metadata from project data:

- title: `${project.title} | Al Siddeg Omer`
- description: project summary;
- canonical URL if possible;
- Open Graph fields.

## 13. Build sequence

### Phase 1 — Inspect and refactor

- Inspect existing files.
- Confirm app uses Next.js App Router.
- Create components directories.
- Move large inline pieces out of `app/page.tsx`.
- Keep app working after each step.

### Phase 2 — Component system

Create:

```txt
components/layout/SiteNav.tsx
components/layout/SideIndex.tsx
components/layout/SiteFooter.tsx
components/atlas/HeroSystemDiagram.tsx
components/atlas/ProjectCard.tsx
components/atlas/ProjectVisual.tsx
components/atlas/CapabilityCard.tsx
components/atlas/ExperienceTimeline.tsx
components/atlas/ContactPanel.tsx
components/diagrams/FuelDiagram.tsx
components/diagrams/IotDiagram.tsx
components/diagrams/HospitalDiagram.tsx
components/diagrams/CashDiagram.tsx
components/diagrams/WebsiteMockup.tsx
```

### Phase 3 — Homepage refinement

- Implement final homepage layout.
- Match visual direction.
- Ensure project order.
- Ensure mobile layout.
- Ensure selected work section is clear and not generic.

### Phase 4 — Project detail pages

- Implement dynamic route.
- Render every project page.
- Add next/previous nav.
- Add confidentiality notes.
- Add live links for public projects.

### Phase 5 — Motion and polish

- Implement hero SVG motion.
- Implement hover states.
- Implement reduced-motion support.
- Avoid heavy dependencies.

### Phase 6 — QA and launch

Run:

```bash
npm install
npm run lint
npm run build
```

Fix all issues before finalizing.

## 14. Final acceptance criteria

The work is accepted only if:

- no personal photo appears;
- the homepage follows the approved light editorial systems direction;
- project order is correct;
- all six project cards link to detail pages;
- public projects have live links;
- confidential projects have representative diagrams and notes;
- content is truthful;
- mobile layout is excellent;
- keyboard navigation works;
- reduced motion works;
- lint/build pass;
- no obviously generic AI-template design remains.
