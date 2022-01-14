<script  lang="ts">
  export default {
    name: 'Colors',
    inheritAttrs: false,
    customOptions: {}
  }
</script>
<script lang="ts" setup>
import { computed, reactive, ref } from 'vue';
import { ColorPicker } from 'vue-color-kit'
import {remove as _remove} from 'lodash';
import 'vue-color-kit/dist/vue-color-kit.css'
import Mxm_icon from '@/components/mxm_icon.vue';
import gsap from 'gsap'
import {debounce} from 'ts-debounce'
const data = reactive({
        color: '#59c7f9',
        suckerCanvas: null,
        suckerArea: [],
        isSucking: false,
})
const selectedColor = ref()
const activedRef = ref()
const itemContianer =ref()
const ItemRef = ref<any[]>([])
const themeColors = ref<any[]>([])
const currentColor = ref<any>({})
const changeColor=(color:any)=> {
    const { r, g, b, a } = color.rgba
    data.color =`rgba:${r}, ${g}, ${b}, ${a}`
    currentColor.value={
        hex:color.hex,
        rgba:`rgba(${color.rgba.r}, ${color.rgba.g}, ${color.rgba.b}, ${color.rgba.a})`
    }
}
const rmSelectedColor = ()=>{
    console.log(11);
    
}
const setItemRef = (el:any) =>{
    if(el){
        ItemRef.value&&
        ItemRef.value.push(el)
        const target =el as HTMLElement
        const ani_hover =  gsap.to(el,{duration:0.5,scale:1.1}).pause()
        const ani_hover_span = gsap.to(target.children.item(0),{duration:0.2,opacity:1}).pause()
        el.addEventListener('mouseenter',()=>{
            ani_hover_span.play()
            ani_hover.play()
                 
        })
        el.addEventListener('mouseleave',()=>{
            ani_hover.reverse()
            ani_hover_span.reverse()
        })
        return 
    }else{
        return 
    }
}
const openSucker=(isOpen:any)=>{}
const submitColor= ()=>{
    if(themeColors.value.length>7) return
    const isExist = themeColors.value.filter(k=>{
       return k.rgba === currentColor.value.rgba
    })
    if(isExist.length>0)return
  
    if(!currentColor.value.hex){
        themeColors.value.push({
            hex:'#59c7f9',
            rgba:`rgba(89,199,249,1)`
        })
    }else{
        themeColors.value.push(currentColor.value)
    }
}
const selectColor=(item:any,indexId:any)=> selectedColor.value = indexId 
const rm = (indexId:any)=>{
     _remove(themeColors.value,(i,index)=>{
        console.log(i,index);
        return indexId === index
    })
}
</script>

<template>
         <div class='Fonts h-full flex w-full relative justify-start'>
                    <div class='flex-grow  h-full '>
                        <div class='font-animate-2 text-center opacity-50  h-14'>Select Your Theme Colors</div>
                        <div class=' h-4/5 flex justify-center item-center'>
                        <div 
                        :class="!themeColors.length?'items-center justify-center ':' items-start justify-start px-3 py-2'"
                        class="color-template text-center flex 
                        shadow-sm borderborder-slate-100 w-10/12 py-12 rounded-t-lg mx-auto mt-8">
                            <div v-if="!themeColors.length">
                                Pick an color from Color Panel
                            </div>
                            <div v-else>
                                <div class="w-full flex flex-row flex-wrap cursor-pointer" ref="itemContianer">
                                        <div class="color-sample text-xs flex relative flex-col mb-2 mx-6 items-center"
                                         v-for="(i,index) in themeColors" 
                                         :ref="setItemRef"
                                         :key="index" >
                                            <span class='close-icon absolute right-0 cursor-pointer' @click="rm(index)">
                                                <Mxm_icon iconName="icon-close" color="#000000" :size="11"></Mxm_icon>
                                            </span>
                                            <div class=" sample-cicle w-20 h-20 mb-2 rounded-full shadow-sm" :style="{backgroundColor:i.rgba}"  @click="selectColor(i,index)" ></div>
                                            <div class=" text-sm">mxmcolor-{{index+1}}</div>
                                            <div class=" opacity-50 text-2xs">
                                                {{i.hex}}
                                            </div>
                                            <div class=" opacity-50 text-2xs">
                                                {{i.rgba}}
                                            </div>
                                        </div>
                                
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class='flex flex-col    justify-start items-start mt-8'>
                            <div class='flex flex-col py-1'>
                                <div class='label'>
                                    color-picker
                                </div>
                                <ColorPicker
                                theme="drak"
                                class=" w-56"
                                :color="data.color"
                                :sucker-hide="false"
                                :sucker-canvas="data.suckerCanvas"
                                :sucker-area="data.suckerArea"
                                @changeColor="changeColor"
                                @openSucker="openSucker"
                                />
                                <div 
                                @click="submitColor"
                                class='w-full text-center py-1 mt-1 border border-slate-100 bg-theme-dark cursor-pointer text-slate-300 hover:text-white text-sm rounded-md'>
                                    确认
                                </div>
                            </div>
                    </div>
        
                 </div>
</template>

<style scoped>
    .label{
        @apply opacity-30 text-xs py-1
    }
    .color-template{
        min-width: 710px;
    }
    .close-icon{
        opacity: 0
    }
    .color-sample{
        widows: 140px;
    }
</style>