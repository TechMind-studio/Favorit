# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository layout

```
Фаворит/
  site/          # Next.js landing site — all npm commands run from here
  presentation/  # Materials for pitching the mobile app to the school's directors
    app-mockup/  # index.html — single-file concept mockup, 10 phone screens
```

`presentation/` is deliberately outside `site/`: it is not part of the site build and is not
deployed by the Pages workflow. `app-mockup/index.html` is fully self-contained (logo and photos
inlined as data URIs) so it can be opened from a phone at the meeting — keep it that way.

The mockup reuses real ПДД ticket data from a separate project at
`~/Рабочий стол/projects/smart_drive/` (Flutter app + FastAPI backend, 40 tickets in
`app/assets/bilets.json`). Ticket 6 question 13 in the mockup is copied from there verbatim.

## Commands

```bash
cd site
npm install          # Install dependencies
npm run dev          # Dev server at http://localhost:3000
npm run build        # Static export to site/out
npm run lint         # ESLint check
```

## Architecture

Single-page Next.js 14 (App Router) landing site for **Автошкола Фаворит** (Novosibirsk driving school).

**Stack:** Next.js 14 · React 18 · TypeScript · Tailwind CSS

### Deployment — read this before touching any asset URL

The site is a **static export** (`output: 'export'`) served from GitHub Pages under the
`/Favorit` sub-path (`next.config.js`). `next/image` is unoptimized.

Because of the sub-path, **every asset URL must be prefixed with `basePath`** from
`lib/basePath.ts` — plain `/images/foo.png` breaks on Pages while still working in `npm run dev`,
so this class of bug never shows up locally. Components already doing it: `Header`, `Footer`,
`Hero`, `CarsCarousel`, `IntroAnimation`.

`.github/workflows/deploy.yml` builds from `site/` (`working-directory: site`, artifact path
`site/out`) — keep those paths in sync if the layout changes again.

### File layout (inside `site/`)

- `app/page.tsx` — assembles all sections in order
- `app/layout.tsx` — root layout, fonts, SEO metadata
- `app/globals.css` — Tailwind directives + shared utilities (`.btn-primary`, `.btn-outline`, `.section-title`, `.section-subtitle`)
- `lib/basePath.ts` — the `/Favorit` prefix (see above)
- `components/` — one file per section
- `img/` — original source images, not served; `public/` is what ships

### Page composition (`app/page.tsx`, in order)

1. `IntroAnimation.tsx` — full-screen splash, self-dismisses after ~2.9 s. `'use client'`
2. `Header.tsx` — sticky, transparent over hero, white on scroll, mobile hamburger. `'use client'`
3. `Hero.tsx` — car/moto photo split with the logo overlaid, red and dark banner strips
4. `TrustBar.tsx` — licence / accreditation / instalment badges
5. `Prices.tsx` — Category B (65 000 ₽) and A (35 000 ₽) + contact modal with a form. `'use client'`
6. `CarsCarousel.tsx` — auto-playing carousel, pauses on hover, prev/next + dots + thumbnails. `'use client'`
7. `Autodrom.tsx` — dark section about the school's own autodrome in the city centre
8. `Reviews.tsx` — review cards with star ratings, "show all" toggle, links to VK. `'use client'`
9. `Branches.tsx` — 15 branch cards in a dark section, live search, each links to Yandex Maps. `'use client'`
10. `Footer.tsx` — CTA strip + 4-column footer with VK / Telegram / WhatsApp icons
11. `FloatingCTA.tsx` — floating call / WhatsApp / Telegram buttons. `'use client'`

Helpers, not sections:
- `AnimateIn.tsx` — IntersectionObserver reveal wrapper (`direction`, `delay` props). `'use client'`
- `Instructors.tsx` — **not imported anywhere.** Placeholder instructor data; either wire it into
  `page.tsx` with real people or delete it.

**Real contact data (do not change):**
- Phone: `+7 (383) 383-21-00`
- WhatsApp: `+79139168131`
- Telegram: `@driving_school_Favorit`
- VK: `vk.com/favoritavtoshkola`

## What still needs real content

- **Form submission** in `Prices.tsx` — line ~207 is an `alert()` stub; needs a real POST (backend or Formspree).
- **Reviews** in `Reviews.tsx` — replace with real customer reviews.
- **Branch addresses** in `Branches.tsx` — plausible Novosibirsk addresses are in place, but they
  have not been confirmed against the school's actual branch list.
- **Instructors** — see `Instructors.tsx` above.

## Design tokens

`tailwind.config.ts` extends:
- `primary` → `#D62027`, `primary-dark` → `#A8181E`, `primary-light` → `#E84047`
- `tertiary` → `#005ca6`
- `font-sans` → `--font-inter`, `font-headline` → `--font-manrope`

Note the mismatch: `app/layout.tsx` loads **Oswald** but exposes it under the CSS variable
`--font-manrope`, so `font-headline` renders Oswald. Rename both sides together if you touch it.

The brand red in the logo artwork is `#E31D24`, slightly different from Tailwind's `primary`.
