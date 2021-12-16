<script lang="ts" setup>
import Tag from './Tag.vue';
import {computed} from 'vue'
import {DATATYPE} from '@/views/Solution.vue'
import dayjs from 'dayjs'
defineProps<{
    name:string
    solutionData:DATATYPE
    isActived:boolean
}>()
const emit = defineEmits(['itemOnClick'])
const showSolutionDetails=(item:string)=>{
    emit('itemOnClick',item)
}
const displayReadableTime = computed(()=>{
    return function(timestame:number){
       return dayjs(timestame).format('YYYY-MM-DD')
    }
})

</script>

<template>
    <div class="item pl-2 py-3 border-b border-slate-100 cursor-pointer hover:bg-slate-50 rounded  flex" 
        :class="isActived?'bg-slate-50':''"
        @click="showSolutionDetails(name)"
    >
            <div class='app-icon  rounded-full  bg-slate-100'>
                <div class='h-12 w-12 md:h-16 md:w-16 flex items-center justify-center'>
                        {{solutionData.icon?solutionData.icon:'无'}}
                </div>
            </div>
            <div class="flex flex-col">
                <div class="flex  px-3 justify-between  items-start"> 
                    <div class="text-sm md:text-lg">
                        {{name}}
                    </div>
                    <Tag :state="solutionData.state"></Tag>
                </div>
                <div class="px-3 text-xs hidden md:block opacity-50">
                    last update:{{displayReadableTime(solutionData.updateDate)}}
                </div>
            </div>
    </div>
</template>