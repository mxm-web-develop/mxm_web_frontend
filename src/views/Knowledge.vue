<script lang="ts" setup>
import Container from '@/layouts/Container/index.vue';
import Mxm_icon from '@/components/mxm_icon.vue';
import Mxm_checkbox from '@/components/mxm_checkbox.vue';
import SearchItem from '@/components/searchItem.vue';

const searchList:any[] = []
</script>   
<template>
    <div class='flex'>
        <Container>
            <div class='header'>
                <div class='title text-base md:text-xl py-3'> <span class=' text-xl md:text-3xl font-mono font-bold text-theme-red'>知</span> <span class='opacity-50'>识点</span> </div>
                 <div class='sub-title md:w-10/12 text-sm text-slate-400'>mxm收集的各种js生态知识点，轻松从入门到入土！</div>
            </div>
            <div class='search w-full flex items-center justify-center py-5 md:py-20'>
        
                <div>
                    <input type="text" class=" w-64 md:w-96 mx-auto border border-slate-200 h-8 md:h-12 rounded-2xl px-5 pr-10 ">
                </div>
                <div class=' -translate-x-8'>
                    <Mxm_icon iconName='icon-sousuo' iconfont color='#000000'></Mxm_icon>
                </div>
            </div>
            <div class='list flex-col'>
                <Mxm_checkbox :data='[{label:"Node.js",checked:true},{label:"Vue.js"},{label:"React.js"}]'></Mxm_checkbox>
                <div class='list-render w-full py-2 mt-3 border-t border-b border-slate-200'>
                     <div v-if='searchList.length<1' class=' text-center py-10 text-sm opacity-50'>

                        没有相关数据了呢！！
                     </div>
                     <div v-else>
                    <div v-for="(i,index) in searchList" :key="index">
                        <SearchItem :data='i'></SearchItem>
                     </div>
                  </div>
                </div>
            </div>
        </Container>
    </div>
</template>

