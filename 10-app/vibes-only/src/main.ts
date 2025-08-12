import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { preloadIdeasQueue } from '@/data/loadIdeas'

// Preload ideas once at app startup so subsequent selections are from a randomized queue
preloadIdeasQueue()

createApp(App).use(router).mount('#app')
