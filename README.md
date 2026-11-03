# Gibson.dev Portfolio

My personal portfolio website showcasing my software engineering work, applied AI projects, security research, developer tools, and community collaboration.

The site is a static HTML, CSS, and JavaScript project. The canonical website source lives in `portfolio/`; `Gibson_Portfolio.html` is an archived single-file export.

## Featured work

| Project | What I’m building or exploring | Technologies |
|---|---|---|
| [Shea](https://github.com/mwasgibson/Shea) | A modular, user-sovereign AI agent runtime organized around planning, policy and risk decisions, authorization, controlled execution, verification, recovery, and audit trails. It remains in active development. | Python, SQLite, policy and risk design, Pytest |
| [EpiPredict Kenya AI](https://github.com/mwasgibson/epi-predict-kenya-ai) | A disease-outbreak prediction project organized into frontend, API, and ML services, with database persistence and container-based workflows. | Python, FastAPI, React, scikit-learn, PostgreSQL, Docker |
| [Site Trust Checker](https://github.com/mwasgibson/site-trust-checker) | A browser extension and API that combine website security signals and account for uncertainty in scoring. | Node.js, Express, browser extension APIs |
| [CineStudio](https://github.com/mwasgibson/cinestudio) | An AI-assisted script workstation for screenplay, A/V, and stageplay formats, with storyboard timing, a multi-track timeline, and post-production exports. | React, TypeScript, Express, Gemini API |
| [LogHub](https://github.com/mwasgibson/loghub) | A multi-project log and metrics viewer planned across web, mobile, and CLI clients. | Next.js, Docker, observability architecture |
| [Quilroom](https://github.com/mwasgibson/quilroom) | A self-hosted real-time collaborative document editor for a local network, with presence, autosave, and QR-assisted sharing. | React, Quill, Yjs, Fastify, SQLite, Docker |
| [Lab](https://github.com/mwasgibson/lab) | An experimental AR and spatial-preview concept exploring browser-based 3D presentation. | React, Three.js, model-viewer, Vite |
| [FileConv / Grubber](https://github.com/mwasgibson/grubber) | A Python command-line file conversion tool built around a converter registry, MIME-type resolution, and specialist backends. | Python, Typer, Pillow, LibreOffice |
| [IoT DDoS Detection](https://github.com/mwasgibson/IoT-ddos-detection) | Research into network traffic monitoring, anomaly detection, DDoS-pattern identification, and defensive alerting for IoT environments. | Python, network analysis, IoT security |

## Community collaboration

I’m collaborating around the [SCAAI Desktop community](https://github.com/Nooran3994/SCAAI-COMMUNITY) through release testing, documenting onboarding and persistence observations, reporting reproducible behavior, and providing feedback on community documentation and roadmap discussions. The public community repository contains releases and coordination materials; it does not publish the desktop application’s source code.

## Skills I’m developing

- **Languages and web:** Python, JavaScript, TypeScript, HTML, CSS, PHP, SQL
- **Frameworks and data:** React, Node.js, Express, FastAPI, scikit-learn, SQLite, PostgreSQL
- **Engineering practices:** REST APIs, automated testing, Docker, Kubernetes, Git and GitHub, security analysis, technical documentation
- **Areas of focus:** AI systems, machine learning, cybersecurity, observability, collaborative software, developer tooling, and research-driven engineering

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

Use Python's built-in server from the repository root:

```bash
python3 -m http.server 8000
```

Then open [http://localhost:8000/portfolio/index.html](http://localhost:8000/portfolio/index.html).

You can also use a static server such as `npx serve portfolio`. No frontend build step is required for the current static site.

## Editing and checks

- Update page content in `portfolio/*.html`.
- Update shared styles in `portfolio/assets/css/`.
- Update interactions in `portfolio/assets/js/`.
- Preview the site at desktop and mobile widths after changes, and check navigation, project links, and asset paths.

The portfolio is hand-authored and repeats some navigation and footer markup across pages. The `portfolio/` directory is the source of truth; the archived single-file export may not reflect later changes.

## Contact

- Website: [gibson.dev](https://gibson.dev)
- GitHub: [@mwasgibson](https://github.com/mwasgibson)
- Email: mwangigibson71@gmail.com
