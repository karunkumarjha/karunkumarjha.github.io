import { defineConfig } from 'astro/config';

// For GitHub Pages without custom domain, use:
// site: 'https://karunkumarjha.github.io',
// base: '/portfolio-website',

// For custom domain (karun.me), use:
// site: 'https://karun.me',
// base: '/',

export default defineConfig({
  site: 'https://karunkumarjha.github.io',
  base: '/portfolio-website/',
  output: 'static',
  build: {
    assets: 'assets'
  }
});
