// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')
// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Routerni import qilamiz
import './style.css'

const app = createApp(App);

// Vue Router'ni ulaymiz
app.use(router);

app.mount('#app');