// astro.config.mjs
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

/** @type {import('astro').AstroUserConfig} */
export default defineConfig({
  integrations: [
    react(),
  ],
  vite: {
    resolve: {
      alias: {
        '@components': '/src/components',
        '@utils': '/src/utils',
      },
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        entryFileNames: 'js/[name].[hash].js',
        chunkFileNames: 'js/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash][extname]',
      },
    },
  }

});