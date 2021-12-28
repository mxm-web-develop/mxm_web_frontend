<template>
  <div class="wrapper slide-wrapper" ref="wrapper">
    <div class='z-10'>
        <Page id='cover' cover>
            <Home @onLoaderFinish='onLoaderFinish'></Home>
        </Page>
    </div>
    <div class="page-contianer slide-content z-20" ref="children">
      <slot > </slot>
    </div>
 
  </div>
</template>

<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref,defineAsyncComponent } from "@vue/runtime-core";
import { useWindowSize } from "@vueuse/core";
import { watch } from "vue";
import Page from "../Page/index.vue";
// import Home from "../../views/Home.vue";

import { usescrollController } from "./scrollController";
const Home = defineAsyncComponent(()=>import(`../../views/Home.vue`))
const {width}= useWindowSize()

const wrapper = ref<HTMLElement>();
const children = ref()
const scrollEnabled = ref<boolean>();
const { doInitScroll,destoryScroll,Scroller } =usescrollController()
onMounted(() => {
    doInitScroll('.wrapper')
    Scroller.value.disable()
    watch(scrollEnabled,()=>{
       Scroller.value.refresh()
       Scroller.value.enable()
    })
    watch(width,(valN)=>{
      Scroller.value.refresh()
    })
});
const onLoaderFinish = (val:boolean) =>{
  scrollEnabled.value =val
}
// onBeforeUnmount(()=>destoryScroll())
</script>
<style>
.wrapper {
  height: 100vh;
  width: 100%;
  position: relative;
}
.page-contianer {
  height: auto;
  width: 100%;
}
</style>
