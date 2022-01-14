<script lang="ts" setup>
import gsap,{ Power1,Back,Circ,Power4} from "gsap";
import { onMounted, ref,defineAsyncComponent, computed,h, shallowRef } from "vue";
import { useScriptTag } from '@vueuse/core'
import { useAxios } from '@vueuse/integrations/useAxios'
import {StyleSheetProvider} from './useStyleSheet'
import webfontloader from "webfontloader";
// const Colors  =  de(()=>import( "./StyleSheetComp/Colors.vue"));
// const Fonts  =  defineAsyncComponent(()=>import( "./StyleSheetComp/Fonts.vue"));
const emit = defineEmits(['backReady'])
StyleSheetProvider()
const files = import.meta.glob('./StyleSheetComp/*.vue')

const Components = Object.keys(files).map(i=>{  
    const l = i.split('').reverse().join('')
    const t =l.substring(0,l.indexOf('/')).split('').reverse().join('')
    const name =t.substring(0,t.indexOf('.vue')) 
    const component = defineAsyncComponent(files[i]) 
    return {
        name,
        component
    }
})
let activedComponent = shallowRef(Components[0])

const designPageEnter =async ()=>{
    gsap.from('.h-designbox',{ duration:0.8,opacity:0,y:60})
}
const changeActivedModule = (item:any)=>{
    activedComponent.value = Components.filter(k=>{
        return k.name===item
    })[0] 
}

onMounted(async()=>{})
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
const showComponent = computed(()=>{
    return modules.map(m=>{
        return defineAsyncComponent(()=>import(`./StyleSheetComp/${m}.vue`))
    })
})
</script>

<template>
    <transition appear @enter="designPageEnter" @before-leave="designPageleavel" :css='false'>
        <div class=" max-w-screen-2xl  h-designbox reactive w-full overflow-hidden py-5">
            <div class="px-12 font-animate text-lg">
                <span class=" text-3xl text-theme-red">MxM</span> Style Sheet
            </div>
           <div class="flex w-full px-12 justify-between">
               <div class="mt-8 w-56 flex-grow-0  left flex flex-col border-r">
                   <div v-for="i in modules" :key='i.text' class='py-3 font-animate-2 cursor-pointer ' @click="()=>changeActivedModule(i.text)"
                        :class="activedComponent.name === i.text?' text-theme-red opacity-100':'opacity-50'"
                   >
                    <span class=" w-3 h-1 bg-black" :class="activedComponent.name === i.text?' text-theme-red text-xl transform rotate-90':''"></span>  {{i.text}}
                   </div>
                   <div class='font-animate-2 mt-44'>
                    <span>-</span> Export
                   </div>
               </div>
               <div class=" flex-grow justify-between right">
                  
                         <component :is="activedComponent.component"></component>
           
                  
                   <!-- <colors></colors> -->
                   <!-- <fonts></fonts> -->
                   <!-- <component  :is="activedModule"></component> -->
               </div>
           </div> 
        </div>
    </transition>
</template>