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
            { label: 'What Is Curbox', slug: 'docs/getting-started/what-is-curbox' },
            { label: 'Set Up Curbox', slug: 'docs/getting-started/setup' },
          ],
        },
        {
          label: 'Focus',
          items: [
            { label: 'Focus Mode', slug: 'docs/focus/focus-mode' },
          ],
        },
        {
          label: 'Reducers',
          items: [
            { label: 'Overview', slug: 'docs/reducers/overview' },
            { label: 'App Pause', slug: 'docs/reducers/app-pause' },
            { label: 'Short-Form Video Content', slug: 'docs/reducers/short-form-video' },
            { label: 'Keywords and Websites', slug: 'docs/reducers/keyword-blocker' },
            { label: 'Hide UI Elements', slug: 'docs/reducers/hide-ui-elements' },
            { label: 'Auto DND', slug: 'docs/reducers/auto-dnd' },
            { label: 'Mindful Messages', slug: 'docs/reducers/mindful-messages' },
            { label: 'Short-Form Video Counter', slug: 'docs/reducers/video-counter' },
            { label: 'Grayscale Filter', slug: 'docs/reducers/grayscale' },
          ],
        },
        {
          label: 'Unlock Challenges',
          items: [
            { label: 'Overview', slug: 'docs/unlock-challenges/overview' },
          ],
        },
        {
          label: 'Usage',
          items: [
            { label: 'Usage Stats', slug: 'docs/usage/usage-stats' },
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
