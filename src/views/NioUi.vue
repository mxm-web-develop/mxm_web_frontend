<template>
<div class="flex h-full w-full bg-slate-800 text-white ">
    <div class='w-full h-screen reactive overflow-hidden'>
        <Container>
        <div class='mt-12 md:mt-0 h-full z-10 flex flex-col md:flex-row justify-center items-center md:justify-around'>
        <div class='flex flex-col '>
            <div class='text-logo text-xl self-center'>
            <span class=' font-mono tracking-widest'>MxM </span> 
            <span class="before:block before:absolute before:-inset-1 before:skew-y-6 before:bg-theme-red mx-3 px-2 py-1 relative inline-block">
                <span class="relative text-white font-mono tracking-tight">
                    <span class="text-3xl">N</span>
                    e
                    <span class="text-2xl">X</span>
                    t</span>
            </span> 
             <span class=' font-mono tracking-widest'>G-UI </span> 
            </div>
            <div class='text-slate-300 pt-5 self-center'>
                基于 <span class='text-theme-red font-mono font-semibold'>Pixi.js</span> Canvas/WebGL渲染页面元素
            </div>
 
            <div class='text-slate-500 pt-1 text text-center self-center'>
               Nomore Dom, All Soomthy animated Graphic Elements
            </div>
            <div class='text-slate-500 pt-1 text self-center'>
                60fps Animation
            </div>
            <div class='mt-5 md:hidden transform  translate-x-14'>
                <ImgLoader urlSrc='/img/phone.png' width='425px'></ImgLoader>
            </div>

            <button class='hidden md:flex px-8 mt-12 md:mt-32 self-center py-3 rounded  bg-slate-100  items-center justify-between '>
                <ImgLoader urlSrc='/img/github.png' width='24px'></ImgLoader>
                <div class='pl-5 text-slate-800'>Go Check</div>
            </button>

        </div>
        <div class='hidden md:block self-center mx-auto'>
            <div class='reactive'>
             <ImgLoader urlSrc='/img/phone.png' width='425px'></ImgLoader>
            </div>
        </div>
        </div>
        </Container>
        <!-- <img src="" alt="" class='object-cover z-0'> -->
    </div>
</div>
</template>

<script lang="ts" setup>
import {defineAsyncComponent, onMounted} from 'vue'
import Container from '@/layouts/Container/index.vue';

const ImgLoader = defineAsyncComponent(()=>import(`@components/AsyncImg.vue`))
onMounted(()=>{
    console.log('onmounted');
    
})
</script>