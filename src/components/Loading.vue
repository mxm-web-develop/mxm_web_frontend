<template>
      <div class="flex min-h-pageMin items-center justify-center h-full w-full">
         <div class='animate-pulse'>
            <span class='text-xl font-bold'>{{text?text:''}}</span> 加载中 ..... 
         </div>
      </div>
</template>
<script lang="ts" setup>
defineProps<{
   text?: string,
   backgroundColor?:string
}>()
</script>