<script lang="ts" setup>
import { ref } from 'vue';
import { Google_Fonts_List } from '../Style_Sheet';

const fontPicker = ref<HTMLElement | null>(null)
const fontsOptions = ref(Google_Fonts_List)
const selectRef = ref('')
const fontSize = ref<number>(36);
const handleChange=(val:any,k:any)=>{
    console.log(val,k); 
}
const handlefocus=(val:any)=>{
    console.log(val);
    
    
}
</script>

<template>
         <div class='Fonts flex  flex-row-reverse'>
              
                       <div class='flex flex-col  justify-start items-end mt-8'>
                           <div class='flex flex-col'>
                               <div class='label'>
                                   font-family
                               </div>
                                <a-select
                                    placeholder="select font-family"
                                    ref="select"
                                    class="w-32 rounded-full"
                                    v-model:value="selectRef"
                                    @focus="handlefocus"
                                    @change="handleChange"
                                    >
                                    <a-select-option v-for="(o,index) in fontsOptions" :key="index" :value="o.value">
                                        {{o.value}} {{o.lang ==="en"? "- english": "- chinese"}}
                                    </a-select-option>
                                </a-select>
                           </div>
                           <div class='flex flex-col'>
                               <div class='label'>
                                   font-size
                               </div>
                             <a-input-number
                                v-model:value="fontSize"
                                  @change="handleChange"
                             />
                            </div>
                        </div>
                   
               
                <div>
                   <div class='font-animate-2'>Select Your Theme Fonts</div>
                   <div 
                   :style='{fontSize:fontSize+"px"}'
                   class="font-template text-center py-8 shadow-sm border border-slate-100 w-10/12 rounded-t-lg mx-auto mt-8" ref='fontPicker'>
                       MxM Style Sheet, Fonts picker
                   </div>
                </div>
                 </div>
</template>

<style scoped>
    .label{
        @apply opacity-30 text-xs py-1
    }
</style>