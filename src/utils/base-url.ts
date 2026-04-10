/**
 * Returns the site base URL, always with a trailing slash.
 * Handles both Astro 5 behavior (BASE_URL without trailing slash)
 * and earlier behavior (with trailing slash).
 */
export const base: string = import.meta.env.BASE_URL.replace(/\/?$/, '') + '/';
