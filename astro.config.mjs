// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://braxsglobal.com',
  output: 'static',
  compressHTML: true,
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
  integrations: [sitemap()],
  prefetch: {
    prefetchAll: true
  },
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false
    }
  }
});
