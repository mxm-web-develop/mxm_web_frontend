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
Object.entries(directives).forEach((v,k) =>{
    app.directive(v[0],v[1])
});
app.mount('#app')
