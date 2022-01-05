<script lang="ts" setup>
import { ref } from 'vue';
import { Google_Fonts_List } from '../Style_Sheet';
import webfontloader from 'webfontloader'
const fontPicker = ref<HTMLElement | null>(null)
const fontsOptions = ref(Google_Fonts_List)
const fontPick = ref('')
const sizeUnits = ref()
const fontWeight = ref('')
const fontSize = ref<number>(36);
const handleChange=(val:any,k:any)=>{
    console.log(val,k); 

}
const handlefocus=(val:any)=>{
    console.log(val);
    
    
}
</script>

<template>
         <div class='Fonts h-full flex w-full relative  justify-start'>
                    <div class='flex-grow  h-full '>
                        <div class='font-animate-2 text-center opacity-50  h-14'>Select Your Theme Fonts</div>
                        <div class=' h-4/5 flex justify-center item-center'>
                        <div 
                        :style='{fontSize:fontSize+"px"}'
                        class="font-template text-center  flex  items-center justify-center shadow-sm border border-slate-100 w-10/12 py-12 rounded-t-lg mx-auto mt-8" ref='fontPicker'>
                            MxM Style Sheet, Fonts picker
                        </div>
                        </div>
                    </div>
                    <div class='flex flex-col    justify-start items-start mt-8'>
                            <div class='flex flex-col py-1'>
                                <div class='label'>
                                    font-family
                                </div>
                                <el-select v-model="fontPick"  placeholder="Select">
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
                                <el-select v-model="sizeUnits" class  placeholder="Select">
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
                                <el-select v-model="fontWeight" class  placeholder="Select">
                                    <el-option
                                    v-for="item in [{value:'thin'},{value:'normal'},{value:'bold'},{value:'black'}]"
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
                                   <el-input-number v-model="fontSize" :min="10" :max="60" @change="handleChange" />
                            </div>
                    </div>
        
                 </div>
</template>

<style scoped>
    .label{
        @apply opacity-30 text-xs py-1
    }
</style>