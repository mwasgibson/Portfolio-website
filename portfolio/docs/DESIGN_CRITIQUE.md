# Initial Design Critique

> Review only. No page copy, HTML structure, CSS, JavaScript, or visual styling was changed as part of this assessment.
>
> Reviewed: 25 November 2026
> Source snapshot: `portfolio/runtime-and-responsive-fix` (the head branch of PR #18)
> Method: source-level inspection of all eight HTML pages and their shared stylesheets/scripts.

## Executive assessment

The portfolio has a recognisable visual direction: dark surfaces, blue accents, rounded cards, large typography, and restrained motion. The foundation is coherent enough to build on.

The main concern is not a lack of visual identity. It is a growing gap between the CSS component vocabulary and the class names used by the actual pages. The stylesheet still contains many rules for components that the current HTML does not use, while multiple page-specific classes in the HTML have no matching styling rules in the shared stylesheets. This weakens consistency and can leave intended layouts dependent on generic browser flow rather than the designed grid/flex behaviour.

This is a code-level critique, not a claim that every issue has been confirmed in a rendered browser session.

## Findings

### 1. High: HTML and CSS component vocabularies have drifted

The HTML uses page-specific classes such as `split-hero`, `hero-wrapper`, `hero-left`, `hero-right`, `about-hero`, `journey-timeline`, `journey-item`, `contact-layout`, and `form-group`. These names do not have matching component rules in the shared base, responsive, or animation stylesheets inspected.

At the same time, the CSS still defines many older patterns such as `hero-grid`, `hero-photo`, `about-grid`, `timeline-card`, `contact-grid`, and `footer-container` that are not used by the current page markup.

**Why it matters:** intended columns, alignment, spacing, and responsive transformations may not be applied to the elements that now make up the pages. This is the strongest structural explanation for inconsistent layouts and potential overlap. It needs browser verification before assigning exact visual symptoms to individual elements.

**Priority:** High.

### 2. High: responsive rules target some legacy selectors

The responsive stylesheet has sensible breakpoint coverage at 1200, 992, 768, 576, and 420 pixels. However, several rules target the older selectors identified above, while the current markup uses different wrappers.

**Why it matters:** having breakpoints in a stylesheet does not guarantee the current page structures respond correctly. The relevant selectors must match the actual DOM.

**Priority:** High.

### 3. Medium: the documented palette does not describe the implementation

The existing short `portfolio/docs/DESIGN_SYSTEM.md` lists blue `#5B8CFF`, purple `#7C4DFF`, pink `#EC4899`, and background `#090D18`. The active `:root` values instead define primary blue `#1D4ED8`, darker blue `#1E40AF`, orange `#D97706`, and background `#09090B`, among other tokens.

**Why it matters:** future changes based on the old document would introduce colours that are not part of the current implementation and increase visual inconsistency.

**Priority:** Medium. The design-system document has been corrected to record the active CSS values.

### 4. Medium: typography includes an unused secondary font

Inter is the active global font. Some pages also load Playfair Display, but no corresponding font-family assignment appears in the shared stylesheet. The Writing page's Google Fonts URL also repeats the `display=swap` parameter.

**Why it matters:** unnecessary font requests add complexity without producing a consistent typographic role. This is a cleanup candidate, not a reason to introduce a new typeface.

**Priority:** Medium.

### 5. Medium: navigation is not consistent across pages

The Resume link appears in the desktop navigation on Home and Resume, but not on the other six pages. The mobile menus inspected also omit Resume outside those same two pages.

**Why it matters:** the site map changes depending on the page and viewport. Users may have difficulty discovering the Resume page.

**Priority:** Medium.

### 6. Medium: Writing page contains placeholder destinations

The four featured-article links use `href="#"`.

**Why it matters:** these look like working calls to action but do not lead to article destinations.

**Priority:** Medium. This is a functional/content destination issue rather than a visual redesign request.

### 7. Low: shared design rules contain substantial unused legacy styling

A number of shared component selectors are not referenced by the current HTML. This includes older hero, about, timeline, contact, footer, and article patterns.

**Why it matters:** unused rules make it harder to identify which styles actually govern the live pages and increase the chance that future edits target the wrong component.

**Priority:** Low to medium. Confirm usage before deleting anything; some classes may be added dynamically or intended for future sections.

### 8. Low: visual tokens are only partly centralised

The root variables provide a useful starting point, but component styles also contain literal colour values for borders, hover states, backgrounds, and gradients.

**Why it matters:** palette-wide adjustments require searching through component rules instead of changing a small set of tokens.

**Priority:** Low.

## What is working

- The dark background and blue accent create a clear, recognisable identity.
- Inter provides a consistent base typeface.
- The 1200px container and shared card/button primitives offer a useful foundation.
- Rounded surfaces, fine borders, and muted supporting text are repeated across page types.
- Responsive breakpoints and reduced-motion handling are present.
- The eight-page information architecture is understandable and the pages share common navigation patterns, even though the Resume item is inconsistent.

## Review limitations

- The GitHub Pages URL could not be retrieved by the available browser fetch during this review, so no live rendered screenshots or viewport-by-viewport visual checks were available.
- No automated accessibility scan, contrast measurement, Lighthouse run, or browser interaction test was performed.
- Findings about class coverage are based on source inspection. They identify likely layout risks, not verified pixel-level defects.
- The review snapshot is the open PR #18 branch, not the currently deployed `main` branch. PR #18 is still unmerged.

## Recommended order for a later implementation phase

1. Reconcile the actual HTML class names with the base and responsive CSS. Treat this as the first layout-stability task.
2. Verify each page at desktop, tablet, and mobile widths after the selector mapping is corrected.
3. Standardise navigation across all pages and viewports.
4. Resolve the Writing page's placeholder destinations.
5. Remove or consolidate unused legacy CSS only after confirming it is not used dynamically.
6. Decide whether Playfair Display has a deliberate role; otherwise remove the unused font request.
7. Run accessibility, contrast, keyboard, and performance checks against the rendered site.

No items in this list have been implemented by this review.
