# Dirshaye Faltamo - Software Engineering Portfolio

Personal portfolio for **Dirshaye Faltamo**, Software Engineer at **Emma - The Sleep Company** (Emma Connect team, Operations Backbone domain) and Co-Founder of **Scale Labs**.

- **Live Website**: [https://dirshaye.dev](https://dirshaye.dev)

---

## Stack

- **Build & Tooling**: [Vite](https://vite.dev/) + strict **TypeScript**
- **UI & Icons**: Bootstrap 5 CSS, Bootstrap Icons, Boxicons, GLightbox
- **Hosting & CI/CD**: Cloudflare Workers (Static Assets) via Cloudflare Workers Builds (`dirshaye.dev`)

---

## Repository Structure

```text
├── AGENTS.md                      # Engineering & content conventions
├── index.html                     # Main portfolio page
├── visit-wolaita.html             # Visit Wolaita case study modal page
├── package.json
├── tsconfig.json
├── vite.config.ts
├── wrangler.jsonc                 # Cloudflare Workers Static Assets config
├── public/
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

To typecheck, build, or deploy:

```bash
npm run typecheck
npm run build
npm run preview
npm run deploy
```

---

## Deployment

Pushing to `main` triggers **Cloudflare Workers Builds**, which runs `npm run build` (`tsc --noEmit && vite build`) and deploys `./dist` to **Cloudflare Workers (Static Assets)** at `dirshaye.dev`.
