# Gibson.dev Portfolio

My personal portfolio website presenting my software engineering work, applied AI projects, cybersecurity research, developer tools, and community collaboration.

The site is a static HTML, CSS, and JavaScript project. The canonical website source lives in `portfolio/`; `Gibson_Portfolio.html` is an archived single-file export.

## Featured work

| Project | What I built or am developing | Technologies |
|---|---|---|
| [Shea](https://github.com/mwasgibson/Shea) | I’m building a modular, user-sovereign AI agent runtime organized around planning, policy and risk decisions, authorization, controlled execution, verification, recovery, and audit trails. It remains in active development. | Python, SQLite, policy and risk design, Pytest |
| [EpiPredict Kenya AI](https://github.com/mwasgibson/epi-predict-kenya-ai) | I developed a disease-outbreak prediction project organized into frontend, API, and ML services, with database persistence and container-based workflows. | Python, FastAPI, React, scikit-learn, PostgreSQL, Docker |
| [Site Trust Checker](https://github.com/mwasgibson/site-trust-checker) | I built a browser extension and API that combine website security signals and account for uncertainty in scoring. | JavaScript, Node.js, Express, browser extension APIs |
| [CineStudio](https://github.com/mwasgibson/cinestudio) | I’m building an AI-assisted script workstation for screenplay, A/V, and stageplay formats, with storyboard timing, a multi-track timeline, and post-production exports. | React, TypeScript, Express, Gemini API |
| [LogHub](https://github.com/mwasgibson/loghub) | I’m developing a multi-project log and metrics viewer with planned web, mobile, and CLI clients. | Next.js, Docker, observability architecture |
| [Quilroom](https://github.com/mwasgibson/quilroom) | I built a self-hosted real-time collaborative document editor for local networks, with presence, autosave, and QR-assisted sharing. | React, Quill, Yjs, Fastify, SQLite, Docker |
| [Lab](https://github.com/mwasgibson/lab) | I’m exploring a browser-based AR and spatial-preview concept using 3D presentation tools. | React, Three.js, model-viewer, Vite |
| [FileConv / Grubber](https://github.com/mwasgibson/grubber) | I built a Python command-line file conversion tool around a converter registry, MIME-type resolution, and specialist backends. | Python, Typer, Pillow, LibreOffice |
| IoT DDoS Detection | I explored traffic monitoring, anomaly detection, DDoS-pattern identification, and defensive alerting for IoT environments. | Python, network analysis, IoT security |

## Community collaboration

I’m collaborating around the [SCAAI Desktop community](https://github.com/Nooran3994/SCAAI-COMMUNITY) through release testing, documenting onboarding and persistence observations, reporting behavior, and providing feedback on community documentation and roadmap discussions. The public community repository contains release and coordination materials; it does not publish the desktop application's source code.

## Skills

- **Languages and web:** Python, JavaScript, TypeScript, HTML, CSS, PHP, SQL
- **Frameworks and data:** React, Node.js, Express, FastAPI, scikit-learn, SQLite, PostgreSQL
- **Engineering practices:** REST APIs, automated testing, Docker, Kubernetes, Git and GitHub, security analysis, technical documentation
- **Focus areas:** AI systems, machine learning, cybersecurity, observability, collaborative software, developer tooling, and research-driven engineering

## Repository structure

```text
README.md
LICENSE
Gibson_Portfolio.html          # archived single-file export
portfolio/
  index.html
  about.html
  projects.html
  research.html
  writing.html
  journey.html
  resume.html
  contact.html
  components/
  assets/
    css/
    js/
    images/
```

## Run locally

From the repository root, run Python's built-in server:

```bash
python3 -m http.server 8000
```

Then open [http://localhost:8000/portfolio/index.html](http://localhost:8000/portfolio/index.html).

Alternatively, use `npx serve portfolio`. No frontend build step is required for the current static site.

## Editing and verification

- Edit page content in `portfolio/*.html`.
- Update styles in `portfolio/assets/css/`.
- Update interactions in `portfolio/assets/js/`.
- Preview the site at desktop and mobile widths after edits. Check navigation, project links, image paths, and animations.

The portfolio repeats some navigation and footer markup across pages. The `portfolio/` directory is the source of truth; the archived single-file export may not reflect later changes.

## Contact

- Website: [gibson.dev](https://gibson.dev)
- GitHub: [@mwasgibson](https://github.com/mwasgibson)
- Email: mwangigibson71@gmail.com

## License

See [LICENSE](LICENSE) for the repository's license terms.
