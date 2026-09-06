# Lyzr Sovereign AI — homepage reimagination

A production-oriented Next.js take-home that keeps Lyzr's Sovereign AI story while borrowing the strongest principles from Ramp's marketing design: editorial typography, deliberate whitespace, product-led visuals and motion that explains state.

## Stack

- Next.js 16.3.3 / App Router
- React 19
- TypeScript
- Tailwind CSS v4
- Motion 13
- Lucide React

## Run locally

```bash
npm install
npm run dev
```

Before sharing:

```bash
npm run check
```

`check` runs lint, TypeScript and a production build.

## Current design decisions

- White-first theme using Lyzr's brown / rose palette as punctuation rather than background decoration.
- Server Components by default; client components are limited to interaction and motion islands.
- The early stack section is intentionally structural rather than diagrammatic. No arbitrary connector lines.
- The "How Lyzr gets you there" section uses real accessible tabs, matching the interaction implied by Lyzr's live Sovereign AI page.
- Tab panels use purpose-built product surfaces for Control Plane, Nitro, models and Optimus instead of generic flowcharts.
- The three business-reason cards use equal-height desktop rows and fixed internal title/body rhythm so metrics align.
- All animation respects reduced-motion preferences.
- Client / ecosystem SVGs live in `public/clients`.

## Responsive checks before submission

Manually verify at 320, 375, 430, 768, 1024, 1280, 1440 and 1920 px. Pay particular attention to:

- hero CTA wrapping
- horizontal ownership tab scrolling
- tab panel stacking
- equal-height reason cards
- 4-column stack collapsing to a readable linear layout
- customer logo grid

Run Lighthouse against the production build, not `next dev`.
