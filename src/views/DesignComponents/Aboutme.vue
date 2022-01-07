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
    gsap.from('.About',{ duration:0.8,opacity:0,y:60})
}
const designPageleavel = ()=>{
    gsap.to('.About',{ duration:0.4,opacity:0})
}
const emphaText = [
    {
        keyword:'MxM',
        color:'#F13842',
        size:'48px'   
    },
    {
        keyword:'Designe',
        color:'#F13842',
        size:'32px' 
    },
        {
        keyword:'Develop',
        color:'#F13842',
        size:'32px' 
    },
]
</script>

<template>
    <transition appear @enter="designPageEnter" @before-leave="designPageleavel" :css='false'>
        <div class="w-8/12">
        <div class=" text-6xl">- MxM</div>
        <div class="About max-w-screen-2xl  h-designbox overflow-hidden text-lg text-slate-500 min-w-padPage px-20 leading-loose py-5" v-emphaText='emphaText'>
            Hi there. this is Hanfeng Zhang's(MxM is my personal branding) Website. I'm a full-time developer who enable to 
            capture beauty use my eyes and draw out imagination by my hands, you may noticed that I started my career as a Designer , 
            after got my second Master degree I become work as a Developer. However, Design and Develop are equally important to me.
             Design gives skins and skeleton, while Develop gives soul and life
        </div>
        </div>
    </transition>
</template>