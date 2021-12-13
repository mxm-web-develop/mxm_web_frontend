<template>
    <div class="page h-screen w-full bg-white dark:bg-slate-800 " :style="{ backgroundColor:backgroundColor?backgroundColor:'' }">
        <slot></slot>
    </div>
</template>
<script lang="ts" setup>

    const props = defineProps<{
        backgroundColor?:string
    }>()
</script>