
<script setup lang="ts">
import Mxm_icon from '@components/Mxm_icon.vue';
import Container from '@/layouts/Container/index.vue';
import Toolbar from '@/components/toolbar.vue';
import {computed, onMounted, reactive} from 'vue'
import gsap,{ Power1,Back,Circ,Power4} from "gsap";
import { usescrollController } from '../layouts/Scrollview/scrollController';
import { useWindowSize,useSessionStorage,} from '@vueuse/core'
import {ref,defineAsyncComponent,watch} from 'vue'
// import { useGlobalState } from '@/globalStore';

const About = defineAsyncComponent(()=>import(`./DesignComponents/Aboutme.vue`))
const Contact = defineAsyncComponent(()=>import(`./DesignComponents/Contact.vue`))
const MxmStyle = defineAsyncComponent(()=>import(`./DesignComponents/MxmSsheet.vue`))
// const appState =useGlobalState()
let tl: gsap.core.Timeline;
gsap.registerPlugin()
const emit = defineEmits(['onLoaderFinish'])
const {Scroller} = usescrollController()
enum TABS_ACTIVE{
        DEVELOP,
    DESIGN

}
enum DESIGN_NAV{
    HOME,
    ABOUTME,
    CONTACT,
    MXMSTYLE
}
const routes = {
    design:[
            {
                text:'AboutMe',
                value:1  
            },
            {
                text:'Contact',
                value:2
            },
            {
                text:'MxM Style Sheet',
                value:3
            }
    ],
    develop:[
        {
            text:'Solutions',
            value:0
        },
        {
            text:'MxM Next GUI',
            value:1
        },
        {
            text:'Knowledge',
            value:3
        },
        {
            text:'Tools',
            value:4
        },
        {
            text:'Servers',
            value:5
        }
    ]
}
const pageData = ref({
    toolbarActive:undefined,
    tabsActived:TABS_ACTIVE.DESIGN,
    designNav:DESIGN_NAV.HOME
})
watch(pageData.value,(newV)=>{
    if(newV.designNav !== DESIGN_NAV.HOME){
        Scroller.value.disable()
    }else{
         Scroller.value.enable()
    }
    
})
const {width}= useWindowSize()
const store = useSessionStorage('MXM_WEB',{
    animated:false
})






const toolbarActiveChange = (data:any)=> pageData.value.toolbarActive = data
const boxMoveIn = async()=>{

    if(width.value>765){
        if(!store.value.animated){
            loadingProgress()
            boxLoading()
            showTools()
            tl.then(()=>{
                store.value.animated = true
                emit('onLoaderFinish',true)
            }) 
        }else{
            loadingProgress()
            boxLoading()
            showTools()
            tl.progress(1)
            emit('onLoaderFinish',true)
        }
    }
} 
const scrollBtn = ()=>{
    pageData.value.tabsActived = TABS_ACTIVE.DEVELOP
    navItemClicked({text:'Solutions',value:0},0)
}
const navItemClicked=(item:any,index:number)=>{
    const el =Scroller.value.wrapper.children[1].children.item(index) as HTMLElement    
    if(el && pageData.value.tabsActived === TABS_ACTIVE.DEVELOP){
        Scroller.value.scrollToElement(el,1200,0,0)
    }else{
        pageData.value.designNav = item.value
    }
}
const loadingProgress =()=>{
    tl = gsap.timeline()
    tl.from('.animate-line',{duration:1.6 ,width:0})
    tl.to('.progress',{duration:0.3,opacity:0})
}

const boxLoading=()=>{
    tl.to('.left-x',{duration:0.6,rotate:45,ease:Circ.easeInOut})
    tl.to('.right-x',{duration:0.6,rotate:-45,ease:Circ.easeInOut},'-=0.6')
    tl.from('.left-m',{duration:0.2, opacity:0,ease:Circ.easeInOut})
    tl.from('.right-m',{duration:0.2, opacity:0,ease:Circ.easeInOut})
    tl.from('.animate-home ',{duration:0.6,x:0})
    tl.from('.nav',{duration:0.6,opacity:0,ease:Circ.easeInOut},'-=0.6')
}

