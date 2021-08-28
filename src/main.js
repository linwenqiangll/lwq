import { createApp } from 'vue';
import router from './router/index.js';
import App from './App.vue';
import 'reset-css';
import './index.css';

createApp(App).use(router).mount('#app');
