
<script lang="ts" setup>
import { computed, onMounted, reactive, ref, watch,defineAsyncComponent,toRefs, Ref, toRaw, ToRefs } from 'vue';
// import axios from 'axios'
import { useAxios } from '@vueuse/integrations/useAxios'
import Container from '@/layouts/Container/index.vue';
import instance from '@/axiosInstance';
import { useWindowSize } from '@vueuse/core'
import SolutionItem from '@/components/solutionItem.vue';
import SolutionDetails from '@/components/SolutionDetails.vue';
import MxmModal from '@/components/mxmModal/index.vue';
const ImgLoader = defineAsyncComponent(()=>import(`@components/AsyncImg.vue`))
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
const showModel = ref(false)
const {width} =useWindowSize()
const {isFinished,data} = useAxios<Record<string,DATATYPE>>('/solutions',instance)

const setPage = async () => {
    return await new Promise<Record<string,any>> (resolve => {
        setTimeout(()=>resolve(data),600)
    })
}
const moblieView = computed(()=>{
    if(width.value>765){
        return false
    }else{
        return true
    }
})
console.log(width.value);


const activedSolution = ref<[string,DATATYPE] | undefined>(undefined)

const setactive=(item:[string,DATATYPE]| undefined)=>{
    activedSolution.value = item
    showModel.value = true
    console.log(activedSolution.value)
}

const isItemActived = computed(()=>{
    return function(name:string) {
        if(activedSolution.value)
            return name === activedSolution.value[0]? true:false
        else
            return false
    }
})
const pageData = await setPage() as Record<string, DATATYPE>

</script>

<template>
        <Container>
            <MxmModal v-if='moblieView'
            :onBeforeClose='()=>setactive(undefined)'
            v-model="showModel" mode="frame" width='100vw' height="100vh"  telTo='body' themeColor='white' position="b">
                <template #frame>
                    <!-- <div class=' absolute right-3 cursor-pointer' @click="()=>showModel = false">close</div> -->
                    <div v-if='activedSolution'>
                        <SolutionDetails :data='activedSolution'></SolutionDetails>
                    </div>
                </template>
            </MxmModal>
            <div class='flex'>
                <div class='flex flex-col w-full md:w-6/12'>
                    <div class='flex flex-row'>
                        <div class='avatar'></div>
                        <div>
                          <div class='title text-base md:text-xl py-3'> <span class=' text-xl md:text-3xl font-mono font-bold text-theme-red'>架</span> <span class='opacity-50'>构解决方案</span> </div>
                            <div class='sub-title md:w-10/12 text-sm text-slate-400'>MxM可以使用各种稳定工具，提供应用端各种解决方案，为了更好的用户体验和终端实现</div>
                        </div>
                    </div>
                    <div class="list py-5">
                        <SolutionItem v-for="(value,key) of pageData" :key="key" :name="key" :solutionData='value' @itemOnClick='setactive' :isActived="isItemActived(key)"></SolutionItem>
                    </div>
                </div>
                <div class="hidden md:flex flex-col justify-center items-center md:w-6/12 px-5">
                    <div class="default px-5" v-if="!activedSolution">
                        <!-- <img  src="@assets/Programmer.png" class="w-10/12"> -->
                        <Suspense>
                            <template #default>
                                <ImgLoader urlSrc='/img/Programmer.png' width='320px'></ImgLoader>
                            </template>
                            <template #fallback>
                                loading
                            </template>
                        </Suspense>
                        <div class='text-xs w-6/12 mx-auto opacity-50'>永远没有最好的，只有最适合的 <br />  <span class="text-right float-right"> -mxm</span> </div>
                    </div>
                    <div class="showActived-solution h-full self-start" v-else>
                        <SolutionDetails :data='activedSolution'></SolutionDetails>
                    </div>
                </div>
            </div>
        </Container>
</template>