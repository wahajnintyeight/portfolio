# Muhammad Wahaj — Portfolio

Personal portfolio of Muhammad Wahaj, software developer (PHP, Node.js, Go, React).

**Live site:** https://portfolio.by-wahaj.workers.dev

## Stack

- React 19 + TypeScript, built with Vite
- [motion](https://motion.dev) for scroll reveals
- [lucide-react](https://lucide.dev) icons
- Plain CSS driven by design tokens, no CSS framework
- Type: Instrument Serif and Geist (Google Fonts)

## Run locally

**Prerequisites:** Node.js

1. Install dependencies:
   `npm install`
2. Start the dev server (http://localhost:3000):
   `npm run dev`

Other scripts:

- `npm run build` — production build into `dist/`
- `npm run preview` — serve the production build locally

## Project layout

| Path | Purpose |
| --- | --- |
| `constants.ts` | All site content: profile, experience, projects, skills, education |
| `tokens.css` | Design tokens: colour, type, spacing, motion |
| `index.css` | Page styles, built on the tokens |
| `App.tsx` | Page shell: nav, sections, footer |
| `components/` | Hero, project index, experience, stack, image viewer |
| `assets/` | Profile photo and project screenshots |

To update the portfolio, edit `constants.ts`; the layout reads everything from there.

## Design

Editorial layout designed with the [Hallmark](https://github.com/Nutlope/hallmark) skill. To restyle, change the values in `tokens.css`.
