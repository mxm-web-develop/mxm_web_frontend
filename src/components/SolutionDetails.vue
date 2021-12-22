

<script lang="ts" setup>
import {computed, ref} from 'vue'
import {DATATYPE} from '../views/Solution.vue'
import Tag from './Tag.vue'
enum TABS{
    DESCRIPTION = 'description',
    DEPENDENCIES ='dependencise',
    LINKS='links',
}
defineProps<{
    data:[string,DATATYPE]
}>()
const showTabs = computed(()=>{
    return function(tab:string){
        switch (tab) {
            case TABS.DEPENDENCIES:
                return '技术方案'
            case TABS.DESCRIPTION:
                return '简介'
            case TABS.LINKS:
                return '案例'
        }
    }
})
const stateDesrender = computed(()=>{
    return function(state:number){
        switch (state) {
            case 0:
                return '该项目依然不成熟，处于研究和开发期间，只推荐在开发环境中使用'
            case 1:
                return '该项目已经是成熟状态，可以用于生产环境'
            case 2:
                return '该项目可能存在一些不稳定，可能是第三方依赖的稳定性问题，也可能是设备兼容问题，谨慎考虑使用在生产环境'
        }
    }
})
const tabActive = ref(TABS.DESCRIPTION)
</script>
<template>
  <div class='flex flex-col px-6 py-6'>
      <div class=' text-lg flex'>
          <div>{{data[0]}}</div>
          <Tag :state='data[1].state?data[1].state:0'></Tag>
      </div>
      <div class='state-descript py-2 text-xs text-slate-300'>
          {{stateDesrender(data[1].state)}}
      </div>
      <div class='flex py-1'>
          <div v-for="(i,v) in TABS" :key="i" 
          class="pr-5 border-r border-slate-200 last:border-none pl-5 first:pl-0 cursor-pointer text-sm text-slate-300"
          :class="tabActive===i?'text-black':''"
          @click="()=> tabActive = i"
          >
            {{showTabs(i)}}
          </div>
      </div>
      <div class='tab-render flex flex-col'>
          <div v-if='tabActive === TABS.DESCRIPTION'>
          <div class='intro text-sm py-2 opacity-80'>
             - {{data[1].introduction}}
          </div>          
          </div>



      </div>
  </div>
</template>