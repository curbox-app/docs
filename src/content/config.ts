import { defineCollection } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';

// Docs collection — powers the Starlight documentation site.
const docs = defineCollection({
  schema: docsSchema(),
});

export const collections = { docs };
