# Repository Guide (`dirshaye.dev`)

Personal software engineering portfolio for Dirshaye Faltamo, built as a static multi-page **Vite + strict TypeScript** site and deployed on **Cloudflare Workers (Static Assets)** at `dirshaye.dev`.

## Project Structure

- `index.html` — Main portfolio entry point (Home, About, Experience, Projects, Skills, Education, Contact).
- `visit-wolaita.html` — Standalone case study page loaded inside the GLightbox modal. Add any future case study HTML entries at repo root and register them in `vite.config.ts` (`build.rollupOptions.input`).
- `src/main.ts` — Strict TypeScript entrypoint for `index.html` (hash-based section navigation, mobile nav toggle, GLightbox initialization).
- `src/case-study.ts` — Stylesheet entrypoint for case study pages.
- `src/styles/main.css` — Theme styles and CSS custom properties (`:root` design tokens).
- `public/` — Static assets copied verbatim into `dist/` without hashing:
  - `public/favicon.svg` — Site favicon.
  - `public/assets/resume/resume.pdf` — Active resume served at `/assets/resume/resume.pdf`.
  - `public/assets/img/` — Profile, background, and project preview images.
- `wrangler.jsonc` — Cloudflare Workers Static Assets configuration serving `./dist`.

## Development Commands

Requires **Node.js 22+** (Node 24 recommended).

```bash
npm install          # Install dependencies
npm run dev          # Start Vite dev server with HMR
npm run typecheck    # Run strict TypeScript check (tsc --noEmit)
npm run build        # Typecheck and build production bundle to dist/
npm run preview      # Preview production build locally
npm run deploy       # Build and deploy to Cloudflare Workers via Wrangler
```

Always run `npm run build` before committing changes to verify TypeScript types and the production bundle.

## Engineering Conventions

- **TypeScript**: Keep `strict: true` and `noUncheckedIndexedAccess: true` in `tsconfig.json`. Avoid `any`, prefer narrow DOM element generics (`document.querySelector<HTMLElement>(...)`), and guard nullable DOM queries explicitly.
- **No vendored libraries in git**: Manage third-party libraries (Bootstrap CSS, Bootstrap Icons, Boxicons, GLightbox) through `package.json`—never commit vendor bundles into `public/` or `assets/`.
- **Styling**: Use CSS custom properties and semantic classes in `src/styles/main.css`. Avoid inline `style="..."` attributes in HTML.
- **Navigation**: Section switching is hash-driven (`#about`, `#experience`, `#portfolio`, `#skills`, `#education`, `#contact`) via `history.pushState` and `popstate` so page reloads stay on the active section.
- **External links**: Always include `target="_blank" rel="noopener noreferrer"` on external links.

## Content & Copy Guidelines

- Keep **Experience**, **Projects**, **Skills**, and **Education** aligned with `public/assets/resume/resume.pdf`.
- Write in plain, human prose: avoid em-dashes (`—`), hype adjectives, and excessive inline bolding in body paragraphs (especially in the About section).
- Do not publish links to private GitHub repositories.

## Deployment

Deployed via **Cloudflare Workers Builds** connected to `main` using `wrangler.jsonc` (`npm run build` → `npx wrangler deploy`), serving `./dist` as Workers Static Assets on `dirshaye.dev`.
