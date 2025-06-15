import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      jpeg: {
        quality: 80,
      },
      jpg: {
        quality: 80,
      },
      png: {
        quality: 80,
      },
    }),
  ],
})
