<template>
    <div class='w-full h-full md:min-w-padPage md:max-w-HdPage mx-auto px-6 py-12 border-b border-slate-50' :class="overWirteClass">
        <slot></slot>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
    overWirteClass?:string
}>()
</script>