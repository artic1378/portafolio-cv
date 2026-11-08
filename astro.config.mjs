import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const site = process.env.PUBLIC_SITE_URL || 'https://artic1378.github.io';

export default defineConfig({
  site,
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
  output: 'static',
});
