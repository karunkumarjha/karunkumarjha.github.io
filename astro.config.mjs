import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://karun.me',
  output: 'static',
  build: {
    assets: 'assets'
  }
});
