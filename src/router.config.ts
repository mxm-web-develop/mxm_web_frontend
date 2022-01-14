import { defineAsyncComponent, defineComponent } from "vue"
import { createRouter, createWebHashHistory, createWebHistory } from "vue-router"

const MxmStyleSheet = defineAsyncComponent(()=>import('./views/DesignComponents/MxmSsheet.vue'))
const Fonts = defineComponent(()=>import('./views/DesignComponents/StyleSheetComp/Fonts.vue'))
const Colors = defineComponent(()=>import('./views/DesignComponents/StyleSheetComp/Colors.vue'))
const mxmStyleSheetRouter =[
    {
        path:'/stylesheet',
        name:'stylesheet',
        component:MxmStyleSheet,
        children: [
            {
                path:'/fonts',
                component:Fonts,
            },
            {
                path:'/colors',
                component:Colors,
            }
        ]
    }
]

export const router = createRouter({
    history:createWebHistory(),
    routes:mxmStyleSheetRouter
})