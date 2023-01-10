import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import './theme.css'
import store from '@/store'

createApp(App)
	.use(store)
	.use(router)
	.mount('#app')
