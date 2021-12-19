
<script setup lang="ts">
import Mxm_icon from '@components/Mxm_icon.vue';
import Container from '@/layouts/Container/index.vue';
import Toolbar from '@/components/toolbar.vue';
import {ref} from 'vue'
const pageData = ref({
    toolbarActive:undefined
})
const toolbarActive = (data:any)=> pageData.value.toolbarActive = data



</script>
<template>
    <div class="h-full w-full px-5 py-3 text-white" ref="solutions">
        <Toolbar @activeOnchange='toolbarActive'></Toolbar>
        <div class="flex flex-col  h-full items-center justify-start md:justify-center pt-20 md:pt-0">
            <div class="mxm_avator relative">
                <img src="/img/ali.png" class='h-32 w-32 md:h-48 md:w-48 rounded-full'>
            </div>
            <div class=" flex flex-col  items-center md:items-start">
                <div class='text-lg md:text-3xl p-5 font-bold'>
                <span class='text-2xl text-theme-red'>M</span>xM
                    <span class='before:block before:absolute before:-inset-1 before:rounded-full  before:bg-white mx-2 px-2 py-1 relative inline-block '>
                    <span class="relative text-theme-red  tracking-tight">Web</span>
                    </span><span class='text-2xl text-theme-red'>D</span>evelop&&  <span class='text-2xl text-theme-red'>D</span>esign
                </div>
            </div>
                
            <div class='default min-h-homeUnit px-6 w-10/12 md:w-96 md:5/12' v-if="pageData.toolbarActive === undefined">
                <div class='text-white text-xs md:text-base'>每日'金句':</div>
                <div class='quote px-5 text-sm md:text-base italic py-2'>
                    '优秀的设计源自经验的累积，完美的设计则来自想象力的点睛'
                </div>
                <div class=' text-xs italic float-right opacity-70'>
                    - MxM
                </div>
            </div>
            <div v-else>
                <div>
                    施工中....
                </div>
            </div>

            <div class=' transform rotate-180 absolute bottom-16'>
                <div class="animate-bounce">
                    <Mxm_icon icon-name="icon-arrow" :size='42'></Mxm_icon>
                </div>
            </div>
            
        </div>
 
    </div>
</template>
