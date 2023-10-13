import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/v1/book': {
        target: 'http://5.22.217.225:8081',
        changeOrigin: true,
      },
    },
  },
});
