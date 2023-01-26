import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import Style
import '@/assets/styels.css'

createApp(App).use(router).mount('#app')
