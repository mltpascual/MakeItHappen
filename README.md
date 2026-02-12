# MIH Productions — Landing Page

A cinematic, dark-themed landing page for **Make It Happen Productions (MIH Productions)**, a multimedia production company based in Parañaque City, Philippines. The site showcases their video production, branding, social media content, and TV commercial services through an immersive, film-inspired design.

## Key Features

- Cinematic splash screen with animated logo reveal
- Multi-layer parallax hero with scroll-driven depth
- Filterable project gallery with YouTube video lightbox
- Service packages with detailed feature comparisons (Starter, Professional, Premium)
- 5-step production process timeline
- YouTube showreel integration with click-to-play thumbnails
- Auto-rotating client testimonials carousel
- Infinite-scroll client logo bar
- FAQ accordion with smooth expand/collapse animations
- Responsive mobile hamburger menu with full-screen overlay
- SEO meta tags, Open Graph, Twitter Cards, and JSON-LD structured data
- Smooth scroll behavior and scroll-triggered reveal animations
- `prefers-reduced-motion` accessibility support

---

## Table of Contents

- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Architecture](#architecture)
- [Page Sections](#page-sections)
- [Design System](#design-system)
- [Environment Variables](#environment-variables)
- [Building for Production](#building-for-production)
- [Deployment](#deployment)
- [Customization Guide](#customization-guide)
- [Troubleshooting](#troubleshooting)
- [License](#license)

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| **React** | 19.2+ | UI framework |
| **TypeScript** | 5.6 | Type safety |
| **Vite** | 7.1+ | Build tool and dev server |
| **Tailwind CSS** | 4.1+ | Utility-first styling |
| **shadcn/ui** | Latest | Pre-built accessible UI components |
| **Framer Motion** | 12.x | Animation library |
| **Radix UI** | Latest | Headless accessible primitives (Accordion, Dialog, etc.) |
| **Wouter** | 3.x | Lightweight client-side routing |
| **Lucide React** | 0.453+ | Icon library |
| **pnpm** | 10.4+ | Package manager |

---

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 22.x or higher — [Download](https://nodejs.org/)
- **pnpm** 10.x or higher — Install via `npm install -g pnpm`
- **Git** — [Download](https://git-scm.com/)

Verify your installation:

```bash
node --version    # Should output v22.x.x or higher
pnpm --version    # Should output 10.x.x or higher
git --version     # Should output git version 2.x.x
```

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/mihp-landing.git
cd mihp-landing
```

### 2. Install Dependencies

```bash
pnpm install
```

This installs all required packages including React, Tailwind CSS, Vite, and shadcn/ui components.

### 3. Start the Development Server

```bash
pnpm dev
```

The development server starts at [http://localhost:3000](http://localhost:3000) with hot module replacement (HMR) enabled. Changes to any file will instantly reflect in the browser.

### 4. Open in Browser

Navigate to [http://localhost:3000](http://localhost:3000). You should see the MIH Productions splash screen followed by the full landing page.

---

## Project Structure

```
mihp-landing/
├── client/                          # Frontend application
│   ├── index.html                   # HTML entry point (SEO meta tags, fonts)
│   ├── public/                      # Static assets served at root
│   └── src/
│       ├── App.tsx                  # Root component with routing and theme
│       ├── main.tsx                 # React entry point
│       ├── index.css                # Global styles, Tailwind config, CSS variables
│       ├── pages/
│       │   ├── Home.tsx             # Main landing page (assembles all sections)
│       │   └── NotFound.tsx         # 404 page
│       ├── components/
│       │   ├── Navbar.tsx           # Fixed navigation with mobile hamburger menu
│       │   ├── Hero.tsx             # Multi-layer parallax hero section
│       │   ├── Marquee.tsx          # Infinite-scroll text ticker
│       │   ├── Services.tsx         # Service cards + production packages
│       │   ├── Process.tsx          # 5-step production timeline
│       │   ├── Showreel.tsx         # YouTube video embed section
│       │   ├── ProjectGallery.tsx   # Filterable gallery with lightbox
│       │   ├── Work.tsx             # Portfolio highlights
│       │   ├── ClientLogos.tsx      # Infinite-scroll client logo bar
│       │   ├── WhyChooseUs.tsx      # Differentiator cards
│       │   ├── Testimonials.tsx     # Auto-rotating quote carousel
│       │   ├── About.tsx            # Company story with stats
│       │   ├── FAQ.tsx              # Accordion FAQ section
│       │   ├── Contact.tsx          # Contact form + details
│       │   ├── Footer.tsx           # Footer with links and social icons
│       │   ├── SplashScreen.tsx     # Cinematic loading animation
│       │   └── ui/                  # shadcn/ui components (accordion, button, etc.)
│       ├── hooks/
│       │   ├── useScrollReveal.ts   # Scroll-triggered animation hook
│       │   ├── useParallax.ts       # Scroll parallax hook
│       │   └── use3DParallax.ts     # Multi-layer parallax hook
│       ├── contexts/
│       │   └── ThemeContext.tsx      # Dark/light theme provider
│       └── lib/
│           └── utils.ts             # Utility functions (cn, etc.)
├── server/                          # Minimal Express server (production serving)
│   └── index.ts                     # Static file serving + SPA fallback
├── shared/                          # Shared types and constants
│   └── const.ts                     # Shared constants
├── DESIGN.md                        # Complete design system documentation
├── vercel.json                      # Vercel deployment configuration
├── vite.config.ts                   # Vite build configuration
├── tsconfig.json                    # TypeScript configuration
├── package.json                     # Dependencies and scripts
└── .gitignore                       # Git ignore rules
```

---

## Architecture

### Request Lifecycle

This is a **static single-page application (SPA)**. The architecture is straightforward:

```
Browser Request → Vite Dev Server (dev) / Static Files (prod)
    → index.html
    → main.tsx (React entry)
    → App.tsx (ThemeProvider + Router)
    → Home.tsx (Section composition)
    → Individual Section Components
```

### Data Flow

All content is **statically defined** within the components themselves. There is no backend API, database, or CMS. Content updates require code changes.

```
Static Data (in components) → React State → DOM Rendering
                                ↓
                    Scroll Events → Parallax/Reveal Animations
                    Mouse Events → Hover Interactions
                    Click Events → Lightbox/Accordion/Menu Toggle
```

### Key Design Patterns

| Pattern | Usage | Implementation |
|---|---|---|
| **Custom Hooks** | Scroll animations, parallax | `useScrollReveal`, `useParallax`, `use3DParallax` |
| **Component Composition** | Page assembly | `Home.tsx` composes 15+ section components |
| **CSS Variables** | Theming | OKLCH color tokens in `index.css` |
| **Intersection Observer** | Scroll-triggered reveals | `useScrollReveal` hook |
| **RequestAnimationFrame** | Smooth parallax | `useParallax` hook |
| **Conditional Rendering** | Splash screen lifecycle | State-based mount/unmount |

---

## Page Sections

The landing page follows a deliberate cinematic narrative flow:

| # | Section | Component | Description |
|---|---|---|---|
| 1 | Splash Screen | `SplashScreen.tsx` | Cinematic logo reveal with staggered text animation |
| 2 | Navigation | `Navbar.tsx` | Fixed top nav with scroll-aware background + mobile hamburger |
| 3 | Hero | `Hero.tsx` | Full-bleed parallax hero with 3 image layers |
| 4 | Marquee (Amber) | `Marquee.tsx` | Service keywords scrolling left |
| 5 | Services | `Services.tsx` | 4 service cards + 3 production packages |
| 6 | Process | `Process.tsx` | 5-step timeline (Discovery → Delivery) |
| 7 | Showreel | `Showreel.tsx` | Main YouTube embed + secondary thumbnails |
| 8 | Marquee (Teal) | `Marquee.tsx` | Brand values scrolling right |
| 9 | Project Gallery | `ProjectGallery.tsx` | Filterable grid with lightbox + YouTube embeds |
| 10 | Work | `Work.tsx` | Portfolio highlight cards |
| 11 | Client Logos | `ClientLogos.tsx` | Infinite-scroll brand logo bar |
| 12 | Why Choose Us | `WhyChooseUs.tsx` | 6 differentiator cards |
| 13 | Testimonials | `Testimonials.tsx` | Auto-rotating client quote carousel |
| 14 | About | `About.tsx` | Company story with stats + parallax image |
| 15 | FAQ | `FAQ.tsx` | 7-question accordion with sticky sidebar |
| 16 | Contact | `Contact.tsx` | Contact form + details + social links |
| 17 | Footer | `Footer.tsx` | Logo, nav links, social icons, copyright |

---

## Design System

The complete design system is documented in [`DESIGN.md`](./DESIGN.md). Key highlights:

### Color Palette

| Role | Color | Hex |
|---|---|---|
| Primary Accent | Studio Amber | #D4A843 |
| Secondary Accent | Cinematic Teal | #4DB8A4 |
| Background | Void Black | #0D0D10 |
| Primary Text | Warm White | #EDECE8 |
| Muted Text | Muted Warm | #908E88 |

### Typography

| Role | Font | Character |
|---|---|---|
| Headlines | **Bebas Neue** | Condensed, cinematic, all-caps |
| Body Text | **Source Sans 3** | Clean, readable, professional |

### Button Style

All buttons use **pill-shaped** (`rounded-full`) styling. Primary CTAs use Studio Amber background with dark text; secondary buttons use transparent background with white border.

For the full design system including component styles, animation guidelines, layout principles, and responsive behavior, see [`DESIGN.md`](./DESIGN.md).

---

## Environment Variables

This project uses minimal environment variables. For local development, no `.env` file is required.

| Variable | Required | Description |
|---|---|---|
| `VITE_APP_TITLE` | No | Override the app title (defaults to "Make It Happen Productions") |

For Vercel deployment, environment variables are configured in the Vercel dashboard.

---

## Building for Production

### Build the Project

```bash
pnpm build
```

This runs `vite build` and outputs optimized static files to `dist/public/`. The build process:

1. Compiles TypeScript
2. Bundles and tree-shakes JavaScript
3. Processes and optimizes CSS (Tailwind purging)
4. Generates hashed asset filenames for cache busting
5. Outputs everything to `dist/public/`

### Preview the Production Build

```bash
pnpm preview
```

This serves the production build locally at [http://localhost:4173](http://localhost:4173) for verification before deployment.

### Type Checking

```bash
pnpm check
```

Runs TypeScript compiler in `--noEmit` mode to check for type errors without generating output files.

### Code Formatting

```bash
pnpm format
```

Formats all project files using Prettier.

---

## Deployment

### Vercel (Recommended)

This project includes a `vercel.json` configuration file optimized for Vercel deployment.

#### Via GitHub Integration (Recommended)

1. Push the project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click **"Add New Project"**
4. Import your GitHub repository
5. Vercel auto-detects the Vite framework and applies settings from `vercel.json`
6. Click **"Deploy"**

Vercel will automatically:
- Install dependencies with `pnpm install`
- Build with `pnpm build`
- Serve from `dist/public/`
- Handle SPA routing via the rewrite rule

#### Via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

#### Vercel Configuration

The included `vercel.json` configures:

```json
{
  "buildCommand": "pnpm build",
  "outputDirectory": "dist/public",
  "installCommand": "pnpm install",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

The `rewrites` rule ensures client-side routing works correctly — all paths serve `index.html`, and React Router handles navigation.

### Netlify

Create a `netlify.toml` in the project root:

```toml
[build]
  command = "pnpm build"
  publish = "dist/public"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Static Hosting (Nginx, Apache, etc.)

Build the project and serve the `dist/public/` directory. Ensure your server is configured to serve `index.html` for all routes (SPA fallback).

**Nginx example:**

```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /var/www/mihp-landing/dist/public;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

---

## Customization Guide

### Updating Content

All content is defined directly in the component files. Here's where to find each type of content:

| Content Type | File | What to Edit |
|---|---|---|
| Hero text | `client/src/components/Hero.tsx` | Headline, subtitle, CTA text |
| Services | `client/src/components/Services.tsx` | Service cards, package features and pricing |
| Process steps | `client/src/components/Process.tsx` | Step titles and descriptions |
| Gallery projects | `client/src/components/ProjectGallery.tsx` | Project data array (images, descriptions, YouTube IDs) |
| Portfolio work | `client/src/components/Work.tsx` | Project cards |
| Client logos | `client/src/components/ClientLogos.tsx` | Brand names in the logo array |
| Testimonials | `client/src/components/Testimonials.tsx` | Client quotes, names, companies |
| About section | `client/src/components/About.tsx` | Company description, stats |
| FAQ questions | `client/src/components/FAQ.tsx` | Question/answer pairs |
| Contact details | `client/src/components/Contact.tsx` | Address, phone, email (currently placeholders) |
| Social links | `client/src/components/Footer.tsx` | Social media URLs |
| SEO meta tags | `client/index.html` | Title, description, OG tags, canonical URL |

### Changing Colors

Edit the CSS variables in `client/src/index.css` under the `.dark` selector. All colors use OKLCH format for Tailwind CSS 4 compatibility.

### Changing Fonts

1. Update the Google Fonts link in `client/index.html`
2. Update the `--font-display` and `--font-body` variables in `client/src/index.css`
3. Update any hardcoded `font-['Bebas_Neue']` or `font-['Source_Sans_3']` references in components

### Adding New Sections

1. Create a new component in `client/src/components/YourSection.tsx`
2. Import and add it to `client/src/pages/Home.tsx` in the desired position
3. Follow the existing pattern: section padding, micro-label, heading, content
4. Use `useScrollReveal` hook for scroll-triggered entrance animations

### Replacing the Logo

1. Upload your new logo PNG to a CDN
2. Update the logo `src` URL in `Navbar.tsx`, `Footer.tsx`, and `SplashScreen.tsx`
3. Update the logo URL in the JSON-LD structured data in `client/index.html`

---

## Troubleshooting

### Development Server Won't Start

**Error:** `Port 3000 is already in use`

**Solution:**
```bash
# Find and kill the process using port 3000
lsof -i :3000
kill -9 <PID>

# Or start on a different port
pnpm dev -- --port 3001
```

### Styles Not Updating

**Error:** Tailwind classes not applying or stale styles

**Solution:**
```bash
# Clear Vite cache
rm -rf node_modules/.vite

# Restart dev server
pnpm dev
```

### TypeScript Errors

**Error:** Type errors during build

**Solution:**
```bash
# Check for type errors
pnpm check

# If errors persist, try reinstalling dependencies
rm -rf node_modules
pnpm install
```

### Build Fails on Vercel

**Error:** Build timeout or memory issues

**Solution:**
1. Ensure `vercel.json` is in the project root
2. Check that `outputDirectory` is set to `dist/public`
3. Verify all image assets use CDN URLs (not local paths)
4. Check the Vercel build logs for specific error messages

### YouTube Videos Not Loading

**Issue:** Embedded videos show a blank frame

**Solution:**
1. Verify the YouTube video IDs are correct
2. Check that the videos are set to "Public" or "Unlisted" on YouTube
3. Some ad blockers may block YouTube embeds — test in an incognito window

### Images Not Displaying

**Issue:** Broken image links

**Solution:**
1. All images should use CDN URLs (not local file paths)
2. Verify the CDN URLs are accessible by opening them directly in a browser
3. Check the browser console for CORS or 404 errors

---

## License

MIT License. See [LICENSE](./LICENSE) for details.
