<script lang="ts" setup>
import gsap,{ Power1,Back,Circ,Power4} from "gsap";
// const setPage = async()=>{
//     return new Promise(resolve=>{
//         const data = {}
//         resolve(data)
//     })
// }


const emit = defineEmits(['backReady'])
// const data= await setPage()
const designPageEnter =()=>{
    gsap.from('.h-designbox',{ duration:0.8,opacity:0,y:60})
}
const designPageleavel = ()=>{
    gsap.to('.h-designbox',{ duration:0.4,opacity:0})
}
</script>

<template>
    <transition appear @enter="designPageEnter" @before-leave="designPageleavel" :css='false'>
    <div class=" h-designbox overflow-hidden py-5"></div>
    </transition>
</template>