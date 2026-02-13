import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

export default defineConfig({
  site: 'https://onethousandmeans.com',
  output: 'static',
  adapter: node({
    mode: 'standalone'
  }),
  build: {
    format: 'directory'
  }
});
