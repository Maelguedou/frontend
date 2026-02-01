import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {router} from './router'

const app = createApp(App)

app.use(router)// Dit à Vue : "Utilise ce routeur pour la navigation"

app.mount('#app')