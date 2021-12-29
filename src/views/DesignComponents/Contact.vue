<script lang="ts" setup>
import gsap, { Power1, Back, Circ, Power4 } from "gsap";
import Mxm_icon from "@/components/mxm_icon.vue";
// const setPage = async()=>{
//     return new Promise(resolve=>{
//         const data = {}
//         resolve(data)
//     })
// }

const emit = defineEmits(["backReady"]);
// const data= await setPage()
const designPageEnter = () => {
  gsap.from(".Contact", { duration: 0.8, opacity: 0, y: 60 });
};
const designPageleavel = () => {
  gsap.to(".Contact", { duration: 0.4, opacity: 0 });
};
</script>

<template>
  <transition
    appear
    @enter="designPageEnter"
    @before-leave="designPageleavel"
    :css="false"
  >
    <div class="Contact overflow-hidden py-5">
      <div class="list flex flex-row px-12 rounded-2xl py-3 shadow-md border border-slate-100">
        <div class="item flex flex-col justify-center items-center opacity-40 mx-3 cursor-pointer hover:opacity-100 duration-300">
          <Mxm_icon
            icon-name="icon-a-github1"
            color="#000000"
            :size="38"
          ></Mxm_icon>
          <div class='font-animate text-sm'>github</div>
        </div>
        <div class="item flex flex-col justify-center items-center opacity-40 mx-3 cursor-pointer hover:opacity-100 duration-300">
          <Mxm_icon
            icon-name="icon-bilibili-fill"
            color="#000000"
            :size="38"
          ></Mxm_icon>
           <div class='font-animate text-sm'>blibli</div>
        </div>
        <div class="item flex flex-col justify-center items-center opacity-40 mx-3 cursor-pointer hover:opacity-100 duration-300">
          <Mxm_icon
            icon-name="icon-email"
            color="#000000"
            :size="38"
          ></Mxm_icon>
            <div class='font-animate text-sm'>email</div>
        </div>
        <div class="item flex flex-col justify-center items-center opacity-40 mx-3 cursor-pointer hover:opacity-100 duration-300">
          <Mxm_icon
            icon-name="icon-l-msg"
            color="#000000"
            :size="38"
          ></Mxm_icon>
           <div class='font-animate text-sm'>chat</div>
        </div>
        <div class="item flex flex-col justify-center items-center opacity-40 mx-3 cursor-pointer hover:opacity-100 duration-300">
          <Mxm_icon
            icon-name="icon-phone"
            color="#000000"
            :size="38"
          ></Mxm_icon>
            <div class='font-animate text-sm'>phone</div>
        </div>
      </div>
    </div>
  </transition>
</template>
