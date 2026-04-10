# Curbox — Documentation & Blog Website

A combined documentation and blogging website for [Curbox](https://github.com/curbox-app/curbox), a free and open-source Android app for screentime reduction and digital well-being.

Built with **Astro + Starlight**, **Tailwind CSS**, and **MDX**. Designed with a minimalist, calming aesthetic that mirrors the app's philosophy.

---

## 🌿 Tech Stack

| Tool | Purpose |
|------|---------|
| [Astro](https://astro.build) | Framework — zero-JS-by-default |
| [Starlight](https://starlight.astro.build) | Documentation theme & sidebar |
| [Tailwind CSS](https://tailwindcss.com) | Utility-first styling |
| [MDX](https://mdxjs.com) | Markdown + JSX for tutorials |
| [Pagefind](https://pagefind.app) | Static, offline-first search |
| [Cloudflare Pages](https://pages.cloudflare.com) / [Vercel](https://vercel.com) | Deployment |

---

## 📁 Directory Structure

```
curbox-blogs/
├── public/
│   ├── _headers          # Cloudflare Pages security headers
│   └── favicon.svg
├── src/
│   ├── assets/           # Logo SVGs
│   ├── content/
│   │   ├── config.ts     # Content collection schemas (docs + blog)
│   │   ├── docs/         # Starlight tutorial content (MDX)
│   │   │   ├── getting-started/
│   │   │   │   ├── installation.mdx
│   │   │   │   ├── initial-setup.mdx
│   │   │   │   └── first-session.mdx
│   │   │   ├── core-features/
│   │   │   │   ├── app-limits.mdx
│   │   │   │   ├── deep-work-mode.mdx
│   │   │   │   └── analytics.mdx
│   │   │   └── advanced/
│   │   │       ├── shizuku.mdx
│   │   │       └── customizing-ui.mdx
│   │   └── blog/         # Blog posts (Markdown / MDX)
│   │       ├── digital-burnout-signs.md
│   │       ├── dopamine-detox.md
│   │       └── release-notes-v1-2-0.md
│   ├── pages/
│   │   ├── index.astro         # Custom landing page
│   │   ├── about/index.astro   # About / FOSS mission
│   │   ├── contribute/index.astro
│   │   └── blog/
│   │       ├── index.astro     # Blog listing
│   │       ├── [...slug].astro # Blog post template
│   │       └── rss.xml.ts      # RSS feed
│   └── styles/
│       └── custom.css    # Starlight theme overrides
├── astro.config.mjs
├── tailwind.config.cjs
├── tsconfig.json
└── vercel.json
```

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 🎨 Design System

**Palette**
- Background: `#F9F9F9` (soft off-white)
- Accent: `#8A9A5B` (Sage Green)
- Text: `#333333` (deep charcoal)

**Typography**
- Body: Inter (sans-serif)
- Headings: Merriweather (serif)
- Code: JetBrains Mono

---

## 🤝 Contributing

See [CONTRIBUTING](https://github.com/curbox-app/curbox/blob/main/CONTRIBUTING.md) for the main app, or open an issue in this repo to improve the documentation.

## 📄 License

Apache 2.0 — see [LICENSE](./LICENSE).