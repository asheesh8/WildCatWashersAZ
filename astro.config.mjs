// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.wildcatwashers.com',
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
  prefetch: { prefetchAll: true, defaultStrategy: 'viewport' },
  compressHTML: true,
  vite: { optimizeDeps: { include: ['three', 'three/addons/environments/RoomEnvironment.js'] } },
});
