# Existing Visual System

> Baseline documentation only. This describes the current implementation; it is not a proposed redesign.
>
> Reviewed: 25 November 2026
> Source snapshot: `portfolio/runtime-and-responsive-fix` (the head branch of PR #18)
> Scope: the eight static portfolio pages and their shared CSS/animation assets.

## 1. Visual direction

The implementation reads as a dark, modern software-engineering and AI portfolio. Its visual language combines a near-black canvas, blue interactive accents, restrained orange highlights, muted supporting text, rounded cards, subtle borders, and hover elevation. Some sections use translucent/glass-like surfaces and blurred background decoration.

The source contains an earlier design note with a different palette. The values below are taken from the active CSS custom properties, not that older note.

## 2. Colour tokens

| Token | Implemented value | Observed role |
|---|---|---|
| `--primary` | `#1D4ED8` | Main blue accent, links, emphasis, primary actions |
| `--primary-dark` | `#1E40AF` | Darker primary-action hover |
| `--accent` | `#D97706` | Secondary warm accent, including loader gradient |
| `--background` | `#09090B` | Main page background |
| `--surface` | `#111827` | Navigation/menu and secondary surfaces |
| `--surface-light` | `#1F2937` | Lighter surface token |
| `--card` | `#18181B` | Card backgrounds |
| `--border` | `rgba(255,255,255,.08)` | Low-contrast borders |
| `--text` | `#F9FAFB` | Main foreground text |
| `--muted` | `#9CA3AF` | Paragraph and secondary text |
| `--success` | `#22C55E` | Success state token |
| `--danger` | `#EF4444` | Error/danger state token |

Additional literal colours occur in component rules, including white, near-black, slate grey, and blue variants. The token list above is the canonical palette currently declared in `:root`; it does not imply every literal colour has been consolidated.

## 3. Typography

- Main family: Inter, loaded from Google Fonts with weights 300–800.
- Global heading scale in `style.css`: H1 4.8rem / 1.05 / weight 800; H2 3rem / weight 700; H3 1.5rem / weight 600; H4 1.15rem.
- Body line-height: 1.7.
- Paragraphs use the muted text token.
- Eyebrows, tags, and small labels use uppercase styling and letter spacing where defined.
- Playfair Display is also requested by some pages, but the shared stylesheet does not currently assign it to a selector. It is therefore a loaded font, not an established applied type role.

## 4. Layout and spacing

- Main content width: `min(1200px, 92%)`, centred.
- Default section vertical padding: 120px.
- Section headers use a large bottom margin (70px).
- Grid utilities provide two-, three-, and four-column layouts with a 35px gap.
- The common card uses 35px padding, an 18px radius, a subtle border, and a dark card surface.
- Some specialised card rules use 20–24px radii and their own padding.
- The homepage and detail pages use a mixture of shared utility classes and page-specific class names.

## 5. Components and recurring patterns

### Navigation
A fixed, full-width navigation bar sits above the page. Its scrolled state uses a translucent dark background, backdrop blur, and a subtle bottom border. Desktop links use muted text, a blue underline interaction, and a brighter active state. A separate mobile menu is present in most page templates.

### Hero sections
Pages use a large introductory heading, supporting paragraph, and, where relevant, eyebrow labels, tags, imagery, or action buttons. The homepage uses a split hero concept; inner pages use several different hero wrappers.

### Cards and content grids
Dark cards with fine borders and rounded corners are used for projects, research, skills, timeline entries, writing, and contact information. Hover states generally lift cards and strengthen the border or shadow.

### Buttons and links
Primary buttons use the blue token and white text. Secondary buttons use a subtle border and foreground text. Both use rounded corners and short hover transitions.

### Footer
The page footer uses a darker surface, a top border, and repeated identity/role information.

### Utility overlays
The site includes a loading overlay, top progress indicator, and back-to-top control. Their presence is part of the current implementation, not a recommendation to retain or remove them.

## 6. Motion

- Shared transition token: `.35s ease`.
- Cards, buttons, images, and selected content blocks use hover transforms.
- `animations.css` contains fade, scale, float, glow, loader, and reveal animation definitions.
- The JavaScript animation layer adds reveal behaviour to selected content elements.
- Reduced-motion handling is present in the animation and responsive stylesheets.

## 7. Responsive rules

The responsive stylesheet uses these maximum-width breakpoints:

- 1200px
- 992px
- 768px
- 576px
- 420px

It adjusts the legacy grid, hero, navigation, button, card, and typography selectors. The stylesheet also includes reduced-motion rules.

Important implementation note: several selectors targeted by the responsive stylesheet belong to the older class vocabulary. The current page markup uses a number of different page-specific class names. See [the baseline critique](DESIGN_CRITIQUE.md) for the impact.

## 8. Page structure

The portfolio currently contains eight static pages:

- Home
- About
- Projects
- Research
- Writing
- Journey
- Resume
- Contact

The pages share a visual foundation, but they do not all use identical navigation or the same hero/content class structure.

## 9. Source of truth and maintenance rules

For the current implementation, use these sources when checking the design:

1. `portfolio/assets/css/style.css` for base tokens, typography, components, and layout rules.
2. `portfolio/assets/css/responsive.css` for breakpoint and reduced-motion rules.
3. `portfolio/assets/css/animations.css` and `portfolio/assets/js/animations.js` for motion behaviour.
4. The individual HTML files for the actual component and page structure.

When the visual system is intentionally changed later, update this document to match the shipped implementation. Do not treat the values in the former short design note as active tokens unless the CSS is changed to use them.
