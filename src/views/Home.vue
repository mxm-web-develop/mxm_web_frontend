<template>
    <div class="h-full w-full px-5 py-3 text-white" ref="solutions">

        <div class="flex flex-col md:flex-row h-full items-center justify-center">
            <div class="mxm_avator relative">
 
                <img src="/img/ali.png" class='h-32 w-32 md:h-64 md:w-64 rounded-full'>
            </div>
            <div class=" flex flex-col  items-center md:items-start">
             
                <div class='text-lg md:text-3xl p-5 font-bold'>mxm_web_develop</div>
                <div class='px-6 w-10/12 md:5/12'>lalal this is subtitle lalal this is subtitle lalal this is subtitle lalal this is subtitle lalal this is subtitle</div>
            </div>

            <div class=' transform rotate-180 absolute bottom-16'>
                <div class="animate-bounce">
                    <Mxm_icon icon-name="icon-arrow" :size='42'></Mxm_icon>
                </div>
            </div>
            
        </div>
 
    </div>
</template>
<script lang="ts">
import {
  defineComponent
} from 'vue'

export default defineComponent({
  name: 'Home'
})
</script>
<script setup lang="ts">
import Mxm_icon from '@components/Mxm_icon.vue';
import Container from '@/layouts/Container/index.vue';


</script>