import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://karunkumarjha.me',
  output: 'static',
  build: {
    assets: 'assets'
  }
});
