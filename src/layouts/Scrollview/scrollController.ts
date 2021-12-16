import BScroll, { BScrollInstance } from "better-scroll";

import { inject, onBeforeUnmount, onMounted, provide, Ref, ref } from "@vue/runtime-core";
import { BScrollConstructor } from "@better-scroll/core/dist/types/BScroll";

const default_config = {
    probeType: 3,
    scrollX:false,
    scrollY:true,
    mouseWheel: {
      speed: 10,
      invert: false,
      easeTime: 500,
    },
    // slide:true,
    observeDOM:true,
    specifiedIndexAsContent: 1,
    scrollbar: true,
    click:true,
    bounce: {
        top: false,
        bottom: true,
        left: false,
        right: false
      }
  }
const Symbol = 'scrollController'
type Provider_Type = {
    Scroller:Ref<BScrollConstructor>,
    doInitScroll:(target: any)=>any,
    destoryScroll:()=>any
}
export const scrollController = ()=>{
    const Scroller = ref()
    const doInitScroll =(target: any,config?:any)=>{
        if(target)
            Scroller.value = new BScroll(target, config?config:default_config)
            console.log('生成新的滚动控制器');
    }
    const destoryScroll = ()=>{
        if(Scroller.value)
            Scroller.value.destroy();
            console.log('滚动控制已经销毁');
    }

    provide(Symbol,{
        Scroller,
        doInitScroll,
        destoryScroll
    })
}

export const usescrollController =()=>{
    const store = inject<Provider_Type>(Symbol)
    if(!store){
        throw new Error('没有数据')
    }else{
        return store 
    }
}