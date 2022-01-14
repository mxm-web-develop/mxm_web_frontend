import { inject, provide, reactive } from "vue"

const StyleSheet = 'StyleSheet'

export const StyleSheetProvider = ()=>{
    const data = reactive({
        colors:[],
        fonts:[],
        mode:[],
        spacing:[],
        border:[],
        shadow:[],
    })

    provide(StyleSheet,{
        data
    })
        
    
}


export const useStyleSheet=()=>{
    const FmStore = inject<any>(StyleSheet)
    if(!FmStore){
        throw new Error('没有数据')
    }else{
        return FmStore 
    }
 
}