const showTools=()=>{
    // tl.from('.toolbar',{duration:0.3,opacity:0,ease:Circ.easeInOut})
    tl.from('.scroll-icon',{duration:0.3,opacity:0,ease:Circ.easeInOut},'-=0.3')
}
const showActivedRoute = computed(()=>{
    if(pageData.value.tabsActived === TABS_ACTIVE.DESIGN){
        return routes.design 
    }else{
        return routes.develop 
    }
})
const emphaTextSet = [
    {
        keyword:'haha',
        link:'',
        color:'#F13842',
        size:'32px'
    },
    {
        keyword:'goods',
        link:'http://www.baidu.com',
        color:'#F13842',
        size:'32px'
    },
]
</script>
<template>
    <div class="home backgroun-set h-full w-full px-5 py-3 ">
        <!-- <div class='toolbar'>
           <Toolbar @activeOnchange='toolbarActiveChange'></Toolbar>
        </div> -->

        <div class="flex flex-col md:flex-row h-full items-center justify-start md:justify-center  pt-20 md:pt-0">
            <transition appear @enter="boxMoveIn" :css="false">
                <div class='animate-home  -translate-x-36  hidden md:flex relative' v-if='pageData.designNav===DESIGN_NAV.HOME'>
                    <div>
                        <div class='left-x animate-line bg-black rounded absolute top-half left-half -translate-x-half'></div>
                        <div class='right-x animate-line bg-black  rounded absolute top-half left-half -translate-x-half'></div>
                        <div class='progress text-center'>90%</div>
                        <div class='flex item-center mb-10 mr-3'>
                            <div class='left-m absolute animate-font cursor-pointer w-20 font-animate '>M<span class='text-sm newText'></span> </div>
                            <div class='right-m absolute animate-font cursor-pointer font-animate '>M<span class='text-sm opacity-40'></span></div>
                        </div>
                    </div>
                    <div class='absolute nav'>
                        <div class='flex items-center'>
                            <div class='font-animate animate-font  text-theme-red'>D</div>
               
                            <div class=' border-r ml-2 pr-2 cursor-pointer translate-y-5 font-animate-2 text-lg'
                            :class="pageData.tabsActived === TABS_ACTIVE.DEVELOP?'':'opacity-10'"
                            @click="()=>pageData.tabsActived = TABS_ACTIVE.DEVELOP"
                            >evelop</div>
                                         <div class=' border-l pl-2 cursor-pointer translate-y-5 font-animate-2 text-lg'
                                :class="pageData.tabsActived === TABS_ACTIVE.DESIGN?'':'opacity-10'"
                            @click="()=>pageData.tabsActived = TABS_ACTIVE.DESIGN"
                            >esign</div>
                        </div>
                        <div class='font-animate-2 text-sm opacity-70'>
                                <ul class='pl-16 w-60'>
                                    <li v-for='(k,index) in showActivedRoute' class='hover:animate-pulse cursor-pointer'
                                    @click="navItemClicked(k,index)"
                                    ><span class='mr-2'>-</span>{{k.text}}</li>    
                                </ul>
                        </div>
                    </div>
                </div>
            </transition>
                <!-- <div>sdfklsjdfkls</div> -->
                <About v-if="pageData.designNav === DESIGN_NAV.ABOUTME"></About>
                <Contact v-if="pageData.designNav === DESIGN_NAV.CONTACT"></Contact>
                <MxmStyle v-if="pageData.designNav === DESIGN_NAV.MXMSTYLE"></MxmStyle>
                <div class='scroll-icon transform flex flex-col item-center justify-center absolute bottom-48 cursor-pointer' >
                    <div v-if="pageData.designNav === DESIGN_NAV.HOME" class='text-center flex flex-col items-center justify-center'>
                        <div class="animate-bounce mx-auto">
                            <Mxm_icon icon-name="icon-arrow" color='#000000' :size='42' @click="scrollBtn"></Mxm_icon>
                        </div>
                        <div class='text-center opacity-80 font-animate-2'>scroll up</div>
                    </div>
                    <div v-else class='text-center flex flex-col items-center justify-center'>
                        <div class="animate-bounce mx-auto" >
                            <Mxm_icon icon-name="icon-a-undraw_handcrafts_mouse_arrow2" color='#000000' :size='36' @click='()=> pageData.designNav = DESIGN_NAV.HOME'></Mxm_icon>
                        </div>
                        <div class='text-center opacity-80 font-animate-2'>back home</div>
                    </div>
                </div>
        </div>
    </div>
</template>

<style scoped>

.zeroSize{
 font-size:0px;
}
.left-m{
 right: 70px;
 top:-40px;

}
.nav{
 left: 180px;
 top:-40px;
}
.right-m{
 left: 70px;
 top:-40px;

}
.animate-font{
  font-size:90px
}
.animate-line{
    width: 330px;
    height:3px
}
.progress{
    position: absolute;
    top: 30px;
    right: -13px;
}

.scroll-icon{
    bottom:85px;
}
/* .myfont{
   font-family: 'Press Start 2P', cursive;
} */
</style>