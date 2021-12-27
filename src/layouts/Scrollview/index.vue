<template>
  <div class="wrapper slide-wrapper" ref="wrapper">
    <div class='z-10'>
        <Page  id='cover' cover>
            <Home></Home>
        </Page>
    </div>
    <div class="page-contianer slide-content z-20" ref="children">
      <slot > </slot>
    </div>
 
  </div>
</template>

<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref } from "@vue/runtime-core";
import Page from "../Page/index.vue";
import Home from "../../views/Home.vue";
import { usescrollController } from "./scrollController";



const wrapper = ref<HTMLElement>();
const children = ref()
const { doInitScroll,destoryScroll,Scroller } =usescrollController()
onMounted(() => {
    doInitScroll('.wrapper')
    // Scroller.value.on('scroll',()=>{
    //     console.log(111);
        
    // })
    });
onBeforeUnmount(()=>destoryScroll())
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
