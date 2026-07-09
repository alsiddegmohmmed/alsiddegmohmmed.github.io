# QA and Launch Checklist

Use this checklist before asking the user to review or before merging to master.

## 1. Build checks

Run:

```bash
npm install
npm run lint
npm run build
```

All must pass.

Do not ignore TypeScript errors, ESLint errors, hydration errors, or broken imports.

## 2. Route checks

Required routes:

```txt
/
/projects/expand-amnads
/projects/primus-website
/projects/fuel-custody-reconciliation-platform
/projects/inseejam-iot-operations-platform
/projects/hospital-operations-platform
/projects/real-time-cash-management-system
```

Each route must:

- render without error;
- have correct metadata where implemented;
- have valid internal navigation;
- not expose confidential details;
- preserve design direction.

## 3. Homepage checklist

Homepage must include:

- header/navigation;
- no personal photo;
- hero copy;
- hero SVG system diagram;
- selected work section;
- six projects in exact order;
- capabilities section;
- tech snapshot;
- experience timeline;
- contact CTA;
- footer.

Project order:

1. Expand / AmnAds
2. Primus Trading & Investment Website
3. Fuel Custody & Reconciliation Platform
4. Inseejam IoT Operations Platform
5. Hospital Operations Platform
6. Real-Time Cash Management System

## 4. Visual direction checklist

The site must feel like:

- editorial;
- technical;
- calm;
- precise;
- system-oriented;
- authored.

The site must not feel like:

- generic AI portfolio;
- dark neon template;
- floating-glass SaaS page;
- personal photo landing page;
- generic skills showcase;
- random frontend template.

## 5. Content integrity checklist

Check every project page.

No fabricated:

- metrics;
- screenshots;
- clients;
- features;
- ownership claims;
- performance results;
- user counts;
- revenue numbers.

Claims must be defensible in an interview.

Confidential projects must include a disclaimer.

Suggested disclaimer:

```txt
Selected details are generalized to protect confidential product and client information. Visuals are representative system diagrams, not production screenshots.
```

## 6. Public project checklist

For Expand and Primus:

- live links work;
- external links use `target="_blank" rel="noreferrer"`;
- screenshots are real if used;
- placeholder screenshots are not presented as real;
- project copy focuses on public frontend delivery.

## 7. Confidential project checklist

For Fuel, Inseejam, Hospital, Cash:

- no client screenshots;
- no internal names unless approved;
- no proprietary data;
- no internal URLs;
- no database schemas;
- no exact payloads;
- no sensitive architecture details beyond generalized system context;
- representative diagrams are clearly safe.

## 8. Accessibility checklist

Test:

- keyboard tab through entire homepage;
- keyboard tab through project pages;
- visible focus states;
- skip or natural navigation order;
- external links clearly labelled;
- cards are accessible links;
- mobile tap targets are at least 44px;
- contrast is readable;
- SVG diagrams have title or are decorative as appropriate;
- no hover-only essential content.

## 9. Motion checklist

Check:

- hero animation does not delay text rendering;
- animation is subtle;
- no bouncing;
- no scroll-jacking;
- no cursor gimmicks;
- no heavy animation libraries unless justified;
- reduced motion disables line-drawing and looping pulses;
- user can read without motion.

## 10. Responsive checklist

Test at minimum:

```txt
360px mobile
390px mobile
768px tablet
1024px small desktop
1440px desktop
```

Check:

- no horizontal scroll;
- nav is usable;
- side rail hidden on mobile;
- project cards stack correctly;
- hero diagram scales or moves below text;
- contact panel remains readable;
- timeline does not collapse badly.

## 11. Performance checklist

Check:

- no huge images;
- no unoptimized PNGs if avoidable;
- below-fold images lazy load;
- CSS/SVG animation uses transform, opacity, stroke-dashoffset;
- no animation layout thrashing;
- Lighthouse or browser performance check is acceptable;
- Vercel build output does not warn about obvious performance problems.

## 12. SEO checklist

Global metadata:

- title;
- description;
- Open Graph title;
- Open Graph description;
- OG image strategy;
- canonical if implemented.

Project metadata:

- unique title;
- unique description;
- project slug valid;
- notFound for invalid slug.

## 13. Code quality checklist

Check:

- `app/data.ts` is the single source of project content;
- components are reusable;
- no massive unreadable page file after refactor;
- no duplicated project content;
- no dead imports;
- no unused old images referenced;
- no TypeScript `any` unless justified;
- no console logs;
- no broken links.

## 14. Final user review checklist

Before merging:

- send preview URL;
- list completed routes;
- list remaining asset placeholders;
- ask user to approve wording;
- ask user to confirm no confidential risk;
- then merge/deploy.

## 15. Launch acceptance statement

The portfolio is ready when:

```txt
The site presents Siddeg as a credible software engineer who works across frontend, backend, and operational systems, while preserving confidentiality and avoiding generic AI-template design.
```
