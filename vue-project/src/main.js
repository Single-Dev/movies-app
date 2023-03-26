import { createApp } from 'vue'
import App from '@/components/app/App.vue'
import uiComponents from '@/components/ui-components'
import '@/main.css'

const app = createApp(App)
uiComponents.map(component =>{
    app.component(component.name, component)
})
app.mount("#app")