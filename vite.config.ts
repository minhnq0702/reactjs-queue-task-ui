import react from '@vitejs/plugin-react-swc';
import * as path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    // * Bundle config
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          // react: ['react'],
          // axios: ['axios'],
          // redux: ['redux'],
          store: ['@/models/store'],
          'react-dom': ['react-dom'],
        },
      },
    },
  },
});
