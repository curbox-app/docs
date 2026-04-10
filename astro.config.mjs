import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://curbox-app.github.io',
  base: '/blogs',
  integrations: [
    sitemap(),
    starlight({
      title: 'Curbox',
      description: 'Regain your focus. A FOSS Android app for screentime reduction and digital well-being.',
      logo: {
        light: './src/assets/curbox-logo-light.svg',
        dark: './src/assets/curbox-logo-dark.svg',
        replacesTitle: false,
      },
      favicon: '/favicon.svg',
      social: {
        github: 'https://github.com/curbox-app/curbox',
      },
      customCss: [
        './src/styles/custom.css',
      ],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Installation', slug: 'getting-started/installation' },
            { label: 'Initial Setup', slug: 'getting-started/initial-setup' },
            { label: 'Your First Focused Session', slug: 'getting-started/first-session' },
          ],
        },
        {
          label: 'Core Features',
          items: [
            { label: 'Setting App Limits', slug: 'core-features/app-limits' },
            { label: "Using 'Deep Work' Mode", slug: 'core-features/deep-work-mode' },
            { label: 'Understanding Your Analytics', slug: 'core-features/analytics' },
          ],
        },
        {
          label: 'Advanced Guides',
          items: [
            { label: 'Configuring Shizuku for Curbox', slug: 'advanced/shizuku' },
            { label: 'Customizing the Calming UI', slug: 'advanced/customizing-ui' },
          ],
        },
      ],
    }),
    tailwind({
      // Disable the default base styles so Starlight's styles take precedence
      applyBaseStyles: false,
    }),
    mdx(),
    react(),
  ],
});
