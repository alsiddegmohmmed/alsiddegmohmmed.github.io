# Motion and Accessibility Guidelines

This portfolio uses motion as a systems metaphor, not decoration.

## Motion philosophy

Motion should communicate:

- system flow;
- layered architecture;
- data movement;
- hierarchy;
- responsive feedback.

Motion should not compete with reading.

If an animation does not help understanding or polish, remove it.

## Preferred implementation methods

Use CSS and SVG first.

Preferred properties:

- `opacity`
- `transform`
- `stroke-dashoffset`
- `stroke-dasharray`

Avoid animating layout-heavy properties:

- `width`
- `height`
- `top`
- `left`
- `box-shadow` repeatedly
- filters on large regions

## Hero diagram animation

The hero diagram should animate in this order:

1. faint grid appears;
2. layers fade/translate in sequentially;
3. central cube appears;
4. data paths draw in;
5. nodes pulse once or slowly;
6. labels fade in.

Suggested timing:

```txt
0ms–300ms: grid opacity
250ms–900ms: layers
700ms–1200ms: cube
950ms–1600ms: path drawing
1300ms–1900ms: nodes
1500ms–2200ms: labels
```

Animation must stop being attention-hungry after the first load. Slow ambient movement is allowed only if subtle.

## Project cards

Hover/focus behavior:

- lift card 2–4px;
- darken border slightly;
- move arrow 2px diagonally;
- do not scale the whole card aggressively;
- maintain keyboard focus style.

Confidential cards should not feel disabled. They are valid case studies; they just use safe visuals.

## Section reveal

Optional reveal:

- opacity from 0 to 1;
- translateY from 12px to 0;
- duration 350–500ms;
- stagger small children by 40–70ms maximum.

Avoid scroll-jacking and complex parallax.

## Reduced motion

Must support:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.001ms !important;
  }
}
```

For reduced motion users:

- all diagrams must remain readable;
- content must not depend on animation;
- no hidden content should require animation to appear.

## Accessibility requirements

### Semantic HTML

Use proper elements:

- `main`
- `nav`
- `section`
- `article`
- `footer`
- real links for navigation
- buttons only for actions, not links

### Focus states

Every interactive element must have a visible focus state.

Recommended:

```css
:focus-visible {
  outline: 2px solid var(--green);
  outline-offset: 3px;
}
```

### Color contrast

Ensure readable contrast for:

- body text;
- muted text;
- badges;
- buttons;
- links;
- diagram labels.

Do not use very light gray text for important content.

### SVG accessibility

For decorative SVGs:

```tsx
aria-hidden="true"
focusable="false"
```

For meaningful diagrams:

- use `role="img"`;
- include `<title>`;
- include text equivalent nearby if the diagram explains important information.

### Links

External links must include:

```tsx
target="_blank" rel="noreferrer"
```

Link text should be descriptive:

- good: `View Primus live website`
- weak: `Click here`

### Mobile accessibility

Minimum touch target: 44px height/width.

Avoid tiny project-card links that are hard to tap.

### Keyboard navigation

Check:

- tab order follows visual order;
- navigation links are reachable;
- project cards are reachable;
- focus does not disappear;
- contact links are reachable.

## Testing checklist

Before final deployment, test:

- keyboard-only navigation;
- reduced motion in OS/browser settings;
- mobile viewport 360px;
- tablet viewport 768px;
- desktop 1440px;
- dark mode browser setting does not break design;
- no horizontal scroll;
- Lighthouse accessibility check;
- manual screen-reader sanity check if possible.
