// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://oxy.github.io',
  base: '/TCS-NQT-PYQ-QUESTIONS',
  integrations: [sitemap()],
  trailingSlash: 'never',
});
