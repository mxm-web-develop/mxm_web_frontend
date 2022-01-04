import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import importToCDN from 'vite-plugin-cdn-import'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    importToCDN({
    modules:[
     { 
        name:'dayjs',
        var:'dayjs',
        path:'https://cdn.jsdelivr.net/npm/dayjs@1.10.7/dayjs.min.js'
      },
      {
        name:'vueuse',
        var:'@vueuse/core',
        path:'https://cdn.jsdelivr.net/npm/@vueuse/core@7.4.1/index.mjs'
      }
    ]
    }),
    Components({
      resolvers: [
        AntDesignVueResolver(),
      ],
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
