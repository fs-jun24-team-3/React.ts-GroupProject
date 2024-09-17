import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/React.ts-GroupProject',
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "src/styles/utils/utils.scss";`,
      },
    },
  },
});
