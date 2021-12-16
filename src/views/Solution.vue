
<script lang="ts" setup>
import { computed, onMounted, reactive, ref, watch } from 'vue';
// import axios from 'axios'
import { useAxios } from '@vueuse/integrations/useAxios'
import Container from '@/layouts/Container/index.vue';
import instance from '@/axiosInstance';
import SolutionItem from '@/components/solutionItem.vue';

const dataType = {
        problems:"",
        introduction:"",
        icon:"",
        images:[],
        state:0,
        updateDate:0,
        links:{
            "github":"",
            "npm":"",
            "demo":""
        },
        dependencies:{
            "info":"",
            "libs":[],
            "about":""
        }
}

export type DATATYPE = typeof dataType
const {isLoading,isFinished,data} = useAxios<Record<string,DATATYPE>>('/solutions',instance)

const setPage = async () => {
   return await new Promise(resolve => setTimeout(resolve,1500))
}

const activedSolution = ref<string | undefined>(undefined)

const setactive=(item:string)=>{
 activedSolution.value = item
}
const showSolutionDetails=(name:string)=>{
    console.log(name);
}
const isItemActived = computed(()=>{
    return function(name:string) {
       return name === activedSolution.value? true:false
    }
})

await setPage()

</script>

<template>
        <Container>
            <div class='flex'>
                <div class='flex flex-col w-full md:w-6/12'>
                    <div class='flex flex-row'>
                        <div class='avatar'></div>
                        <div>
                            <div class='title text-lg md:text-3xl py-3'> <span class=' text-2xl md:text-5xl font-mono font-bold'>架</span> <span class='opacity-50'>构解决方案</span> </div>
                            <div class='sub-title md:w-10/12 text-sm text-slate-400'>mxm可以使用各种稳定工具，提供应用端各种解决方案，为了更好的用户体验和终端实现</div>
                        </div>
                    </div>
                    <div class="list py-5">
                        <SolutionItem v-for="(value,key) of data" :key="key" :name="key" :solutionData='value' @itemOnClick='setactive' :isActived="isItemActived(key)"></SolutionItem>
                    </div>
                </div>
                <div class="hidden md:flex flex-col justify-center items-center md:w-6/12 px-5">
                    <div class="default px-5" v-if="!activedSolution">
                        <img  src="@assets/Programmer.png" class="w-10/12">
                        <div class='text-xs w-6/12 mx-auto opacity-50'>永远没有最好的，只有最适合的 <br />  <span class="text-right float-right"> -mxm</span> </div>
                    </div>
                    <div class="showActived-solution" v-else>
                        <div></div>
                    </div>
                </div>
            </div>
        </Container>
</template>