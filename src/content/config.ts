import { defineCollection, z } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';

// Docs collection — powers the Starlight documentation/tutorial site
const docs = defineCollection({
  schema: docsSchema(),
});

// Blog collection — powers the /blog route
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Curbox Team'),
    tags: z.array(z.string()).default([]),
    image: z
      .object({
        src: z.string(),
        alt: z.string(),
      })
      .optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { docs, blog };
