import { fileURLToPath, URL } from 'node:url';

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
});
