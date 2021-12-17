<template>
<div>
     <img :src="urlSrc" class="object-cover" :style='{width:width}'>
</div>
</template>

<script lang="ts" setup>
    withDefaults(
    defineProps<{
        urlSrc:string
        width:string
    }>(),
    {
        urlSrc:'',
        width:"125px"
    })
</script>