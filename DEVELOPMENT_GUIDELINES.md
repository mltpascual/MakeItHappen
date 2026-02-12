# Development Guidelines — MIH Productions Landing Page

> **Purpose**: This document synthesizes coding standards, UI/UX guidelines, security policies, and testing strategies for the MIH Productions landing page project. All developers and AI agents should refer to this file throughout the development lifecycle.

---

## Table of Contents

1. [UI/UX & Frontend Design](#1-uiux--frontend-design)
2. [Code Quality & Best Practices](#2-code-quality--best-practices)
3. [Security](#3-security)
4. [Testing](#4-testing)
5. [Implementation Checklist](#5-implementation-checklist)

---

## 1. UI/UX & Frontend Design

### 1.1 Design Philosophy

This project follows a **Cinematic Noir** aesthetic — a dark, editorial design inspired by film production and motion picture aesthetics. Every design decision must reinforce this identity.

**Core Principles:**
- **Intentional Aesthetic Direction**: Every component must serve the cinematic narrative. No generic layouts, no default patterns.
- **Visual Memorability**: The site should be recognizable even without the logo — through its use of amber/teal accents, Bebas Neue typography, and asymmetric compositions.
- **Cohesive Restraint**: No random decoration. Every flourish must serve the aesthetic thesis.
- **Technical Correctness**: All code must be production-ready, accessible, and performant.

### 1.2 Typography Rules

| Element | Font | Weight | Usage |
|---------|------|--------|-------|
| Headings (H1-H3) | Bebas Neue | 400 | Section titles, hero text, CTAs |
| Body Text | Source Sans 3 | 300-400 | Paragraphs, descriptions, form labels |
| Accent Text | Source Sans 3 | 600 | Subtitles, labels, navigation |

**Rules:**
- Never use system fonts (Inter, Roboto, Arial) in this project.
- Maintain clear typographic hierarchy through scale, weight, and letter-spacing.
- Use `letter-spacing: 0.2em` on uppercase labels for cinematic feel.
- Minimum body text size: 16px on mobile, 18px on desktop.
- Line height: 1.5–1.75 for body text; 1.0–1.1 for display headings.
- Line length: Limit to 65–75 characters per line for readability.

### 1.3 Color System

All colors use OKLCH format in CSS custom properties defined in `client/src/index.css`.

| Role | Color | OKLCH Value |
|------|-------|-------------|
| Background | Deep Black | `oklch(0.1 0.005 285)` |
| Foreground | Warm White | `oklch(0.9 0.01 80)` |
| Primary (Amber) | Amber Gold | `oklch(0.75 0.15 70)` |
| Secondary (Teal) | Cinematic Teal | `oklch(0.6 0.1 200)` |
| Muted | Dark Gray | `oklch(0.25 0.005 285)` |
| Border | Subtle White | `oklch(1 0 0 / 10%)` |

**Rules:**
- Use CSS variables exclusively — never hardcode color values.
- Maintain minimum 4.5:1 contrast ratio for normal text (WCAG AA).
- Amber is the dominant accent; teal is the secondary accent. Do not introduce additional accent colors.
- Dark text on light backgrounds must use `oklch(0.15 0.01 80)` or darker.

### 1.4 Layout & Composition

- Prefer **asymmetric layouts** over centered, symmetrical sections.
- Use CSS Grid and Flexbox for layout — no float-based layouts.
- Break the grid intentionally where it serves the cinematic feel (overlapping elements, offset positioning).
- White space is a design element, not absence — use it to create breathing room.
- Full-bleed sections for hero, showreel, and portfolio areas.
- Container max-width: 1280px with responsive padding.

### 1.5 Animation & Motion

- Motion must be **purposeful, sparse, and high-impact**.
- Use `framer-motion` for complex entrance animations and scroll-triggered reveals.
- CSS transitions for hover states and micro-interactions (150–300ms duration).
- Always use `transform` and `opacity` for animations — never animate `width`, `height`, or `top/left`.
- Respect `prefers-reduced-motion` — disable animations when the user prefers reduced motion.
- Scroll-reveal animations: fade-in with subtle Y-translation (20px), 0.6s duration, `ease-out` timing.

### 1.6 Accessibility (Critical Priority)

- Visible focus rings on all interactive elements.
- Descriptive `alt` text for all meaningful images.
- `aria-label` on icon-only buttons.
- Tab order must match visual order.
- All form inputs must have associated `<label>` elements.
- Minimum touch target size: 44×44px.
- Use `click`/`tap` for primary interactions, not hover-dependent.
- Disable buttons during async operations to prevent double-submission.
- Provide clear error messages positioned near the problem element.

### 1.7 Responsive Design

- Design mobile-first with thoughtful breakpoints.
- Breakpoints: `640px` (sm), `768px` (md), `1024px` (lg), `1280px` (xl).
- Ensure no horizontal scroll at any viewport width.
- Use `viewport` meta tag: `width=device-width, initial-scale=1.0, maximum-scale=1`.
- Images must use responsive sizing with `srcset` or CSS `object-fit`.
- Navigation collapses to hamburger menu below `1024px`.

### 1.8 Performance

- Use WebP format for images where possible.
- Implement lazy loading for below-the-fold images.
- Reserve space for async content to prevent layout shifts (CLS).
- Use skeleton screens or spinners for loading states.
- Minimize JavaScript bundle size — tree-shake unused components.

---

## 2. Code Quality & Best Practices

### 2.1 Naming Conventions

- **Variables/Functions**: Use `camelCase` with intention-revealing names. `elapsedTimeInDays` not `d`.
- **Components**: Use `PascalCase`. `ProjectGallery` not `projectgallery`.
- **CSS Classes**: Use Tailwind utility classes. Custom classes use `kebab-case`.
- **Files**: Components use `PascalCase.tsx`. Hooks use `camelCase.ts` prefixed with `use`.
- **Constants**: Use `SCREAMING_SNAKE_CASE` for true constants.
- Avoid disinformation: don't use `accountList` if it's actually a `Map`.
- Make meaningful distinctions: avoid `ProductData` vs `ProductInfo`.

### 2.2 Functions

- Functions should be **small** — ideally under 20 lines.
- Each function should do **one thing** and do it well.
- Don't mix high-level business logic with low-level implementation details.
- Use descriptive names: `isPasswordValid` not `check`.
- Minimize arguments: 0 is ideal, 1–2 is acceptable, 3+ requires justification.
- No side effects: functions shouldn't secretly change global state.

### 2.3 React-Specific Rules

- Use functional components exclusively.
- Never call `setState` or navigation in the render phase — wrap in `useEffect`.
- Stabilize references with `useState`/`useMemo` to prevent infinite re-renders.
- Extract reusable logic into custom hooks in `client/src/hooks/`.
- Share primitives via `client/src/components/` — extend shadcn/ui instead of duplicating markup.
- Keep pages modular: each section is its own component in `client/src/components/`.

### 2.4 Comments

- Don't comment bad code — rewrite it.
- Express intent through code, not comments.
- **Good comments**: Legal notices, clarification of external library behavior, TODOs with ticket references.
- **Bad comments**: Redundant, misleading, mandated, noise, position markers.

### 2.5 Formatting

- Follow the **Newspaper Metaphor**: high-level concepts at the top, details at the bottom.
- Related lines should be close together (vertical density).
- Variables should be declared near their usage.
- Use consistent indentation (2 spaces for this project).
- Run `prettier` before committing.

### 2.6 Error Handling

- Use exceptions instead of return codes.
- Don't return `null` — it forces callers to check for null every time.
- Don't pass `null` — it leads to runtime errors.
- Sanitize error messages: never expose internal details to users.

### 2.7 File Organization

```
client/
  src/
    pages/          ← Page-level components (Home.tsx)
    components/     ← Reusable UI components (Hero.tsx, Navbar.tsx, etc.)
    components/ui/  ← shadcn/ui primitives (button, card, accordion, etc.)
    contexts/       ← React contexts (ThemeContext.tsx)
    hooks/          ← Custom hooks (useScrollReveal.ts, useParallax.ts)
    lib/            ← Utility helpers (utils.ts)
    App.tsx         ← Routes & top-level layout
    main.tsx        ← React entry point
    index.css       ← Global styles & design tokens
```

---

## 3. Security

### 3.1 Frontend Security Checklist

Since this is a static frontend project, the security focus is on client-side concerns:

- **XSS Prevention**: All user-generated content must be escaped. React's JSX auto-escapes by default — never use `dangerouslySetInnerHTML` unless absolutely necessary and content is sanitized.
- **Content Security Policy**: Set appropriate CSP headers in deployment configuration.
- **HTTPS**: Always serve over HTTPS. Enforce in Vercel configuration.
- **External Resources**: Only load scripts, fonts, and images from trusted CDNs (Google Fonts, YouTube, uploaded CDN assets).
- **No Secrets in Frontend**: Never embed API keys, tokens, or credentials in client-side code. Use environment variables prefixed with `VITE_` only for non-sensitive configuration.

### 3.2 Input Validation (Contact Form)

- Validate all form inputs on the client side before submission.
- Use Zod schemas for structured validation where applicable.
- Sanitize text inputs to prevent injection in downstream services.
- Implement rate limiting on form submissions (debounce/throttle).
- Show clear, specific error messages near the problem field.

### 3.3 Dependency Security

- Regularly audit dependencies: `pnpm audit`.
- Keep dependencies updated to patch known vulnerabilities.
- Review new dependencies before adding — check download counts, maintenance status, and known issues.
- Use `pnpm-lock.yaml` to ensure reproducible builds.

### 3.4 Secure Headers (Vercel Deployment)

Configure in `vercel.json`:
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Strict-Transport-Security: max-age=31536000; includeSubDomains`

### 3.5 Information Disclosure

- Error messages must never expose stack traces, file paths, or internal architecture.
- Remove console.log statements before production deployment.
- Use generic error messages for users; log detailed errors server-side only.

---

## 4. Testing

### 4.1 Testing Strategy

For this static landing page, testing focuses on visual correctness, accessibility, and user interaction flows.

### 4.2 Critical User Journeys to Test

| Journey | Steps | Success Criteria |
|---------|-------|-----------------|
| First Visit | Load page → Splash screen → Hero reveals | Splash completes in ~3s, hero fully visible |
| Navigation | Click nav links → Smooth scroll to sections | Each section scrolls into view correctly |
| Mobile Menu | Tap hamburger → Menu opens → Tap link → Navigates | Menu opens/closes, links work, body scroll locks |
| Service Packages | View packages → Click "Get Started" → Scroll to contact | Contact form scrolls into view |
| Project Gallery | Click filter → View filtered projects → Click project → Lightbox opens → Video plays | Filter works, lightbox opens, YouTube embeds load |
| FAQ | Click question → Answer expands → Click another → Previous collapses | Smooth animation, no layout shift |
| Contact Form | Fill form → Submit | Validation works, success feedback shown |

### 4.3 E2E Testing Patterns (Playwright)

When implementing E2E tests:

- **Stable Selectors**: Use `data-testid` attributes, not CSS classes or text content.
- **Test Isolation**: Each test should be independent — no shared state between tests.
- **Retry Logic**: Use Playwright's built-in retry for flaky assertions.
- **Visual Regression**: Capture screenshots at key breakpoints for visual comparison.
- **Accessibility Testing**: Use `@axe-core/playwright` for automated accessibility checks.

### 4.4 Manual Testing Checklist

Before each deployment:

- [ ] All sections render correctly on desktop (1920px, 1440px, 1280px)
- [ ] All sections render correctly on tablet (768px, 1024px)
- [ ] All sections render correctly on mobile (375px, 414px)
- [ ] Navigation links scroll to correct sections
- [ ] Mobile hamburger menu opens, closes, and navigates correctly
- [ ] Splash screen completes and reveals content
- [ ] YouTube video embeds load and play in gallery lightbox
- [ ] FAQ accordion expands/collapses without layout shift
- [ ] Contact form validates inputs and shows error states
- [ ] All images load (no broken images)
- [ ] No horizontal scrollbar at any viewport width
- [ ] Keyboard navigation works (Tab, Enter, Escape)
- [ ] Color contrast meets WCAG AA (4.5:1 minimum)

---

## 5. Implementation Checklist

Before finalizing any code change, verify:

### Design
- [ ] Clear aesthetic direction maintained (Cinematic Noir)
- [ ] No generic fonts, colors, or layouts introduced
- [ ] One memorable design anchor per section
- [ ] Accessible and performant
- [ ] Responsive across all breakpoints

### Code Quality
- [ ] Functions are small (< 20 lines) and do one thing
- [ ] Names are searchable and intention-revealing
- [ ] No unnecessary comments — code is self-documenting
- [ ] No unused imports, variables, or styles
- [ ] TypeScript compiles with zero errors (`npx tsc --noEmit`)

### Security
- [ ] No secrets or API keys in client-side code
- [ ] User inputs are validated and sanitized
- [ ] External resources loaded from trusted sources only
- [ ] No `dangerouslySetInnerHTML` without sanitization

### Testing
- [ ] Critical user journeys verified manually
- [ ] No console errors in browser DevTools
- [ ] All images load correctly
- [ ] Mobile and desktop layouts verified

---

*This document was generated by synthesizing principles from 8 specialized development skills: frontend-design, ui-ux-pro-max, web-design-guidelines, code-reviewer, find-bugs, clean-code, api-security-best-practices, and e2e-testing-patterns.*
