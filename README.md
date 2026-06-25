# Gibson.dev — Portfolio Website

A personal portfolio for Gibson Muiruri Mwangi (Gibson.dev) showcasing projects, research, writing, journey and contact details. The site is a static, hand-crafted collection of HTML/CSS/JS files located in the `portfolio/` folder. A single-file export (`Gibson_Portfolio.html`) exists at the repo root and is kept as an archive.

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

Gibson Muiruri Mwangi — Software Engineer • AI Builder • Researcher

This portfolio is designed to be a fast, scannable presentation of Gibson’s professional identity and work. A successful portfolio serves three practical purposes:

1. Explain who you are and what you focus on
   - The hero section communicates a short headline plus one line that summarizes core areas (AI, ML, cybersecurity, research, software engineering). The goal is rapid recognition — a reader should know in seconds whether your profile is relevant.

2. Show proof and context through projects and artifacts
   - Short project blurbs (featured items such as Shea Core) provide a contextual summary and link to deeper artifacts: repository links, demos, technical write-ups, or research notes. Each project entry is a conversation starter for recruiters, collaborators, or researchers.

3. Make it easy to take the next step
   - Clear CTAs (Get In Touch, View Projects) and dedicated pages (resume, contact) reduce friction for outreach, hiring, and partnerships.

Why this layout works
- Scannability: short headings, tags, and feature cards let readers scan quickly.
- Evidence-first: small summaries with links provide enough detail without overwhelming the reader.
- Minimal friction: a static, dependency-free site loads quickly and is simple to host (GitHub Pages, static CDN).

About Gibson (concise bio)

Gibson Muiruri Mwangi is a software engineer focused on privacy-aware AI systems and security research. He builds prototypes and research-driven products using applied machine learning, FastAPI-driven services, and systems engineering. Gibson is the lead developer of Shea Core — a privacy-first personal AI assistant — and works on identity verification and IoT security projects.

Open to
- Research collaborations
- Consulting and freelance projects in AI & security
- Internship and mentorship opportunities

Contact links
- Website: https://gibson.dev
- Email: mwangigibson71@gmail.com
- GitHub: https://github.com/mwasgibson

---

## What this repo contains

```
README.md                      ← this file (detailed)
LICENSE                        ← repository license
Gibson_Portfolio.html          ← single-file export (archival)
portfolio/                     ← canonical site source
  index.html                   ← landing / hero, featured project, stats
  about.html                   ← mission, skills, timeline
  projects.html                ← project listings and featured projects
  research.html                ← research summaries
  writing.html                 ← articles and posts
  journey.html                 ← timeline and milestones
  contact.html                 ← contact CTA / static form
  resume.html                  ← resume content (static)
  components/                  ← small HTML partials (navbar, footer)
    navbar.html
    footer.html
  assets/                      ← static assets
    css/
      style.css                ← design tokens, layout, theme
      animations.css           ← keyframes & small animation helpers
      responsive.css           ← (present — can be used for overrides)
    js/
      main.js                  ← primary UI behaviours
      animations.js            ← reveal/progress helpers
    images/
      profile.jpg / profile.jpeg
  docs/                        ← placeholder for documentation (empty)
```

Notes:
- `portfolio/` is the canonical editing area. `Gibson_Portfolio.html` is an exported single-file snapshot retained for convenience.

---

## How this repo was built — technical details

High-level architecture
- Static site: plain HTML pages that share a CSS and JS bundle under `portfolio/assets/`.
- No build system or framework — pages are hand-authored and include the same header/footer markup (components are present in `portfolio/components/` for convenience).

Key files and responsibilities
- portfolio/assets/css/style.css — the design system: CSS variables (colors, radii, shadows, spacings) at `:root` and detailed rules for layout, cards, hero, grid utilities, and responsive breakpoints. Changing tokens here updates site-wide styling.
- portfolio/assets/css/animations.css — animation keyframes and small helper classes (fade-up/left/right, scale-in, floating/glow). Use these classes alongside the `reveal`/`active` flow to animate elements when they enter the viewport.
- portfolio/assets/js/main.js — primary client-side behaviours:
  - active nav highlighting using scroll position
  - IntersectionObserver-based reveal-on-scroll
  - animated counters (elements with `data-counter`)
  - typing effect (element `.typing-text` with `data-text`)
  - back-to-top behavior and mobile menu toggling
- portfolio/assets/js/animations.js — smaller animation orchestration and progress bar updates; helps sequence card transitions and hides the loading overlay after window load.
- portfolio/components/navbar.html and footer.html — modular header/footer markup to keep pages consistent. Many pages include the same markup verbatim; if you centralize includes, consider a simple templating step in the future or a build script.

Implementation notes and rationale
- No JS frameworks to keep client payload small and reduce runtime complexity.
- IntersectionObserver used for reveals and counters for performance (instead of heavy scroll handlers).
- Single-file export (Gibson_Portfolio.html) retained as an archive snapshot; portfolio/ is the canonical editing area.

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
- In repository Settings → Pages: set the Source to `main` branch and Folder to `/portfolio` (or `/docs` if you move files there). This serves files at `https://<user>.github.io/<repo>/` and will place the site under `.../Portfolio-website/` unless configured for a user site.

GitHub Actions (recommended for automated deploy)
- You can add a simple GitHub Actions workflow that copies /portfolio to the Pages publishing branch. Below is a starter workflow I have added at `.github/workflows/deploy-pages.yml` that publishes the `portfolio/` folder to GitHub Pages automatically whenever you push to `main`.

---

## Contributing
- Small fixes: open a PR that edits files under `portfolio/` with a short description (typo, copy update, image replacement).
- Feature changes: create a branch, include screenshots and a short testing checklist, and describe any structural changes (new components or new JS behaviours).
- If you'd like, I can add a `CONTRIBUTING.md` that formalizes this process.

---

## License
See the `LICENSE` file in the repository root for license terms.

---

## Contact
Gibson Muiruri Mwangi

- Website: https://gibson.dev
- Email: mwangigibson71@gmail.com
- GitHub: https://github.com/mwasgibson

---

If you want changes to the bio or additional contact links (LinkedIn, X, personal blog), tell me and I'll update the README accordingly.
