import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias:{
      "@":resolve(__dirname,"src"),
      "@views":resolve(__dirname,"src/views"),
      "@components":resolve(__dirname,"src/components")
    }
  },
  server:{
    proxy:{
      '/api':{
        target:"http://localhost:9995",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
})
