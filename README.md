# Muhammad Wahaj — Portfolio

Personal portfolio of Muhammad Wahaj, software developer (PHP, Node.js, Go, React).

**Live site:** https://portfolio.by-wahaj.workers.dev

## Stack

- React 19 + TypeScript, built with Vite
- [lucide-react](https://lucide.dev) icons
- Plain CSS driven by design tokens, no CSS framework
- Self-hosted Outfit variable font (SIL Open Font License)
- Native disclosure panels and screenshot dialog, with reduced-motion support

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
| `index.css` | Shared base styles |
| `styles/` | Responsive navigation, portrait hero, project gallery, sections, and screenshot dialog |
| `DESIGN.md` | Current visual system and design guardrails |
| `App.tsx` | Page shell: nav, sections, footer |
| `components/` | Hero, project index, experience, stack, image viewer |
| `assets/` | Profile photo and project screenshots |

To update profile facts, projects, experience, and skills, edit `constants.ts`.

## Design

The midnight navy, slate, and ice blue palette follows the portrait's suit and tie. A compact portrait framed by braces introduces the developer. Projects use an interactive thumbnail navigator and large scenes composed from real screenshots. Experience uses selectable career chapters; the toolkit uses broad typographic rows. Original project and career details expand on demand. Mobile uses a floating bottom navigation dock. Design tokens and the portrait's display filter live in `tokens.css`; visual guidance lives in `DESIGN.md`.
