# Gibson.dev — Portfolio Website

A personal portfolio for Gibson Muiruri Mwangi (Gibson.dev) that showcases projects, research, writing, journey, and contact details. The site is a static, hand-crafted collection of HTML/CSS/JS files located in the portfolio/ folder. A single-file export (Gibson_Portfolio.html) exists at the repo root and is intentionally kept as an archive.

---

Table of contents
- About (who this is for & how a portfolio works)
- What this repo contains
- How this repo was built (technical details)
- How to run locally
- Development & editing guide
- Deployment
- Contributing
- License & contact

---

## About — Gibson and how a portfolio works

This portfolio presents Gibson's public-facing professional identity: a concise story that combines background, key projects, technical skills, research interests, and calls-to-action (contact / collaboration). A good portfolio does three things:

1. Explain who you are and what you care about (short, scannable headline + supporting paragraphs). The hero on `portfolio/index.html` performs this role using a short title, a typing line describing focus areas (AI, cybersecurity, research), and tags for quick scanning.

2. Show evidence of skill through projects and artifacts (project pages and short descriptions). The `projects.html` page lists flagship work (Shea Core AI Assistant), security and research projects (Digital ID, IoT DDoS Detection), and domain-relevant tags. Each project entry is a conversation starter — link to code, demos, or writeups where available.

3. Make it easy to take the next step (contact, resume, collaborations). This repo includes `contact.html` and `resume.html`, plus a visible CTA in the footer and hero to encourage outreach.

Design decisions in this portfolio emphasize clarity, performance, and control: a small, dependency-free codebase (vanilla HTML/CSS/JS) keeps the site fast and easy to host anywhere.

Audience and use-cases
- Recruiters and hiring managers skimming projects and skills.
- Potential collaborators or researchers wanting to understand focus areas.
- Engineers and designers reviewing UI/UX and implementation details.

Writing and curation best-practices shown here
- Short, scannable sections (hero, featured project, featured research)
- Tagging and categorization for quick discovery (AI, Security, Research)
- Reusable components (navbar/footer) to keep content consistent across pages

---

## What this repo contains

```
README.md                      ← this file (detailed)
LICENSE                        ← repository license
Gibson_Portfolio.html          ← single-file export (archival)
portfolio/                     ← canonical site source
  index.html                   ← landing / hero, featured project, stats
  about.html                   ← mission, skills, timeline
  projects.html                ← project listings and details
  research.html                ← research summaries
  writing.html                 ← posts or article links
  journey.html                 ← timeline and milestones
  contact.html                 ← contact CTA / static form
  resume.html                  ← resume content (static)
  components/                  ← small HTML partials
    navbar.html                ← shared nav + mobile menu
    footer.html                ← shared footer
  assets/                      ← static assets
    css/                       ← style.css (theme) and animations.css
    js/                        ← main.js (behaviors) and animations.js
    images/                    ← profile.jpg / profile.jpeg and other images
  docs/                        ← placeholder for documentation (empty)
```

Notes:
- The canonical editing area is the `portfolio/` directory. `Gibson_Portfolio.html` is an exported single-file snapshot and is intentionally not the primary editing target.

---

## How this repo was built — technical details

Architecture
- Static site: plain HTML pages using shared CSS and JS bundles under `portfolio/assets/`.
- No build system or framework — pages are hand-authored and include the same header/footer markup (components are present in `portfolio/components/` for convenience).

Key files and responsibilities
- portfolio/assets/css/style.css — the design system: CSS variables (colors, radii, shadows, spacings) at `:root` and detailed rules for layout, cards, hero, grid utilities, responsive breakpoints, and components. Changing tokens here updates site-wide styling.
- portfolio/assets/css/animations.css — animation keyframes and small helper classes (fade-up, fade-left/right, scale-in, floating/glow). Use these classes alongside the `reveal`/`active` flow to animate elements when they enter the viewport.
- portfolio/assets/js/main.js — primary client-side behaviours:
  - active nav highlighting using scroll position
  - IntersectionObserver-based reveal-on-scroll
  - animated counters (elements with `data-counter`)
  - typing effect (element `.typing-text` with `data-text`)
  - back-to-top behavior and mobile menu toggling
