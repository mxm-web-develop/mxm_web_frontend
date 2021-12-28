<script  setup lang="ts">
import Scrollview from './layouts/Scrollview/index.vue';
import {onMounted, ref,defineAsyncComponent,getCurrentInstance,defineComponent, Component} from 'vue'
import Page from './layouts/Page/index.vue';
import LoadingPage from './components/Loading.vue'
import { usescrollController } from '@/layouts/Scrollview/scrollController';


import Serve from './views/Serve.vue';
import Knowledge from './views/Knowledge.vue';
import Footer from './layouts/Footer.vue';

const Solution = defineAsyncComponent(()=>import(`./views/Solution.vue`))
const NioUi = defineAsyncComponent(()=>import(`./views/NioUi.vue`))
const Library = defineAsyncComponent(()=>import(`./views/Library.vue`))
const show = ref(false)
// const {Scroller} = usescrollController()
onMounted(()=>{
  console.log('首页挂载');
  
  // Scroller.value.disable()
  setTimeout(()=>{
      show.value = true
  },500)
})

// const appViews = ()=>{
//   const components = import.meta.globEager('./views/*.vue')

// }


</script>

<template>
  <div class="app" ref='app'>
         <!-- <Toolbar></Toolbar> -->
      <Scrollview >
          <Page id="Solutions" v-if="show">
            <Suspense>
              <template #default>
                <Solution></Solution>
              </template>
              <template #fallback>
                <LoadingPage text='MxM架构方案'></LoadingPage>
              </template>
            </Suspense>
          </Page>
          <Page id="MxM Next GUI" v-if="show">
              <NioUi></NioUi>
          </Page>
          <Page id="knowledge" v-if="show">
            <Knowledge></Knowledge>
          </Page>
          <Page id="Knowledge" v-if="show">
            <Suspense>
              <template #default>
                <Library></Library>
              </template>
              <template #fallback>
                <LoadingPage text='MxM工具包'></LoadingPage>
              </template>
            </Suspense>
          </Page>
          <Page id="Servers" v-if="show">
            <Serve></Serve>
          </Page>
          <Footer></Footer>
    </Scrollview>
   </div>
</template>

<style>
.app{
  height: 100vh;
  width: 100%;
  overflow: hidden;
}
</style>

