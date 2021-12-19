<script lang="ts" setup>
    interface CheckBox {
        label: string;
        checked?: boolean;
    }
    const porps = defineProps<{
        data:CheckBox[]
    }>()
</script>

<template>
    <div class='filter flex md:justify-end'>
        <div class='mxm-checkbox-item flex items-center border-r border-slate-200 last:border-none mr-2'
         v-for="(i,index) in data" :key="index"
         
         >
            <input type="checkbox" class='default:ring-2 cursor-pointer' :value="index" :checked='i.checked'>
            <label class='mxm-checkbox-label text-xs px-2'>{{i.label}}</label>
        </div>
    </div>
</template>