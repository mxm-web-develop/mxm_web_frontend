<script  setup lang="ts">
import Scrollview from './layouts/Scrollview/index.vue';
import {onMounted, ref,defineAsyncComponent,getCurrentInstance,defineComponent, Component} from 'vue'
import Page from './layouts/Page/index.vue';
import LoadingPage from './components/Loading.vue'


import Serve from './views/Serve.vue';
import Knowledge from './views/Knowledge.vue';
import Footer from './layouts/Footer.vue';

const Solution = defineAsyncComponent(()=>import(`./views/Solution.vue`))
const NioUi = defineAsyncComponent(()=>import(`./views/NioUi.vue`))
const Library = defineAsyncComponent(()=>import(`./views/Library.vue`))
const show = ref(false)

onMounted(()=>{
  setTimeout(()=>{
      show.value = true
  },50)
})

</script>

<template>
  <div class="app" ref='app'>
         <!-- <Toolbar></Toolbar> -->
      <Scrollview >
          <Page id="solution" v-if="show">
            <Suspense>
              <template #default>
                <Solution></Solution>
              </template>
              <template #fallback>
                <LoadingPage text='MxM架构方案'></LoadingPage>
              </template>
            </Suspense>
          </Page>
          <Page id="ui" v-if="show">
              <NioUi></NioUi>
          </Page>
          <Page id="knowledge" v-if="show">
            <Knowledge></Knowledge>
          </Page>
          <Page id="lib" v-if="show">
            <Suspense>
              <template #default>
                <Library></Library>
              </template>
              <template #fallback>
                <LoadingPage text='MxM工具包'></LoadingPage>
              </template>
            </Suspense>
          </Page>
          <Page id="cli" v-if="show">
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

