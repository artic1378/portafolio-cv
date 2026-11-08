import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const site = process.env.PUBLIC_SITE_URL || 'https://portafolio-cv.pages.dev';

export default defineConfig({
  site,
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
  output: 'static',
});
