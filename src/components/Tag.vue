<template>
    <div class='text-xs px-3 py-1 text-white mx-2 h-6 rounded-t-lg' :class="getStateColor(state)">
        {{getState(state)}}
    </div>
</template>

<script lang="ts" setup>
import {computed} from 'vue'
defineProps<{
    state:number
}>()

const getState = computed(()=>{
    return function(state:number) {
        switch(state){
            case 0:
             return 'DEVELOPING'
            case 1:
             return 'STABLE'
            case 2:
             return 'UNSTABLE'
        }
    }
})
const getStateColor = computed(()=>{
        return function(state:number){
            switch(state){
                case 0:
                    return ' bg-red-500'          
                case 1:
                    return ' bg-green-500'
                case 2:
                    return ' bg-yellow-500'
            }
        }
})
</script>