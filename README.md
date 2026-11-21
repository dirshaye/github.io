# Dirshaye Faltamo - Software Engineering Portfolio

Personal portfolio for **Dirshaye Faltamo**, Software Engineer at **Emma - The Sleep Company** (Emma Connect team, Operations Backbone domain) and Co-Founder of **Scale Labs**.

- **Live Website**: [https://dirshaye.dev](https://dirshaye.dev)

---

## Stack

- **Build & Tooling**: [Vite](https://vite.dev/) + strict **TypeScript**
- **UI & Icons**: Bootstrap 5 CSS, Bootstrap Icons, Boxicons, GLightbox
- **Hosting & CI/CD**: GitHub Pages via GitHub Actions with custom domain DNS on Cloudflare (`dirshaye.dev`)

---

## Repository Structure

```text
├── .github/workflows/deploy.yml   # CI typecheck, build, and GitHub Pages deploy
├── AGENTS.md                      # Engineering & content conventions
├── index.html                     # Main portfolio page
├── visit-wolaita.html             # Visit Wolaita case study modal page
├── package.json
├── tsconfig.json
├── vite.config.ts
├── public/
│   ├── CNAME                      # dirshaye.dev
│   ├── .nojekyll
│   ├── favicon.svg
│   └── assets/
│       ├── img/                   # Profile, background, and project images
│       └── resume/resume.pdf      # Downloadable resume
└── src/
    ├── main.ts                    # Hash-based section router, mobile nav, GLightbox
    ├── case-study.ts              # Case study page stylesheet entry
    └── styles/
        └── main.css               # Design tokens and section styles
```

---

## Local Development

Requires **Node.js 22+**:

```bash
npm install
npm run dev
```

To typecheck and build for production:

```bash
npm run typecheck
npm run build
npm run preview
```

---

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which typechecks with `tsc --noEmit`, builds `dist/` with Vite, and deploys automatically to **GitHub Pages** (`dirshaye.dev`).