- portfolio/assets/js/animations.js — smaller animation orchestration and progress bar updates; helps sequence card transitions and hides the loading overlay after window load.
- portfolio/components/navbar.html and footer.html — modular header/footer markup to keep pages consistent. Many pages include the same markup verbatim; if you centralize includes, consider a simple templating step in the future or a build script.

Notable implementation choices
- Accessibility: pages use semantic HTML (headings, nav, sections). Ensure images maintain descriptive `alt` text when replacing assets.
- Performance: no external JS libraries; Google Fonts is the only external resource. The static approach keeps the runtime minimal and fast to load.
- Animations: IntersectionObserver is used to avoid heavy scroll listeners; the CSS handles most visual transitions.

Development workflow used to create this repo
- Hand-edit HTML files in `portfolio/`.
- Add/optimize images in `portfolio/assets/images/`. Keep filenames consistent with references in HTML (pages reference `assets/images/profile.jpg`).
- Update CSS variables in `style.css` for theming changes.

Suggested improvements (small, non-breaking)
- Unify component usage: replace repeated header/footer markup across HTML files with a lightweight include process (e.g., a short Node script or a GitHub Action that injects components at build time).
- Add a minimal linter or Prettier config for consistent formatting.
- Add a GitHub Actions workflow to automatically deploy `/portfolio` to GitHub Pages.

---

## How to run locally

From the repository root, serve files over HTTP to avoid path / file restrictions:

```bash
# Python 3 built-in server (recommended for quick preview)
python3 -m http.server 8000
# Open http://localhost:8000/portfolio/index.html
```

Alternative (Node):
```bash
npx serve portfolio
# or
npx http-server portfolio
```

Manual preview by opening `portfolio/index.html` in your browser may work but a local HTTP server is recommended for consistent behaviour (CORS, relative asset paths, routing).

---

## Development & editing guide

Edit content
- For page text and structure: update files under `portfolio/*.html`.
- For nav changes: edit `portfolio/components/navbar.html` and update the copies used across pages (or run an include step you add).
- For styling: change variables at the top of `portfolio/assets/css/style.css` and add higher-specificity rules for new components as needed.
- For JS interaction: modify `portfolio/assets/js/main.js` and `animations.js`. Keep behavior small and modular; prefer IntersectionObserver and requestAnimationFrame for performance.

Adding assets
- Place images in `portfolio/assets/images/` and reference them using the relative path `assets/images/<name>` from HTML files.
- Keep filenames and extensions consistent (pages reference `profile.jpg`); if your file is `profile.jpeg`, rename it to avoid broken links.

Naming conventions
- Keep page filenames lowercase and dash-separated for clarity (e.g., `project-details.html`).

Testing
- Manual QA across Chrome/Firefox/Safari and mobile device widths.
- Verify animations trigger correctly and counters finish to their target values.

---

## Deployment

GitHub Pages
- In repository Settings → Pages, set the Source to `main` branch and Folder to `/portfolio` (or use `/docs` if you move files there). This serves files at `https://<user>.github.io/<repo>/` and will place the site under `.../Portfolio-website/` unless configured for a user site.

GitHub Actions (recommended for automated deploy)
- You can add a simple workflow that copies `/portfolio` to the `gh-pages` branch or uses `peaceiris/actions-gh-pages` to publish the contents. Tell me if you want a starter workflow and I will add it.

---

## Contributing
- Small fixes: open a PR that edits files under `portfolio/` with a short description (typo, copy update, image replacement).
- Feature changes: create a branch, include screenshots and a short testing checklist, and describe any structural changes (new components or new JS behaviours).
- If you'd like, I can add a `CONTRIBUTING.md` that formalizes this process.

---

## License
See the `LICENSE` file in repository root for license terms.

---

## Contact
Owner: Gibson Muiruri Mwangi
Site: Gibson.dev
Repo: https://github.com/mwasgibson/Portfolio-website

---

If you'd like, I can now:
- Add a short GitHub Actions workflow that deploys `/portfolio` to GitHub Pages, or
- Create a CONTRIBUTING.md and a short development checklist, or
- Replace repeated header/footer markup with a simple include script (Node or Python) and optionally run it once to centralize components.
