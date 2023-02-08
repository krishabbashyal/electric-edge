import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import LandingPage from './pages/LandingPage'


const app = createApp(App)
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: LandingPage},
    ]
})

app.use(router)
app.mount('#app')
