<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { Google_Fonts_List } from '../Style_Sheet';
import { ColorPicker } from 'vue-color-kit'
import 'vue-color-kit/dist/vue-color-kit.css'
import webfontloader from 'webfontloader'

const data = reactive({
        color: '#59c7f9',
        suckerCanvas: null,
        suckerArea: [],
        isSucking: false,
    })
const changeColor=(color:any)=> {
    const { r, g, b, a } = color.rgba
    data.color = `rgba(${r}, ${g}, ${b}, ${a})`
}
const openSucker=(isOpen:any)=>{

    
    
}
</script>

<template>
         <div class='Fonts h-full flex w-full relative  justify-start'>
                    <div class='flex-grow  h-full '>
                        <div class='font-animate-2 text-center opacity-50  h-14'>Select Your Theme Colors</div>
                        <div class=' h-4/5 flex justify-center item-center'>
                        <div 
                        class="font-template text-center  flex  items-center justify-center shadow-sm border border-slate-100 w-10/12 py-12 rounded-t-lg mx-auto mt-8" ref='fontPicker'>
                            Pick an color from Color Panel
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
                              
                            </div>
                    </div>
        
                 </div>
</template>

<style scoped>
    .label{
        @apply opacity-30 text-xs py-1
    }
</style>