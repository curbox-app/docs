import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );

  // Build the full base URL (e.g. https://curbox-app.github.io/blogs/)
  const siteWithBase = context.site
    ? new URL(import.meta.env.BASE_URL.replace(/\/?$/, '') + '/', context.site).href
    : 'https://curbox-app.github.io/blogs/';

  return rss({
    title: 'Curbox Blog — Digital Well-being Insights',
    description:
      'Thoughts on mindful technology, the science of focus, and building healthier digital habits.',
    site: siteWithBase,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `blog/${post.slug}/`,
      categories: post.data.tags,
      author: post.data.author,
    })),
    customData: `<language>en-us</language>`,
    stylesheet: false,
  });
}
