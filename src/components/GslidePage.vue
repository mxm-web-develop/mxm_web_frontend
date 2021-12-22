<script lang="ts" setup>
import {computed} from "vue"
import {LIB_ITEM} from '@/axiosInstance'
const props = defineProps<{
    appList:any[]
}>()
const renderPages = computed(()=>{
   return arrRegroup(props.appList,9)
})
const arrRegroup = (arr:any[],groupSize:number)=>{
    let o:any[]=[];
    let currentIndex = 0
    let a:any[] = []
    while (currentIndex<arr.length) {
        if(a.length<groupSize) {
            console.log(a.length);
            a.push(arr[currentIndex])
            currentIndex++
        }else{
            o.push(a)
            a=[]
            console.log(currentIndex,arr.length);
            currentIndex++
        }
    }
    if(a.length<groupSize){
         o.push(a)
    }    
    return o
}

const getEnvText = computed(()=>{
    return function(env:number){
        switch (env) {
            case 0:
                return 'UMD'
            case 1:
                return '浏览器'
            case 2:
                return 'Nodejs'
            case 3:
                return 'Webpack'
            case 4:
                return 'Rollup'
            case 5:
                return 'Babal'
            case 6:
                return 'Vue3'
            case 7:
                return 'React'
        }
    }
})

const openWindowAndJump=(url:string)=>{
    window.open(url,'_blank')
}
</script>

<template>
    <div class="slide-page h-full py-8 px-10 inline-block w-full" v-for="(i,index) in renderPages" :key="index">
        <div class='app-item contianer flex flex-wrap relative' >
            <div class=' h-40 w-4/12 px-3 py-2 relative' v-for="(k,indexd) in i" :key="indexd">
                <div class=' h-full w-full px-3 py-2 rounded-md border'>
                    <div class='flex items-center border-b pb-1  border-slate-200 break-words justify-between'>
                        <div class='flex items-center '>
                          <span class='text-xs opacity-50'>{{getEnvText(k.env)}}</span> <span class="mx-2 opacity-20"> | </span>
                             <span class='text-xl font-semibold  leading-5'>{{k.libName.slice(0,1)}}</span> <span class='text-sm  opacity-50'>{{k.libName.slice(1)}}</span>
                        </div>
                        <div class='text-xs py-1 text-white px-3 rounded-md' :class="k.owned?' bg-theme-red':' bg-green-600'">
                            {{k.owned?'-MxM':'社区工具'}}
                        </div>
                    </div>
                    <div class='description'>
                        <div class='pl-3 text-sm py-2 opacity-50'>{{k.des}}</div>
                    </div>
                    <div class='links justify-end flex absolute bottom-5  w-full right-5'>
                        <div v-if="k.github" class='px-2 py-2  ml-3 shadow cursor-pointer'  @click="openWindowAndJump(k.github)">
                            <img src="@/assets/img/github.png" class='w-10 object-cover' alt="">
                        </div>
                        <div v-if="k.npm" class='px-2 py-2 shadow   ml-3 cursor-pointer' @click="openWindowAndJump(k.npm)">
                            <img src="@/assets/img/npm.png" class='w-10 object-cover' alt="">
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
