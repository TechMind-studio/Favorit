# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install          # Install dependencies
npm run dev          # Dev server at http://localhost:3000
npm run build        # Production build
npm run lint         # ESLint check
```

## Architecture

Single-page Next.js 14 (App Router) landing site for **Автошкола Фаворит** (Novosibirsk driving school).

**Stack:** Next.js 14 · React 18 · TypeScript · Tailwind CSS

**File layout:**
- `app/page.tsx` — assembles all sections in order
- `app/layout.tsx` — root layout, fonts (Inter with Cyrillic), SEO metadata
- `app/globals.css` — Tailwind directives + shared utility classes (`.btn-primary`, `.btn-outline`, `.section-title`, `.section-subtitle`)
- `components/` — one file per section, named after the section

**Sections (in page order):**
1. `Header.tsx` — sticky, transparent over hero, white on scroll. Mobile hamburger menu. `'use client'`
2. `Hero.tsx` — dark hero with stats (30 лет, 15 филиалов, 70%, рассрочка 0%). Server component.
3. `Prices.tsx` — two cards: Category B (65 000 ₽) and A (35 000 ₽). Includes a contact modal with a form. `'use client'`
4. `CarsCarousel.tsx` — auto-playing carousel, pauses on hover, prev/next buttons + dot + thumbnail navigation. `'use client'`
5. `Reviews.tsx` — 6 review cards with star ratings. "Show all" toggle. Links to VK page. `'use client'`
6. `Branches.tsx` — 15 branch cards in a dark section. Live search filter. Each card links to Yandex Maps. `'use client'`
7. `Footer.tsx` — CTA strip + 4-column footer with social icons (VK, Telegram, WhatsApp). Server component.

**Real contact data (do not change):**
- Phone: `+7 (383) 383-21-00`
- WhatsApp: `+79139168131`
- Telegram: `@driving_school_Favorit`
- VK: `vk.com/favoritavtoshkola`

## What needs real content

- **Branch addresses** in `Branches.tsx` — currently placeholder Novosibirsk addresses. Replace with real ones.
- **Car photos** in `CarsCarousel.tsx` — add images to `/public/images/cars/` and replace `imagePlaceholder` with `<Image src="..." />`.
- **Reviews** in `Reviews.tsx` — replace with real customer reviews.
- **Form submission** in `Prices.tsx` — the `alert()` stub should be replaced with an actual API call (e.g. POST to a backend or a service like Formspree).

## Tailwind colors

Primary red is extended in `tailwind.config.ts`:
- `primary` → `#D62027`
- `primary-dark` → `#A8181E`
- `primary-light` → `#E84047`
