<script lang="ts" setup>
import {computed} from 'vue'
const props =
withDefaults(
defineProps<{
    size?:number
    iconName:string
    color?:string
    iconfont?:boolean
}>(),{
    iconfont:false,
    size:18,
    color:'#ffffff'
})
const getIconPath = computed(()=>{
    return `#${props.iconName}.svg`
})
</script>

<template>
  <svg :fill="color" class="svg-icon" :height="size" :width="size" > 
    <use :xlink:href="'#'+iconName" />
  </svg>
</template>