import react from '@vitejs/plugin-react';
import {defineConfig} from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.GITHUB_ACTIONS_BASE ?? '/',
  plugins: [
    svgr({
      svgrOptions: {
        plugins: ['@svgr/plugin-jsx'],
      },
    }),
    react(),
  ],
});
