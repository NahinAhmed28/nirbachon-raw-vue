import { createApp } from 'vue'
import App from './App.vue'
import router from './router'



require('metismenu');
require('apexcharts');

 createApp(App).use(router).mount('#app')
