import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// Canonical site + project identifiers, used for SEO + AI/LLM discoverability.
// This is the documentation subsite, served at curbox.app/docs/.
const SITE_URL = 'https://curbox.app/docs/';
const REPO_URL = 'https://github.com/nethical6/curbox';
const SITE_DESCRIPTION =
  'Curbox is a free, open-source (FOSS) Android app for reducing screentime and building healthier digital habits. It blocks or slows down distracting apps, short-form video (Reels/Shorts), and websites — entirely on-device, with no internet permission and no data collection.';

// Site-wide structured data (schema.org JSON-LD) emitted on every documentation
// page so search engines and AI answer engines can identify the project, its
// license, and where to download it.
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}#organization`,
      name: 'Curbox',
      url: SITE_URL,
      logo: `${SITE_URL}favicon.svg`,
      sameAs: [REPO_URL],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}#website`,
      url: SITE_URL,
      name: 'Curbox',
      description: SITE_DESCRIPTION,
      inLanguage: 'en',
      publisher: { '@id': `${SITE_URL}#organization` },
    },
    {
      '@type': 'SoftwareApplication',
      '@id': `${SITE_URL}#app`,
      name: 'Curbox',
      operatingSystem: 'Android',
      applicationCategory: 'UtilitiesApplication',
      description: SITE_DESCRIPTION,
      url: SITE_URL,
      downloadUrl: `${REPO_URL}/releases/latest`,
      author: { '@id': `${SITE_URL}#organization` },
      isAccessibleForFree: true,
      license: 'https://www.gnu.org/licenses/gpl-3.0.html',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
  ],
};

// https://astro.build/config
export default defineConfig({
  // Served as a subsite under the main custom domain (curbox.app/docs/).
  site: 'https://curbox.app',
  base: '/docs',
  integrations: [
    sitemap({
      // Help crawlers understand freshness and crawl cadence.
      changefreq: 'weekly',
      lastmod: new Date(),
    }),
    starlight({
      title: 'Curbox',
      description: SITE_DESCRIPTION,
      logo: {
        light: './src/assets/curbox-logo-light.svg',
        dark: './src/assets/curbox-logo-dark.svg',
        replacesTitle: false,
      },
      favicon: '/favicon.svg',
      social: {
        github: REPO_URL,
      },
      // Injected into <head> of every docs page for SEO + AI/LLM crawling.
      head: [
        {
          tag: 'meta',
          attrs: {
            name: 'robots',
            content:
              'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
          },
        },
        {
          tag: 'script',
          attrs: { type: 'application/ld+json' },
          content: JSON.stringify(structuredData),
        },
      ],
      customCss: [
        './src/styles/custom.css',
      ],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'What Is Curbox', slug: 'getting-started/what-is-curbox' },
            { label: 'Set Up Curbox', slug: 'getting-started/setup' },
          ],
        },
        {
          label: 'Focus',
          items: [
            { label: 'Focus Mode', slug: 'focus/focus-mode' },
          ],
        },
        {
          label: 'Reducers',
          items: [
            { label: 'Overview', slug: 'reducers/overview' },
            { label: 'App Pause', slug: 'reducers/app-pause' },
            { label: 'Short-Form Video Content', slug: 'reducers/short-form-video' },
            { label: 'Keywords and Websites', slug: 'reducers/keyword-blocker' },
            { label: 'Hide UI Elements', slug: 'reducers/hide-ui-elements' },
            { label: 'Auto DND', slug: 'reducers/auto-dnd' },
            { label: 'Mindful Messages', slug: 'reducers/mindful-messages' },
            { label: 'Short-Form Video Counter', slug: 'reducers/video-counter' },
            { label: 'Grayscale Filter', slug: 'reducers/grayscale' },
          ],
        },
        {
          label: 'Unlock Challenges',
          items: [
            { label: 'Overview', slug: 'unlock-challenges/overview' },
          ],
        },
        {
          label: 'Usage',
          items: [
            { label: 'Usage Stats', slug: 'usage/usage-stats' },
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