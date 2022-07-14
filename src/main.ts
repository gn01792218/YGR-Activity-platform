import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/style/style.css'
import i18 from './i18n/index'
createApp(App).use(router).use(store).use(i18).mount('#app')
