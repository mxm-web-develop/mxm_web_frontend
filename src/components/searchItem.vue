<script lang="ts" setup>
import Tag from './Tag.vue';
import {computed} from 'vue'
import {DATATYPE} from '@/views/Solution.vue'
import dayjs from 'dayjs'
interface SearchItem {
    id:string
    title:string
    keywords:string[]
    createTime:number
    type:string
    url:string
}
defineProps<{
    data:SearchItem

}>()
const emit = defineEmits(['itemOnClick'])
const showSolutionDetails=(item:string,data:DATATYPE)=>{
    emit('itemOnClick',[item,data])
}
const displayReadableTime = computed(()=>{
    return function(timestame:number){
       return dayjs(timestame).format('YYYY-MM-DD')
    }
})

</script>

<template>
    <div class="item ">

    </div>
</template>