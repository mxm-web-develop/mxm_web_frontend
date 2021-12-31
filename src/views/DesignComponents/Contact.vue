<script lang="ts" setup>
import gsap, { Power1, Back, Circ, Power4 } from "gsap";

import Mxm_icon from "@/components/mxm_icon.vue";
import { computed, ref } from "vue";
import ContacInfoItem from "./ContacInfoItem.vue";

const actived = ref<undefined|string>(undefined)

const contacts = [
  {
    name:'github',
    icon:'icon-a-github1',
    title:'MxM\'s github',
    link:'https://github.com/mxm-web-develop'
  },
  {
    name:'blibli',
    icon:'icon-bilibili-fill',
    title:'MxM\'s BiliBili 哔哩哔哩(゜-゜)つロ干杯',
    link:'https://github.com/mxm-web-develop' 
  },
  {
    name:'email',
    icon:'icon-email',
    title:'MxM\'s Email',
    link:'https://github.com/mxm-web-develop'
  },
    {
    name:'chat',
    icon:'icon-l-msg',
    title:'MxM\'s web Chat',
    link:'https://github.com/mxm-web-develop'
  },
    {
    name:'phone',
    icon:'icon-phone',
    title:'MxM\'s Phone',
    link:'https://github.com/mxm-web-develop'
  },
]
const designPageEnter = () => {
  gsap.from(".Contact", { duration: 0.8, opacity: 0, y: 60 });
};

const designPageleavel = () => {
  gsap.to(".Contact", { duration: 0.4, opacity: 0 });
};
const getSelectedInfo = computed(()=>{
   const res = contacts.find(i=> i.name === actived.value)
   return res
})
</script>

<template>
  <transition
    appear
    @enter="designPageEnter"
    @before-leave="designPageleavel"
    :css="false"
  >
    <div class="Contact overflow-hidden py-5">

      <div class='info-render' v-if="actived">
       
          <ContacInfoItem :title="getSelectedInfo?.title" :link="getSelectedInfo?.link"></ContacInfoItem>

      </div>
      <div class="list flex flex-row px-12 rounded-2xl py-3 shadow-md border border-slate-100">
        <div 
        v-for="(i,index) in contacts"
        :key='index'
        :ref='i.name'
        @click="()=>actived = i.name"
        :class="actived?actived===i.name?'opacity-100':'':''"
        class="item flex flex-col justify-center items-center opacity-40 mx-3 cursor-pointer hover:opacity-100 duration-300">
          <div :class="actived?actived===i.name?'opacity-100':'':''">
          <Mxm_icon
            :icon-name="i.icon"
            color="#000000"
            :size="38"
          ></Mxm_icon>
          </div>
          <div class='font-animate text-sm'>{{i.name}}</div>
        </div>
      </div>
    </div>
  </transition>
</template>
