<script lang="ts" setup>
import gsap,{ Power1,Back,Circ,Power4} from "gsap";
import { onMounted, ref } from "vue";
import { useScriptTag } from '@vueuse/core'
import { useAxios } from '@vueuse/integrations/useAxios'
import Fonts from "./StyleSheetComp/Fonts.vue";
const emit = defineEmits(['backReady'])


const {scriptTag ,load} = useScriptTag(
  'https://fonts.font.im/css2?family=DM+Sans&display=swap',(e)=>{
      console.log(e);
      
  },{type:'text/plain',noModule:true}
)



const designPageEnter =async ()=>{
    gsap.from('.h-designbox',{ duration:0.8,opacity:0,y:60})

    
    
}

 onMounted(async()=>{
  
    console.log(scriptTag.value,'sdflijsdf');  
})
const designPageleavel = ()=>{
    gsap.to('.h-designbox',{ duration:0.4,opacity:0})
}
const modules = [
{
    text:"Colors"
},
{
    text:'Mode'
},{
    text:"Fonts"
},{
    text:"Spacing"
},{
    text:"Border&&Shadow"
}]
</script>

<template>
    <transition appear @enter="designPageEnter" @before-leave="designPageleavel" :css='false'>
        <div class=" h-designbox reactive w-full overflow-hidden py-5">
            <div class="px-20 font-animate text-lg">
                <span class=" text-3xl text-theme-red">MxM</span> Style Sheet
            </div>
           <div class="flex w-full px-20 justify-between">
               <div class="mt-8 w-3/12 left flex flex-col border-r">
                   <div v-for="i in modules" :key='i.text' class='py-3 font-animate-2 cursor-pointer'>
                    <span>-</span>  {{i.text}}
                   </div>
                   <div class='font-animate-2 mt-44'>
                    <span>-</span> Export
                   </div>
               </div>
               <div class=" w-9/12 px-5 justify-between right">
                   <fonts></fonts>
               </div>
           </div> 
        </div>
    </transition>
</template>