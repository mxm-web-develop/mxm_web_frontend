<script lang="ts" setup>
import BScroll from "better-scroll";
import Container from "@/layouts/Container/index.vue";
import {onMounted, ref, watch} from 'vue'
import { BScrollConstructor } from "@better-scroll/core/dist/types/BScroll";
import moke from './moke'
import instance from '@/axiosInstance';
import { useAxios } from '@vueuse/integrations/useAxios'
import {IResponse} from '../axiosInstance'
import GslidePage from "@/components/GslidePage.vue";
const libraryScroller = ref<HTMLElement | undefined>(undefined)
const Scroller = ref<BScrollConstructor| undefined>(undefined)

const currentPageIndex = ref(1)
const setPage = async () => {
    return await new Promise<IResponse<any> | undefined> (async resolve => {
        const {isFinished,data,response} = await useAxios<IResponse<any>>('/library',instance)
        watch(isFinished,(newV)=>{
             if(newV === true&&data.value){
                resolve(data.value)
            }
        })
    })
}

const mokedata= moke
const doClick = ()=>{
  console.log('123123');
}

const data= await setPage()
onMounted(async ()=>{
    if(libraryScroller.value&&data)
      Scroller.value= new BScroll(libraryScroller.value,{
          nestedScroll:{
              groupId:'app-scroller'
          },
          scrollX: true,
          scrollY: false,
          slide: {
            threshold: 300,
            autoplay:false
          },
          momentum: false,
          bounce: false,
          probeType: 3,
          click:true,
          stopPropagation: true,
      
        })
    Scroller.value&&Scroller.value.on('slideWillChange',(page:any)=> currentPageIndex.value = page.pageX )
})

</script>

<template>
  <div>
    <Container>
      <div>
        <div class="title text-base md:text-xl py-3">
          <span class="text-xl md:text-3xl font-mono font-bold text-theme-red"
            >工</span
          >
          <span class="opacity-50">具包</span>
        </div>
        <div class="sub-title md:w-10/12 text-sm text-slate-400">
          MxM常用的一些工具包，mxm-是由本人自己提供的各种工具，其他则是常用的来自社区的工具
        </div>
      </div>
      <div class='hidden md:block banner-wrapper mt-12 border border-slate-200 rounded-sm shadow-lg relative w-full m-auto'>
          <div class='py-3 flex items-center border-b border-slate-100 justify-between'> 
            <div class='px-10'>
              <div>MxM的工具包</div>
            </div>
            <div>
              <input type="search" class='w-52 md:w-96 border-t border-b border-l py-2 px-5 rounded-tl-lg rounded-bl-lg' placeholder="输入查询的工具内容">
            </div>
          </div>
        <div class='slide-banner-wrapper overflow-hidden slide-wrapper ' ref='libraryScroller'>
          <div class="slide-banner-content h-quote md:h-lbbox w-full  ">
            <GslidePage :app-list="data?.data"></GslidePage>
          </div>
        </div>
            <div class="dots-wrapper absolute bottom-3 left-half -translate-x-half ">
              <span
                class="dot rounded-full inline-block mx-2 w-2 h-2 border-full border border-slate-100 shadow"
                v-for="num in (Math.ceil(data?.data.length/9))"
                :key="num"
                :class="currentPageIndex === num?'bg-blue-300':'' "></span>
            </div>
      </div>
    </Container>
  
  </div>
</template>

