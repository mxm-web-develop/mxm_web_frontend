
<script setup lang="ts">
import Mxm_icon from '@components/Mxm_icon.vue';
import Container from '@/layouts/Container/index.vue';
import Toolbar from '@/components/toolbar.vue';
import {onMounted} from 'vue'
import gsap,{ Power1,Back,Circ,Power4} from "gsap";
import { usescrollController } from '../layouts/Scrollview/scrollController';
const {Scroller} = usescrollController()

gsap.registerPlugin()
onMounted(()=>{
    console.log(Scroller.value);
    

})
import {ref} from 'vue'
const pageData = ref({
    toolbarActive:undefined
})

const toolbarActiveChange = (data:any)=> pageData.value.toolbarActive = data
const boxMoveIn = ()=>{
    let tl;
    tl = gsap.timeline()
    /**先显示出来 */
    tl.from('.animate-home',{duration:0.6 ,opacity:0})
    tl.to('.left-x',{duration:0.6,rotate:90,ease:Circ.easeInOut})
    tl.to('.right-x',{duration:0.6,rotate:-180,ease:Circ.easeInOut},'-=0.6')
    tl.from('.left-m',{duration:0.3, right:0,top:0,fontSize:0})
    tl.from('.right-m',{duration:0.3, right:0,bottom:0, fontSize:0},'-=0.3')
  
} 


</script>
<template>
    <div class="backgroun-set h-full w-full px-5 py-3 text-white">
        <Toolbar @activeOnchange='toolbarActiveChange'></Toolbar>
        <div class="flex flex-col md:flex-row h-full items-center justify-start md:justify-center  pt-20 md:pt-0">
            <transition appear @enter="boxMoveIn" :css="false">
            <div class='animate-home relative'>
                <div class='left-x w-72 h-1 bg-white rounded absolute top-half left-half -translate-x-half'></div>
                <div class='right-x w-72 h-1 bg-white  rounded absolute top-half left-half -translate-x-half'></div>
                <div class='flex item-center mb-10 mr-3'>
                    <div class='left-m absolute text-3xl cursor-pointer w-20 '>M<span class='text-sm newText'></span> </div>
                    <div class='right-m absolute text-3xl cursor-pointer '>M<span class='text-sm opacity-40'></span></div>
                </div>
        
            </div>
            </transition>

            <!-- <div class='transform rotate-180 absolute bottom-48'>
                <div class="animate-bounce">
                    <Mxm_icon icon-name="icon-arrow" :size='42'></Mxm_icon>
                </div>
            </div> -->
        </div>
 
    </div>
</template>

<style scoped>
.zeroSize{
  font-size:0px;
}
.left-m{
 right: 20px;
 top: -90px;
}
.right-m{
 right: -90px;
 bottom: -90px;
}
</style>