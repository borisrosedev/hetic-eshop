import { createApp } from 'vue'
import './style.css'
import { createRouter, createWebHashHistory } from "vue-router"
import App from './App.vue'
import Login from './pages/Login.vue'
import Home from './pages/Home.vue'

const routes = [

    {
        path: '/',
        component: Home
    },

    {
        path: '/login',
        component: Login
    }, 
]

const router = createRouter({
    routes: routes,
    history: createWebHashHistory()
})

const app = createApp(App)
app.use(router)
app.mount('#app')
