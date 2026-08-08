// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://diluteoxygen.github.io',
  base: '/TCS-NQT-PYQ/',
  build: {
    format: 'file'
  },
  integrations: [sitemap()],
  trailingSlash: 'never',
});
