## What this is
One-sentence portfolio website for Gibson Muiruri Mwangi (Gibson.dev) showcasing projects, research, writing, and contact information. It's a static, hand-authored site intended to be served as plain HTML/CSS/JS.

### Stack
- **Language(s):** HTML (primary), CSS, JavaScript
- **Framework / runtime:** None — static site (vanilla HTML/CSS/JS)
- **Notable libraries / external resources:** Google Fonts (Inter); no JS frameworks; lightweight, custom CSS/JS

## How it's organized
```
portfolio/                     Main site source (preferred homepage)
  index.html                   Landing page (portfolio/index.html)
  about.html                   About page
  projects.html                Projects listing and featured projects
  research.html                Research overview
  writing.html                 Writing / articles
  journey.html                 Timeline / journey
  contact.html                 Contact page
  resume.html                  Resume page
  assets/                      Static assets used by the site
    css/                       Styles (style.css, animations.css)
    js/                        JavaScript (main.js)
    images/                    Images (profile.jpg, etc.)
  components/                  Reusable HTML partials/components (markup)
  docs/                        (empty) documentation folder
LICENSE                        Repository license
README.md                      This file
Gibson_Portfolio.html          Legacy/alternate single-file export (ignored by this README)
```

How it fits together: The site is a static collection of HTML pages under portfolio/ that share a central CSS/JS bundle in portfolio/assets. JavaScript (portfolio/assets/js/main.js) attaches UI behaviors such as animated counters, reveal-on-scroll, a typing effect, and a mobile menu. To view the site locally, serve the repository root and open portfolio/index.html.

## How to run it
The site is static — you can open files directly in a browser, or serve them with a simple local HTTP server. From the repository root:

```bash
# recommended: serve on a local HTTP server so fetches and routing work consistently
python3 -m http.server 8000
# then open in your browser:
# http://localhost:8000/portfolio/index.html
```

Alternative: deploy the portfolio/ folder with GitHub Pages (set Pages source to /portfolio or use a build/deploy pipeline).

## Notes
- This README uses the content under portfolio/ as the canonical site source. The file Gibson_Portfolio.html at the repository root appears to be a single-file export; per your request it is acknowledged here but intentionally ignored as the primary source.

## Try asking
- Should I remove Gibson_Portfolio.html from the repository or leave it as an archived single-file export?
- Do you want me to add GitHub Pages deployment instructions (set Pages source to /portfolio) and a small deploy workflow?
- Would you like a simple CONTRIBUTING.md and development checklist for updating pages, assets, and components (where to add images, how to update nav links)?
