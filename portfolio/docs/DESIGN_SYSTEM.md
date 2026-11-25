# Visual System

> Updated during the first design implementation pass.
> Source of truth: `portfolio/assets/css/style.css`, `responsive.css`, and the eight page templates.

## Visual direction

The portfolio keeps its dark, technical identity, with a more deliberate blue-led accent system, subtle warm highlights, layered surfaces, restrained borders, and consistent spacing. The design is intended to feel like an engineering portfolio rather than a generic template.

## Colour tokens

| Token | Value | Role |
|---|---|---|
| `--primary` | `#3b82f6` | Primary interactive blue |
| `--primary-strong` | `#2563eb` | Primary buttons and emphasis |
| `--primary-soft` | `rgba(59,130,246,.14)` | Soft blue surfaces |
| `--accent` | `#d97706` | Warm highlight |
| `--background` | `#09090b` | Main canvas |
| `--surface` | `#111318` | Secondary surfaces |
| `--surface-raised` | `#171a21` | Raised controls and panels |
| `--card` | `#14171e` | Content cards |
| `--border` | `rgba(255,255,255,.09)` | Standard borders |
| `--text` | `#f4f6fb` | Primary text |
| `--muted` | `#a1a8b5` | Supporting text |
| `--muted-strong` | `#c4cad4` | Labels and secondary emphasis |

## Typography

- Inter is the global typeface, with system sans-serif fallbacks.
- Headings use responsive clamp-based sizing, compact line-height, and negative tracking.
- Body copy uses a muted foreground and generous line-height.
- Eyebrow labels use uppercase lettering, tracking, and a small warm accent rule.
- Blue gradient emphasis is limited to prominent heading text rather than every inline span.

## Layout

- Shared content width is capped at 1160px.
- Desktop sections use generous vertical spacing and consistent content gutters.
- The shared grid utilities support two, three, and four columns.
- Cards share a common surface, border, radius, padding, and hover treatment.
- The homepage hero uses a two-column text/image composition.
- Inner-page heroes share a consistent content width and vertical rhythm.
- About, journey, and contact layouts have explicit component rules rather than relying on generic document flow.

## Navigation

- Desktop navigation uses the same eight destinations on all pages.
- The active page is marked consistently.
- The Resume destination is available in both desktop and mobile navigation.
- Tablet and mobile layouts switch to a compact menu control.

## Responsive behaviour

The responsive stylesheet targets the current page classes and uses three main layout ranges:

- Above 1100px: full desktop composition.
- 901px–1100px: compressed desktop navigation and grids.
- 701px–900px: compact navigation and tablet layouts.
- 481px–700px: single-column content and stacked hero layouts.
- 480px and below: tighter spacing, single-column actions, and compact cards.

The exact media-query thresholds are maintained in `responsive.css`.

## Motion and accessibility

- Hover effects are limited to interactive surfaces and do not globally suppress transforms.
- Focus-visible states are provided for links, buttons, and form controls.
- Reduced-motion preferences disable or minimise transitions and animations.
- The mobile menu transitions visibility without removing its content from assistive technology when closed only visually; a future interaction pass should also verify its expanded state and keyboard behaviour.

## Maintenance rules

1. Treat the HTML templates as the source of truth for component names.
2. Add shared component rules before introducing page-specific one-off overrides.
3. Keep responsive selectors aligned with the current markup.
4. Update this document whenever the active tokens or layout rules change.
5. Verify the rendered pages at desktop, tablet, and mobile widths before merging visual changes.
