<template>
  <div class="wrapper" ref="wrapper">
    <div class='z-10'>
        <Page backgroundColor="#FCF200">
            <Home></Home>
        </Page>
    </div>
    <div class="page-contianer z-20">
      <slot> </slot>
    </div>

  </div>
</template>

<script lang="ts" setup>
import BScroll from "@better-scroll/core";
import ScrollBar from "@better-scroll/scroll-bar";
import MouseWheel from "@better-scroll/mouse-wheel";
import { onBeforeUnmount, onMounted, ref } from "@vue/runtime-core";
import Page from "../Page/index.vue";
import Home from "../../views/Home/index.vue";
BScroll.use(ScrollBar);
BScroll.use(MouseWheel);
const wrapper = ref<HTMLElement>();
const scroller = ref();
onMounted(() => {
  wrapper.value
    ? (scroller.value = new BScroll(".wrapper", {
        probeType: 3,
        mouseWheel: {
          speed: 10,
          invert: false,
          easeTime: 500,
        },
        specifiedIndexAsContent: 1,
        scrollbar: true,
      }))
    : "";
    scroller.value.on('contentChanged', (newContent: HTMLElement) => {  
 })
});

onBeforeUnmount(()=>{
    scroller.value.destroy()
})
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
