# Curbox — Documentation

The documentation site for [Curbox](https://github.com/nethical6/curbox), a free and open-source (FOSS) Android app for reducing screentime and building healthier digital habits.

Built with **Astro + Starlight**, **Tailwind CSS**, and **MDX**. Designed with a minimalist, calming aesthetic that mirrors the app's philosophy.

This is the documentation subsite only. It is published to **GitHub Pages** and served at **[curbox.app/docs](https://curbox.app/docs)**. The marketing landing page lives in the main site repo (`curbox-app.github.io`, which holds the `curbox.app` custom domain); this repo is a separate project repo named `docs`, which GitHub Pages automatically serves under the `/docs` path.

---

## 🌿 Tech Stack

| Tool | Purpose |
|------|---------|
| [Astro](https://astro.build) | Framework — zero-JS-by-default |
| [Starlight](https://starlight.astro.build) | Documentation theme & sidebar |
| [Tailwind CSS](https://tailwindcss.com) | Utility-first styling |
| [MDX](https://mdxjs.com) | Markdown + JSX for docs |
| [Pagefind](https://pagefind.app) | Static, offline-first search |
| [GitHub Pages](https://pages.github.com) | Deployment (via `.github/workflows/deploy.yml`) |

---

## 📁 Directory Structure

```
docs/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/                 # Logo SVGs
│   ├── content/
│   │   ├── config.ts           # Content collection schema (docs only)
│   │   └── docs/               # Starlight content (MDX)
│   │       ├── assets/         # Screenshots used in the docs
│   │       ├── getting-started/
│   │       ├── focus/
│   │       ├── reducers/
│   │       ├── unlock-challenges/
│   │       └── usage/
│   ├── pages/
│   │   └── index.astro         # Redirects /docs/ into the first doc page
│   ├── styles/
│   │   └── custom.css          # Starlight theme overrides
│   └── utils/
│       └── base-url.ts
├── astro.config.mjs            # `base: '/docs'`, sidebar, SEO/JSON-LD
├── tailwind.config.cjs
└── tsconfig.json
```

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:4321/docs/)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 🚢 Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages.

The `/docs` path comes from the `base: '/docs'` setting in `astro.config.mjs` combined with this repo being named `docs`. **Do not add a `CNAME` file to this repo** — the `curbox.app` custom domain belongs to the main `curbox-app.github.io` repo. Adding one here would attempt to claim the apex domain and break routing.

---

## 🎨 Design System

**Palette**
- Background: `#F9F9F9` (soft off-white)
- Accent: `#8A9A5B` (Sage Green)
- Text: `#333333` (deep charcoal)

**Typography**
- Body: Inter (sans-serif)
- Headings: Merriweather (serif)

---

## 🤝 Contributing

See [CONTRIBUTING](https://github.com/nethical6/curbox/blob/main/CONTRIBUTING.md) for the main app, or open an issue in this repo to improve the documentation. Writing conventions are documented in [`DOCS_WRITING_GUIDE.md`](./DOCS_WRITING_GUIDE.md).

## 📄 License

GPL-3.0 — see [LICENSE](./LICENSE).
