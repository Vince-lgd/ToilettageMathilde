import { defineConfig } from 'vite'           // <-- depuis Vite
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url' // <-- uniquement pour alias
// import vueDevTools from 'vite-plugin-vue-devtools' // uniquement en dev

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    outDir: 'dist'
  },
  base: './'
})
