import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
// vue 3 toastify styles
import 'vue3-toastify/dist/index.css';
//  AOS styles 
import 'aos/dist/aos.css'; 
import AOS from 'aos';    

AOS.init();

createApp(App).mount('#app');

