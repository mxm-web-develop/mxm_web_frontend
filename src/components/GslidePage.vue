<script lang="ts" setup>
import {computed} from "vue"
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
</script>

<template>
    <div class="slide-page h-full py-8 px-10 inline-block w-full" v-for="(i,index) in renderPages" :key="index">
        <div class='contianer flex flex-wrap' >
            <div class=' inline-block h-40 w-4/12 px-3 py-2 relative' v-for="(k,indexd) in i" :key="indexd">
                <div class='app-item h-full w-full rounded-md border'></div>
            </div>
        </div>
    </div>
</template>