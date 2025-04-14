import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vite.dev/config/
export default defineConfig({
  base: '/real-estate/',
  plugins: [react(), viteStaticCopy({
    targets: [
      { src: 'src/assets/*', dest: 'assets/' }
    ]
  }), tailwindcss()],
})
