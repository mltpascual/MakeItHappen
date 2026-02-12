# Design System: MIH Productions — Cinematic Noir

> **Last Updated:** February 2026
> **Design Philosophy:** Film Noir meets modern editorial
> **Brand:** Make It Happen Productions (MIH Productions)

---

## Table of Contents

1. [Visual Theme & Atmosphere](#1-visual-theme--atmosphere)
2. [Color Palette & Roles](#2-color-palette--roles)
3. [Typography Rules](#3-typography-rules)
4. [Component Stylings](#4-component-stylings)
5. [Layout Principles](#5-layout-principles)
6. [Animation & Interaction Philosophy](#6-animation--interaction-philosophy)
7. [Signature Visual Motifs](#7-signature-visual-motifs)
8. [Responsive Behavior](#8-responsive-behavior)
9. [Asset Guidelines](#9-asset-guidelines)
10. [Page Structure & Section Order](#10-page-structure--section-order)
11. [Service Packages](#11-service-packages)
12. [Project Gallery](#12-project-gallery)
13. [Accessibility & Performance](#13-accessibility--performance)

---

## 1. Visual Theme & Atmosphere

The MIH Productions landing page embodies a **Cinematic Noir** aesthetic — a design philosophy rooted in the dramatic lighting of film sets, editorial title sequences, and the moody atmosphere of a professional production studio at night. The overall mood is **dark, immersive, and premium**, evoking the feeling of stepping into a high-end screening room.

The visual density is **intentionally sparse** — generous negative space allows each element to breathe, mimicking the deliberate framing of a cinematographer. Content is revealed through scroll-triggered animations that feel like scene transitions, reinforcing the cinematic metaphor throughout.

**Key atmospheric qualities:**
- Deep, inky blacks as the dominant canvas
- Warm amber accents that evoke tungsten studio lighting
- Cool teal secondary accents for cinematic color grading contrast (orange/teal)
- Letterbox framing elements as signature visual motifs
- Parallax depth on hero images creating a multi-plane camera effect
- A cinematic splash screen with logo reveal on page load

---

## 2. Color Palette & Roles

### Primary Colors

| Color Name | OKLCH Value | Hex Approx. | Functional Role |
|---|---|---|---|
| **Studio Amber** | `oklch(0.82 0.16 75)` | #D4A843 | Primary brand accent — CTAs, highlights, active states, section accents, and the signature "warm light" running through the entire design |
| **Amber Glow Light** | `oklch(0.88 0.12 75)` | #E0C070 | Hover states and lighter amber variations for subtle warmth |
| **Amber Deep** | `oklch(0.7 0.14 75)` | #B08830 | Darker amber for depth, pressed states, and secondary emphasis |

### Secondary / Accent Colors

| Color Name | OKLCH Value | Hex Approx. | Functional Role |
|---|---|---|---|
| **Cinematic Teal** | `oklch(0.75 0.12 195)` | #4DB8A4 | Secondary accent — used sparingly for contrast against amber, ambient particles, and visual variety |
| **Teal Light** | `oklch(0.82 0.1 195)` | #70D0BC | Lighter teal for subtle highlights |
| **Teal Deep** | `oklch(0.6 0.1 195)` | #2E8A78 | Darker teal for depth and shadow |

### Neutral / Background Colors

| Color Name | OKLCH Value | Hex Approx. | Functional Role |
|---|---|---|---|
| **Void Black** | `oklch(0.08 0.005 285)` | #0D0D10 | Primary background — the deep, inky canvas that everything sits upon |
| **Charcoal** | `oklch(0.12 0.005 285)` | #1A1A1F | Card backgrounds, elevated surfaces, lightbox detail panels |
| **Slate Dark** | `oklch(0.16 0.005 285)` | #242428 | Secondary surfaces, subtle elevation above charcoal |
| **Slate** | `oklch(0.2 0.005 285)` | #2E2E33 | Muted backgrounds, input fields, dividers |
| **Warm White** | `oklch(0.93 0.005 85)` | #EDECE8 | Primary text color — a slightly warm off-white that avoids the harshness of pure white against deep black |
| **Muted Warm** | `oklch(0.6 0.01 85)` | #908E88 | Secondary/muted text — descriptions, captions, supporting copy |

### Borders & Inputs

| Color Name | OKLCH Value | Functional Role |
|---|---|---|
| **Ghost Border** | `oklch(1 0 0 / 8%)` | Subtle white borders at 8% opacity — barely visible, creating structure without visual weight |
| **Input Border** | `oklch(1 0 0 / 12%)` | Slightly more visible for form inputs and interactive elements |

---

## 3. Typography Rules

### Font Families

| Role | Font Family | Character |
|---|---|---|
| **Display / Headlines** | **Bebas Neue** (sans-serif, condensed) | Bold, tall, and cinematic — evokes film title cards, movie posters, and editorial headlines. All-caps by nature. |
| **Body / UI Text** | **Source Sans 3** (sans-serif) | Clean, highly readable, and professional. Provides excellent contrast against the dramatic display font. |

### Typography Hierarchy

| Element | Font | Weight | Size Range | Letter Spacing | Notes |
|---|---|---|---|---|---|
| **H1 (Hero)** | Bebas Neue | 400 | 5xl–8xl (48–96px) | `tracking-wider` (0.05em) | Largest text on the page, used only in the hero section |
| **H2 (Section)** | Bebas Neue | 400 | 4xl–6xl (36–60px) | `tracking-wider` | Section titles — always uppercase |
| **H3 (Card/Item)** | Bebas Neue | 400 | xl–2xl (20–24px) | `tracking-wider` | Card titles, project names, service names |
| **Section Label** | Source Sans 3 | 400 | xs (12px) | `tracking-[0.3em]` | Uppercase micro-labels above section titles (e.g., "OUR SERVICES") |
| **Body Text** | Source Sans 3 | 400 | base (16px) | Normal | Primary paragraph text with `leading-relaxed` line height |
| **Small / Caption** | Source Sans 3 | 400 | xs–sm (12–14px) | `tracking-wider` | Metadata, tags, timestamps |
| **Button Text** | Source Sans 3 | 600 | xs (12px) | `tracking-[0.15em]` | Uppercase, semi-bold for CTAs |

### Typography Principles
- Headlines are **always uppercase** (Bebas Neue is inherently uppercase)
- Body text uses **sentence case** for readability
- Micro-labels use **uppercase with wide letter-spacing** (0.3em) for a refined, editorial feel
- Line heights are generous (`leading-relaxed`) to maintain readability against dark backgrounds
- Text color alternates between **Warm White** for primary content and **Muted Warm** for supporting text

---

## 4. Component Stylings

### Buttons

| Variant | Shape | Background | Text | Border | Hover State |
|---|---|---|---|---|---|
| **Primary CTA** | Pill-shaped (`rounded-full`) | Studio Amber solid | Void Black (dark on amber) | None | Slight brightness increase, subtle scale |
| **Secondary / Outline** | Pill-shaped (`rounded-full`) | Transparent | Warm White | Ghost Border (white 12%) | Border transitions to amber, text to amber |
| **Ghost** | Pill-shaped (`rounded-full`) | Transparent | Muted Warm | None | Text brightens to Warm White |
| **Icon Button** | Circle (`rounded-full`) | Black at 60% opacity | White | None | Background transitions to Studio Amber |

### Cards / Containers

| Element | Corner Roundness | Background | Shadow | Border |
|---|---|---|---|---|
| **Service Card** | Sharp edges (`rounded-sm`, 2px) | Charcoal with subtle gradient | None — depth via background color | Top accent line (amber, 2px) on hover |
| **Package Card** | Sharp edges (`rounded-sm`) | Charcoal | Amber glow on "Popular" variant | Ghost Border (white 8%) |
| **Gallery Card** | Sharp edges (`rounded-sm`) | Image-based with gradient overlay | None | Top amber accent line on hover (scale-x animation) |
| **FAQ Item** | Sharp edges | Transparent → subtle amber glow on open | Soft amber shadow when expanded | Bottom border (white 8%) |
| **Lightbox Modal** | Sharp edges (`rounded-sm`) | Void Black at 95% + backdrop blur | None | None |

### Inputs / Forms

| Element | Shape | Background | Border | Focus State |
|---|---|---|---|---|
| **Text Input** | Sharp edges (`rounded-sm`) | Transparent | Bottom border only (white 20%) | Border transitions to Studio Amber, subtle amber glow |
| **Textarea** | Sharp edges (`rounded-sm`) | Transparent | Bottom border only (white 20%) | Same as text input |
| **Filter Tab (Active)** | Pill-shaped (`rounded-full`) | Studio Amber | Amber border | N/A |
| **Filter Tab (Inactive)** | Pill-shaped (`rounded-full`) | Transparent | Ghost Border | Border brightens, text brightens |

### Navigation

| Element | Style | Notes |
|---|---|---|
| **Desktop Navbar** | Fixed top, transparent → Void Black on scroll | Logo left, links center, CTA right. Backdrop blur when scrolled. |
| **Mobile Menu** | Full-screen overlay | Slide-in from right. Large cinematic typography. Staggered entrance animations. |
| **Nav Links** | Source Sans 3, xs, uppercase, wide tracking | Hover: amber underline from left (scale-x animation) |

---

## 5. Layout Principles

### Spacing System

| Context | Value | Usage |
|---|---|---|
| **Section Padding** | `py-24 md:py-32` (96px / 128px) | Generous vertical breathing room between major sections |
| **Container Max Width** | 1280px | Content constrained on large screens |
| **Container Padding** | 16px → 24px → 32px | Responsive horizontal padding (mobile → tablet → desktop) |
| **Card Gap** | 24px (`gap-6`) | Consistent spacing between grid items |
| **Element Spacing** | 16px–32px | Internal component spacing follows 8px grid |

### Grid & Layout Patterns

| Pattern | Usage | Notes |
|---|---|---|
| **Asymmetric Split** | Hero, About, FAQ | Left column (40%) for text, right column (60%) for media/content. Creates editorial tension. |
| **3-Column Grid** | Services, Gallery, Why Choose Us | `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` — responsive breakdown |
| **Full-Bleed Panels** | Hero, Marquee, Client Logos | Edge-to-edge sections that break out of the container for cinematic scale |
| **Sticky Sidebar** | FAQ section | Left column stays pinned while right column (accordion) scrolls |
| **Centered Stack** | Process, Testimonials | Centered content with constrained max-width for focused reading |

### Whitespace Strategy
- Whitespace is treated as an **active design ingredient**, not empty space
- Sections are separated by generous padding (128px on desktop) to create a "scene-by-scene" reading experience
- Within sections, elements follow a clear hierarchy with decreasing spacing: section title → subtitle → content → details
- The marquee strips between sections act as visual "scene breaks"

---

## 6. Animation & Interaction Philosophy

### Scroll Animations

| Animation | Trigger | Duration | Easing |
|---|---|---|---|
| **Fade Up Reveal** | Element enters viewport (10% threshold) | 700–800ms | `ease` (CSS) |
| **Staggered Reveal** | Multiple items entering viewport | 700ms per item, 100ms stagger delay | `ease` |
| **Parallax Scroll** | Continuous scroll position | Realtime (requestAnimationFrame) | Linear |

### Hover Interactions

| Element | Effect | Duration |
|---|---|---|
| **Gallery Cards** | Image scales to 110%, overlay darkens, content slides up, amber top accent scales in | 500–700ms |
| **Service Cards** | Subtle lift, amber top accent appears | 300ms |
| **Buttons** | Background/border color transition | 300ms |
| **Nav Links** | Amber underline scales from left | 300ms |

### Special Animations

| Animation | Description | Duration |
|---|---|---|
| **Splash Screen** | Logo fade-in → text stagger → screen lifts away | ~3.5s total |
| **Marquee Scroll** | Continuous horizontal scroll (two directions) | 40s loop |
| **Client Logo Scroll** | Infinite horizontal scroll with fade edges | 30s loop |
| **FAQ Accordion** | Height expansion with opacity fade, chevron rotation | 400ms, cubic-bezier |
| **Hamburger Menu** | Bars morph to X, full-screen overlay slides in, links stagger | 300ms + 50ms stagger |

### Motion Principles
- All animations respect `prefers-reduced-motion` — reduced to instant transitions
- Scroll-triggered animations fire **once** (no re-triggering on scroll back)
- Hover effects use `transition-all` with consistent 300ms duration for UI elements
- Parallax effects are subtle (0.1–0.3 speed factor) to avoid motion sickness
- The overall animation philosophy is **"cinematic reveal"** — content appears as if a camera is slowly panning across a scene

---

## 7. Signature Visual Motifs

### Letterbox Bars
Thin horizontal amber lines (2px, 30% opacity) at the top and bottom of key sections, evoking the widescreen letterbox format of cinema. Applied via the `.letterbox` CSS class.

### Amber Accent Lines
Short horizontal bars (48px wide, 2px tall) in Studio Amber placed below section titles. These act as visual "underscores" that punctuate the editorial typography.

### Section Micro-Labels
Uppercase, widely-spaced (0.3em) small text in Studio Amber above every section title (e.g., "OUR SERVICES", "COMMON QUESTIONS"). These create a consistent rhythm and help with wayfinding.

### Ambient Glow
Subtle box-shadow effects (`.glow-amber`, `.glow-teal`) that create a soft light bloom around featured elements, mimicking the way practical lights bleed in cinematic photography.

### Diamond Dividers
Small rotated squares (◆) used as separators in the client logo bar and marquee strips, adding a refined editorial touch.

---

## 8. Responsive Behavior

| Breakpoint | Width | Key Changes |
|---|---|---|
| **Mobile** | < 640px | Single column layouts, hamburger menu, reduced typography scale, stacked sections |
| **Tablet** | 640px–1023px | 2-column grids, slightly larger typography, expanded padding |
| **Desktop** | 1024px+ | Full 3-column grids, max-width container (1280px), all animations active |

### Mobile-Specific Adjustments
- Navigation collapses to a full-screen hamburger menu with large cinematic typography
- Hero text scales down but maintains the dramatic Bebas Neue display
- Gallery grid becomes single-column with maintained aspect ratios
- FAQ switches from side-by-side to stacked layout
- Parallax effects are reduced on mobile for performance
- Service package cards stack vertically with the "Popular" card highlighted

---

## 9. Asset Guidelines

### Image Treatment
- All images use a **dark, cinematic color grade** — deep shadows, warm highlights, controlled contrast
- Gallery images have gradient overlays (`from-black/90 via-black/30 to-transparent`) to ensure text readability
- Hero images use multi-layer parallax with different depth speeds
- All images use `object-cover` for consistent framing regardless of aspect ratio
- Images are hosted on CDN (not stored locally in the project directory)

### Logo Usage
- The MIH logo (geometric sans-serif "MIH" with camera aperture integrated into the H) is used at approximately 40px height in the navbar
- A smaller version appears in the footer
- The logo should always appear on dark backgrounds with sufficient contrast
- The splash screen features a larger version with the amber accent line animation
- Logo file: transparent PNG with white text on transparent background

### Video Embeds
- YouTube videos are embedded via iframe with `autoplay=1&rel=0&modestbranding=1` parameters
- Videos are presented in 16:9 aspect ratio containers
- A click-to-play thumbnail pattern is used (image + play button overlay → iframe swap on click)
- Each gallery project links to its corresponding YouTube video

---

## 10. Page Structure & Section Order

The landing page follows a deliberate cinematic narrative flow:

| Order | Section | Purpose |
|---|---|---|
| 1 | **Splash Screen** | Cinematic logo reveal — sets the tone |
| 2 | **Navbar** | Fixed navigation with logo, links, and CTA |
| 3 | **Hero** | Full-bleed cinematic opening with parallax layers |
| 4 | **Marquee (Amber)** | Service keywords scrolling left — visual "scene break" |
| 5 | **Services** | Core services overview + 3 production packages (Starter, Professional, Premium) |
| 6 | **Process** | 5-step visual timeline (Discovery → Delivery) |
| 7 | **Showreel** | Main YouTube video embed + secondary video thumbnails |
| 8 | **Marquee (Teal)** | Brand values scrolling right — visual "scene break" |
| 9 | **Project Gallery** | Filterable grid of 5 showcase projects with lightbox + YouTube embeds |
| 10 | **Work** | Portfolio highlights with project cards |
| 11 | **Client Logos** | Infinite-scroll brand logo bar (MichaelAngelo, Ihaw On The Go, Hublot, GMA, Bounty Fresh, Smart) |
| 12 | **Why Choose Us** | 6 differentiator cards with icons |
| 13 | **Testimonials** | Auto-rotating client quote carousel |
| 14 | **About** | Company story with stats and parallax image |
| 15 | **FAQ** | 7-question accordion with sticky left column |
| 16 | **Contact** | Contact form + placeholder contact details + social links |
| 17 | **Footer** | Logo, navigation links, social icons, copyright |

---

## 11. Service Packages

Three production tiers are presented in the Services section:

| Package | Target | Key Features |
|---|---|---|
| **Starter** | Small businesses, startups | Single-camera setup, basic editing, 1 revision round, social media format |
| **Professional** (Most Popular) | Growing brands | Multi-camera, color grading, motion graphics, 3 revision rounds, licensed music |
| **Premium** | Enterprise clients | Full crew, aerial/drone, advanced VFX, unlimited revisions, multi-platform delivery |

Each package card includes a feature checklist, a "Get Started" CTA that scrolls to the contact form, and the Professional tier is highlighted with a "Most Popular" badge and amber glow.

---

## 12. Project Gallery

The gallery showcases 5 categories of work with filterable tabs:

| Category | Project Title | YouTube Video |
|---|---|---|
| **Corporate** | Corporate Brand Film | Company showreel |
| **Commercial** | Food Product Commercial | Ihaw On The Go ad |
| **Branding** | Luxury Product Showcase | Hublot watch film |
| **Social Media** | Social Media Campaign | LILY short film |
| **Events** | Live Event Coverage | MIH Productions reel |

Each gallery item opens a lightbox modal with project details, description, and an embedded YouTube video player with click-to-play functionality.

---

## 13. Accessibility & Performance

### Accessibility
- All animations respect `prefers-reduced-motion` media query
- Focus rings are visible on all interactive elements
- Semantic HTML structure with proper heading hierarchy
- Alt text on all images
- Keyboard-navigable hamburger menu with Escape key dismissal
- Body scroll lock when mobile menu or lightbox is open
- Sufficient color contrast between text and backgrounds (WCAG AA)

### Performance
- Images are served from CDN with optimized delivery
- YouTube videos use lazy loading (iframe only loads on click)
- Parallax effects use `requestAnimationFrame` for smooth 60fps rendering
- CSS animations use `transform` and `opacity` for GPU-accelerated rendering
- Scroll-triggered animations use `IntersectionObserver` for efficient detection
- Splash screen unmounts from DOM after completion to free resources
