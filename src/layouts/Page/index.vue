<template>
    <div class="page border shadow-2xl min-h-pageMin slide-page relative  w-full bg-white dark:bg-slate-800 " :class="cover?'h-screen min-h-cover':''" :style="{ backgroundColor:backgroundColor?backgroundColor:'' }" :id="id">
        <slot></slot>
    </div>
</template>
<script lang="ts" setup>
    import {ref} from 'vue'
    const props = defineProps<{
        backgroundColor?:string
        id:string
        cover?:boolean
    }>()

    const page = ref(null)
</script>

<style scoped>
/* .page {
    min-height:310px
} */

</style>