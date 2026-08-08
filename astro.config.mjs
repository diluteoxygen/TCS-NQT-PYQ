// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://tcs.oxycodes.online',
  base: '/',
  build: {
    format: 'file'
  },
  integrations: [sitemap()],
  trailingSlash: 'never',
});
