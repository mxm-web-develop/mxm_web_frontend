import { createApp,h } from 'vue'
import App from './App.vue'

import { scrollController } from './layouts/Scrollview/scrollController'
import './style.css'



const app = createApp(
    {
        setup(){
            scrollController()
        },
        render:()=>h(App) 
    }
)


app.mount('#app')
