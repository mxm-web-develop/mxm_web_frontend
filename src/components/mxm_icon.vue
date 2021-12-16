<script lang="ts" setup>
import {computed} from 'vue'
const props =
withDefaults(
defineProps<{
    size?:number
    iconName:string
    iconColor?:string
    iconfont?:boolean
}>(),{
    iconfont:false,
    size:18,
    iconColor:'#ffffff'
})
const getIconPath = computed(()=>{
    return `#${props.iconName}.svg`
})
</script>

<template>
  <svg :fill="iconColor" class="svg-icon" :height="size" :width="size" > 
    <use :xlink:href="'#'+iconName" />
  </svg>
</template>