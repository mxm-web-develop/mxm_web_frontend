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
      "@assets":resolve(__dirname,"src/assets"),
      "@components":resolve(__dirname,"src/components")
    }
  },
  server:{
    proxy:{
      '/api':{
        target:"http://47.114.177.31:3333",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
})
