<script  setup lang="ts">
import Scrollview from './layouts/Scrollview/index.vue';
import {onMounted, ref,defineAsyncComponent,getCurrentInstance,defineComponent, Component} from 'vue'
import Page from './layouts/Page/index.vue';
import LoadingPage from './views/Loading.vue'
import ErrorPage from './views/Error.vue'
import { useElementVisibility } from '@vueuse/core'
import Home from './views/Home.vue';
import { usescrollController } from './layouts/Scrollview/scrollController';
// import Solution from './views/Solution.vue';
const Solution = defineAsyncComponent(()=>import(`./views/Solution.vue`))
const NioUi = defineAsyncComponent(()=>import(`./views/NioUi.vue`))
const {Scroller} = usescrollController()

const show = ref(true)
const clicked =()=>{
  console.log(111)
  show.value = !show.value
}


  // Scroller.value.trigger('scroll',()=>{
  //   console.log('我到ui2了');
    
  // })
onMounted(()=>{

    //  const targetIsVisible = useElementVisibility(Scroller.value.content.children[2)
  // Scroller.value.scrollToElement('#nio-ui2',1300,0,0)

  // Scroller.value.disable()
  // setTimeout(()=>{
  //   Scroller.value.enable()
  // },3000)
})

</script>

<template>
  <div class="app" ref='app'>

    <Scrollview >
          <Page id="solution">
            <Suspense  v-if='show'>
              <template #default>
                <Solution></Solution>
              </template>
              <template #fallback>
                <LoadingPage></LoadingPage>
              </template>
            </Suspense>
          </Page>
          <Page id="nio-ui">
              <NioUi></NioUi>
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

