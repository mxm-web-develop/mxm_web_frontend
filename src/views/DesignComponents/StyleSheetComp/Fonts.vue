<script  lang="ts">
  export default {
    name: 'Fonts',
    inheritAttrs: false,
    customOptions: {}
  }
</script>
<script lang="ts" setup>
import { computed, ref } from 'vue';
import { Google_Fonts_List } from '../Style_Sheet';
import Mxm_icon from '@/components/mxm_icon.vue';
import {useStyleSheet} from '../useStyleSheet'
import webfontloader from 'webfontloader'
const fontPicker = ref<HTMLElement | null>(null)
const fontsOptions = ref(Google_Fonts_List)
const fontPick = ref('')
const sizeUnits = ref('px')
const fontWeight = ref('')
const selectedFont = ref()
const fontLoading = ref(false)
const savedFont = ref<any[]>([])
const fontSize = ref<number>(36);
const {data} = useStyleSheet()
console.log('dkfjdkfjkldf',data);

const handleChange=(val:any,type:any)=>{
    switch (type) {
        case 'fontPick':
            webfontloader.load({
                google:{
                    families:[val],
                    api:'https://fonts.font.im/css2'
                    },
                    loading:()=>{
                                 const fontEl = fontPicker.value as HTMLElement
                               fontEl.style.fontFamily = val
                 
                        fontLoading.value = true
                    },
                    active:()=>{
               
                        fontLoading.value = false
                        console.log('font is actived');
                        
                    }
                })
        break;
        case 'fontWeight':
            const fontEl = fontPicker.value as HTMLElement
            fontEl.style.fontWeight = val
        break;
        case 'sizeUnits':
            if(val === 'px' && fontSize.value<10) fontSize.value =10;
            if(val === 'rem' && fontSize.value>4.2) fontSize.value = 4.2
        break;   
    }
}
const switchFont = (v:any,indexId:any)=>{
    console.log(v);
    
    
}
const getSizeUnitType = computed(()=>{
    if(sizeUnits.value==='px'){
        return{
            step:1,
            min:10,
            max:64
        }
    }else{
        return{
            step:0.1,
            min:0.8,
            max:4.2
        }
    }
})

const addFontPlanToList=(val:any)=>{
    const data = {
        id:Math.random()*100,
        font:fontPick.value,
        unit:sizeUnits.value,
        size:fontSize.value,
        weight:fontWeight.value,
        label:fontPick.value,
        value:fontPick.value,
        url:`https://fonts.font.im/css2?family=${fontPick.value.replaceAll(' ','+')}`
    }
    savedFont.value.push(data)
}
const rm=(item:any,indexId:number)=>{
    console.log(  savedFont.value[indexId]);
   
}

</script>

<template>
        <div class='Fonts h-full flex w-full relative  justify-start'>
                    <div class='flex-grow  h-full '>
                        <div class='font-animate-2 text-center opacity-50  h-14'>Select Your Theme Fonts</div>
                        <div class=' h-4/5 flex justify-center item-center'>
                        <div class=' absolute top-10'>
                                  <el-select-v2
                                    v-model="selectedFont"
                                    :options="savedFont"
                                    placeholder="selcet your font"
                                    style="width: 240px; vertical-align: middle"
                                    @change="switchFont"
                                >
                                    <template #default="{ item,index }">
                                        <div style="margin-right: 8px" class="flex item-center relative justify-between">
                                            <div>{{`mxmFont-${index+1}`}} {{`(${item.font})`}} </div>
                                            <span class='cursor-pointer absolute top-3 -right-5' @click="rm(item,index)">
                                                    <Mxm_icon iconName="icon-close" color="#000000" :size="11"></Mxm_icon>
                                            </span>
                                        </div>
                                    </template>
                            
                                  </el-select-v2>
                            </div>
                        <div 
                        :style='{fontSize:fontSize+sizeUnits}'
                        class="font-template text-center  flex  items-center justify-center shadow-sm border border-slate-100 w-10/12 py-12 rounded-t-lg mx-auto mt-8" >
             
                            <div ref='fontPicker' >
                       
                                 
                                 MxM Style Sheet, Fonts picker
                            </div>
                   
                        </div>
                        </div>
                    </div>
                    <div class='flex flex-col    justify-between items-start mt-8'>
                            <div>
                            <div class='flex flex-col py-1'>
                                <div class='label'>
                                    font-family
                                </div>
                                <el-select v-model="fontPick" @change="handleChange(fontPick,'fontPick')" placeholder="Select Font">
                                    <el-option
                                        v-for="item in fontsOptions"
                                        :key="item.value"
                                        :label="item.value"
                                        :value="item.value"
                                    >
                                    </el-option>
                                </el-select>
                            </div>
                            <div class='flex flex-col py-1'>
                                <div class='label'>
                                    size-unit
                                </div>
                                <el-select v-model="sizeUnits" class  placeholder="Select" @change="handleChange(sizeUnits,'sizeUnits')">
                                    <el-option
                                    v-for="item in [{value:'rem'},{value:'px'}]"
                                    :key="item.value"
                                    :label="item.value"
                                    :value="item.value"
                                    >
                                    </el-option>
                                </el-select>
                            </div>
                            <div class='flex flex-col py-1'>
                                <div class='label'>
                                    font-weight
                                </div>
                                <el-select v-model="fontWeight" class  placeholder="Select fontWeight" @change="handleChange(fontWeight,'fontWeight')">
                                    <el-option
                                    v-for="item in [{value:'lighter'},{value:'normal'},{value:'bold'},{value:'bolder'}]"
                                    :key="item.value"
                                    :label="item.value"
                                    :value="item.value"
                                    >
                                    </el-option>
                                </el-select>
                            </div>
                            <div class='flex flex-col py-1'>
                                <div class='label'>
                                    font-size
                                </div>
                                   <el-input-number v-model="fontSize" :step="getSizeUnitType.step" :min="getSizeUnitType.min" :max="getSizeUnitType.max" @change="handleChange" />
                            </div>
                            </div>
                            <div 
                                @click="addFontPlanToList"
                                class='w-full text-center  self-end py-1 mt-1 border border-slate-100 bg-theme-dark cursor-pointer text-slate-300 hover:text-white text-sm rounded-md'>
                                    Add Font
                            </div>
                    </div>
        
        </div>
</template>

<style scoped>
    .label{
        @apply opacity-30 text-xs py-1
    }
</style>