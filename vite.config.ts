import { fileURLToPath, URL } from 'node:url';
import type { ViteSSGOptions } from 'vite-ssg';

import { defineConfig } from 'vite';
import imagemin from 'vite-plugin-imagemin';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), imagemin()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  optimizeDeps: {
    exclude: ['@faker-js/faker'],
    esbuildOptions: {
      target: 'es2022',
    },
  },

  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  ssgOptions: {
    formatting: 'minify',
    dirStyle: 'nested',
    mock: true,
    format: 'esm',
  } as ViteSSGOptions,
});
