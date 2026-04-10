/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Primary background — soft off-white
        'cb-bg': '#F9F9F9',
        // Accent — Sage Green
        'cb-accent': '#8A9A5B',
        'cb-accent-hover': '#7A8A4B',
        'cb-accent-light': '#EEF2E6',
        // Text — deep charcoal
        'cb-text': '#333333',
        'cb-text-muted': '#666666',
        'cb-text-subtle': '#999999',
        // Surface — cards, panels
        'cb-surface': '#FFFFFF',
        'cb-surface-raised': '#F3F4F6',
        // Border
        'cb-border': '#E5E7EB',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'Cambria', 'Times New Roman', 'serif'],
      },
      fontSize: {
        // Fluid type scale
        'display': ['clamp(2rem, 5vw, 3.5rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'heading': ['clamp(1.5rem, 3vw, 2.25rem)', { lineHeight: '1.25', letterSpacing: '-0.015em' }],
      },
      maxWidth: {
        'prose-wide': '72ch',
        'layout': '1100px',
      },
      borderRadius: {
        'xl': '0.875rem',
        '2xl': '1.25rem',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out both',
        'slide-up': 'slideUp 0.6s ease-out both',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
