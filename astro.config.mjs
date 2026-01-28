import { defineConfig } from 'astro/config';

// For custom domain (karun.me), change site to 'https://karun.me'

export default defineConfig({
  site: 'https://karunkumarjha.github.io',
  output: 'static',
  build: {
    assets: 'assets'
  }
});
