import { createApp,h } from 'vue'
import App from './App.vue'
import DeviceDetector from "device-detector-js";
import { scrollController } from './layouts/Scrollview/scrollController'
import './style.css'


const app = createApp(

    {
        setup(){
            scrollController()
            const deviceDeviceDetector = new DeviceDetector()
            // const deviceInfo = deviceDeviceDetector.parse(navigator.userAgent)
            // const currentHost = location.host
            // const protocol = location.protocol
            // if(deviceInfo.device?.type === 'smartphone'&& !currentHost.match(/^m\./)){
            //     location.replace(protocol+'//m.'+currentHost)
            // }
            // if(deviceInfo.device?.type === 'desktop'&& currentHost.match(/^m\./)){
            //     console.log(protocol+currentHost.replace(/^m\./,''));
                
            //     location.replace(protocol+"//"+currentHost.replace(/^m\./,''))
            // }
            
            
        },
        render:()=>h(App) 
    }
)


app.mount('#app')
