# Akanksha & Tathagat — Wedding Invitation

A modern, mobile-first Hindu wedding invitation website with a subtle traditional touch. Built with Next.js, GSAP animations, and Lenis smooth scroll.

## Tech Stack

- **Next.js** (App Router, TypeScript)
- **Tailwind CSS v4**
- **GSAP** — animations (mandala bloom, scroll reveals, parallax)
- **Lenis** — smooth scrolling

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## How to Update the Wedding Details

All content you'll want to edit lives in **one file**: `src/data/events.ts`

### Event details (Haldi, Mehendi, Sangeet, Wedding, Reception)

Edit the `events` array. For each event, update:
- `name` — function name
- `tagline` — short phrase under the name
- `date` — e.g. `"15th December 2026"`
- `time` — e.g. `"11:00 AM onwards"`
- `venue` — venue name
- `address` — full address
- `mapLink` — paste a Google Maps share link (leave as `"#"` to hide the button)

You can add or remove events by editing the array — the timeline adapts automatically.

### Couple & family details

Edit the `weddingDetails` object:
- `weddingDate` — shown on the hero "Save the Date"
- `brideParents` / `groomParents` — parents' names for both families

The hero "Save the Date" text is in `src/components/Hero.tsx` (search for `Date Coming Soon`).

The main venue block is in `src/components/Venue.tsx`.

## Adding Background Music

1. Get a royalty-free Hindi/wedding instrumental (dhol/shehnai). Good sources:
   - [Pixabay Music](https://pixabay.com/music/) (free, no attribution required)
   - [YouTube Audio Library](https://www.youtube.com/audiolibrary)
2. Rename the file to `shehnai.mp3`
3. Place it at `public/audio/shehnai.mp3`

The floating play button (bottom-right) will play it on tap. It's muted by default per browser autoplay rules.

## Color Palette

Defined as CSS variables in `src/app/globals.css` (`:root`). Warm ivory base with antique gold and burgundy accents.

## Deploy

Push to GitHub and import the repo on [Vercel](https://vercel.com) — zero config. See the deploy notes shared during setup.
