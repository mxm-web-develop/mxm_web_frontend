<script lang="ts" setup>
import Mxm_icon from './mxm_icon.vue';
withDefaults(
defineProps<{
    iconName: string
    size?: number
    val?:number
    isActived:boolean
}>(),{
    size:18
})

</script>


<template>
    <div class='flex flex-col cursor-pointer  items-center  border-gray-600 border-r mr-3 pr-3 pl-0 first:pl-3'>
        <Mxm_icon :icon-name="iconName" :color="isActived?'#F13842':' #ffffff'"  iconfont :size='size'></Mxm_icon>
    </div>
</template>