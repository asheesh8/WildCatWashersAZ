// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { pendingUrls } from './src/data/areas.ts';

export default defineConfig({
  site: 'https://wildcatwashers.com',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/thank-you') && !pendingUrls.some((u) => page.endsWith(u)),
      changefreq: 'weekly',
      lastmod: new Date(),
    }),
  ],
  build: { inlineStylesheets: 'always', format: 'directory' },
  image: { responsiveStyles: true },
  prefetch: { prefetchAll: false, defaultStrategy: 'hover' },
  compressHTML: true,
});
