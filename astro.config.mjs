// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://wildcatwashers.com',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/thank-you'),
      changefreq: 'weekly',
      lastmod: new Date(),
    }),
  ],
  build: { inlineStylesheets: 'auto', format: 'directory' },
  image: { responsiveStyles: true },
  prefetch: { prefetchAll: false, defaultStrategy: 'hover' },
  compressHTML: true,
});
