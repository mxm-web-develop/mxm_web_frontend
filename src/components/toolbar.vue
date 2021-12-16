<template>
    <div class="toolsbar absolute -top-10 -right-16 md:-top-2 md:-right-2 bg-slate-800 px-3 py-1  md:px-5 md:py-3 rounded flex">
        <div class='flex flex-col mt-2 mb-1  items-center  border-r border-gray-600'>
            <Mxm_icon icon-name="icon-hrz_yhxx" :size='12'></Mxm_icon>
            <div class=' mx-3 my-2 text-xs'>简历</div>
        </div>
        <div class='flex flex-col mt-2 mb-1 items-center  border-r border-gray-600'>
            <Mxm_icon icon-name="icon-hrz_yhxx" :size='12'></Mxm_icon>
            <div class=' mx-3 my-2 text-xs'>简历</div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import Mxm_icon from './mxm_icon.vue';
</script>