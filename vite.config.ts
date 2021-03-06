import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import importToCDN,{autoComplete} from 'vite-plugin-cdn-import'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // importToCDN({
    //   modules:[autoComplete('vue'),autoComplete('@vueuse/core')
    // ]
    // }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
],
  build:{
    outDir:'mxmweb'
  },
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
        // target:"http://localhost:3333",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
})
