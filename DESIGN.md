---
name: Wahaj Portfolio
description: A friendly gallery of developer tools and web products.
colors:
  background: "#0d1422"
  surface: "#18263b"
  slate: "#344b68"
  accent: "#91b6e6"
  foreground: "#e3ebf5"
typography:
  display:
    fontFamily: "Outfit, sans-serif"
    fontSize: "clamp(3.25rem, 6.7vw, 6rem)"
    fontWeight: 600
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Outfit, sans-serif"
    fontSize: "clamp(2rem, 4vw, 3.5rem)"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Outfit, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  image: "14px"
  scene: "36px"
  thumbnail: "16px"
  dock: "24px"
  pill: "99px"
spacing:
  gutter: "clamp(1rem, 4.5vw, 4.5rem)"
components:
  contact-button:
    backgroundColor: "{colors.foreground}"
    textColor: "{colors.background}"
    rounded: "{rounded.pill}"
    padding: "0.55rem 1.3rem"
  mobile-navigation:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.dock}"
    padding: "0.35rem"
---

# Design System: Wahaj Portfolio

## Overview

A modern, friendly developer portfolio. A compact cutout portrait framed by curly braces introduces the person; selectable project scenes and career chapters tell the story. Rounded typography and a midnight navy palette draw from the user's portrait.

Keep the interface quick to scan. Names and brief project purposes are visible; technical descriptions and career achievements expand when requested.

## Colors

The user requested a palette that matches the portrait, superseding the earlier plum palette. Midnight navy carries the page; lighter navy supports navigation and small controls. Slate blue marks the active mobile item. Cool off-white carries readable text and primary actions; muted ice blue echoes the tie and pocket square.

Secondary text mixes the foreground with the surface color. The portrait uses a display filter of brightness(0.86) contrast(1.04) saturate(0.94) to soften its highlights while preserving the original transparent image.

## Typography

Use self-hosted Outfit throughout. Medium headings, relaxed body text, and short sentence-case labels keep the tone friendly. Project descriptions stay within 68 characters per line where space permits.

## Layout

The page has a maximum width of 96rem and fluid side gutters. A restrained wordmark header precedes the introduction. Desktop pairs the short introduction with a compact portrait and proportional braces. The portrait frame is capped at 18rem wide, reflecting the requested reduction from the original concept.

Projects use one large selectable scene rather than an endless screenshot grid. A thumbnail navigator exposes all seven projects; the selected scene pairs short project context with actual overlapping screenshots. A portrait-oriented image treatment serves the mobile app project. Previous and Next buttons, keyboard navigation, and project anchor links support browsing.

Experience uses two employer chapters, a prominent company identity, and three concise work highlights. Full original achievements expand on demand. Education closes the section in a quiet horizontal row. The toolkit uses broad typographic rows instead of small columns or chips.

Below 48rem, the introduction, portrait, and work action stack in that order; the portrait frame becomes 12rem by 13.25rem. Project thumbnails scroll horizontally, the scene stacks context and imagery, and the career chapter content becomes one column. Section navigation becomes a fixed bottom dock. Reserve space below the page for the dock and device safe area.

## Elevation & Depth

Project scenes use a single borderless tonal stage. Overlapping real screenshots have soft offset shadows and small static rotations, making the artifact feel tangible. Thumbnail selectors, career chapters, and toolkit rows remain flat. The mobile dock has a soft, offset shadow so it remains distinct while floating above the page.

## Shapes

Rounded screenshots, circular paging controls, and pill actions provide the softer form language. The project stage has generous corners and no outer stroke. Thin, muted slate rules separate sections and toolkit categories, aligned with the content gutters and paired with generous vertical spacing. Avoid dashboard-style grids of framed panels.

## Components

- **Hero:** bold two-line introduction, role, four core technologies, compact portrait, and one Explore my work action. Curly braces frame the original transparent cutout. No command appears in the hero.
- **Project showcase:** thumbnail cards select one active scene. It contains the project name, short purpose, three key technologies, screenshot controls, a real live-site link when available, and a What I built disclosure. Clicking either screenshot opens the original image viewer at the correct image.
- **Navigation:** desktop pills become icon-and-label buttons in the mobile dock. Preserve the visible active state and keyboard focus.
- **Career chapters:** employer tabs expose the selected role, three short highlights, and an optional disclosure with the full original achievements. Arrow keys, Home, and End work on both project and career tabs.
- **Toolkit:** broad category rows with readable, wrapping technology names; no nested cards.
- **Screenshot viewer:** native modal dialog with Close, Previous, Next, Escape, and arrow-key controls. Protect focus while it is open.
- **Contact:** a large Say hello heading, direct email, and profile links; a quiet closing brace echoes the introduction.
- **Motion:** one brief brace reveal, a short transition when changing project scenes, responsive control feedback, and disclosure reveals; honor reduced-motion settings.

## Do's and Don'ts

- **Do** lead with real projects and preserve factual content.
- **Do** use the exact pinned palette and friendly sans-serif type.
- **Do** keep detailed reading optional.
- **Don't** add opening statistics or a resume summary.
- **Don't** wrap the page in outlined panels or introduce a serious dashboard layout.
- **Don't** replace real screenshots with generated product interfaces.
