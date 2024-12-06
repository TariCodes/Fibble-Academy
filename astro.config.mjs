import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel/serverless';

// import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  prefetch:{
    prefetchAll: true
  }
});