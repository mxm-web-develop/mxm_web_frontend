<script  setup lang="ts">
import Scrollview from './layouts/Scrollview/index.vue';
import {onMounted, ref,defineAsyncComponent,getCurrentInstance,defineComponent, Component} from 'vue'
import Page from './layouts/Page/index.vue';
import LoadingPage from './components/Loading.vue'
import ErrorPage from './views/Error.vue'
import { useElementVisibility } from '@vueuse/core'
import Home from './views/Home.vue';
import { usescrollController } from './layouts/Scrollview/scrollController';
import Cli from './views/Cli.vue';
import Knowledge from './views/Knowledge.vue';
import Toolbar from './components/toolbar.vue';
// import Solution from './views/Solution.vue';
const Solution = defineAsyncComponent(()=>import(`./views/Solution.vue`))
const NioUi = defineAsyncComponent(()=>import(`./views/NioUi.vue`))
const Library = defineAsyncComponent(()=>import(`./views/Library.vue`))

const {Scroller} = usescrollController()

const show = ref(false)

onMounted(()=>{
  setTimeout(()=>{
    Scroller.value.enable()
  },800)
  Scroller.value.on('enable', ()=> {
    console.log('可以滑动了');
    
    show.value = true
  })
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
            <Library ></Library>
          </Page>
          <Page id="cli" v-if="show">
            <Cli></Cli>
          </Page>
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

