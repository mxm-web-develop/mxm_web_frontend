<template>
    <div class='w-full h-full md:w-pcBody mx-auto px-6 py-12 md:py-36 border-b border-slate-50' :class="overWirteClass">
        <slot></slot>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
    overWirteClass?:string
}>()
</script>