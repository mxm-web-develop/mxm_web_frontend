<script lang="ts" setup>import { onBeforeUpdate, onUpdated } from 'vue-demi';
import gsap, { Power1, Back, Circ, Power4 } from "gsap";

const props = defineProps<{
    title?: string | undefined,
    link?: string | undefined
}>()
const infoContainerAppear=()=>{
  gsap.from('.info',{duration:0.6,y:60,opacity:0,ease:Circ.easeInOut})
}
onBeforeUpdate(()=>{
    infoContainerAppear()
})
</script>

<template>
    <transition appear @enter="infoContainerAppear" :css="false">
    <div class='info'>
        <div class='text-center py-3 font-animate text-lg'>
            {{props.title}}
        </div>
        <div class='font-animate-3 text-base text-center opacity-70 py-5 pb-12'>
            <a :href="props.link" target="_blank">{{props.link}}</a> 
        </div>
    </div>
    </transition>
</template>