import { createApp,defineAsyncComponent,h, onBeforeMount,withDirectives } from 'vue'
import App from './App.vue'
// import DeviceDetector from "device-detector-js";
import { scrollController } from './layouts/Scrollview/scrollController'
import './style.css'
import * as directives from './directives'

const app = createApp(
    {
         setup(){
             scrollController()
        },
        render:()=>h(App) 
    }
)
console.log(directives);

Object.entries(directives).forEach((v,k) =>{
    console.log(v,k);
    
    app.directive(v[0],v[1] as any)
});

app.mount('#app')
