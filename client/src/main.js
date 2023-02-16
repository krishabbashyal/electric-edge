import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import LandingPage from './pages/LandingPage'
import HomePage from './pages/HomePage'
import './assets/tailwind.css'


const app = createApp(App)
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: LandingPage},
        { path: '/home', component: HomePage},
    ]
})

app.use(router)
app.mount('#app')
