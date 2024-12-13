import { createApp } from 'vue'
import router from  "./routes"
import './style.css'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"

createApp(App).use(router).mount('#app')
