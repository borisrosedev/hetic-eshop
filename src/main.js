import { createApp } from 'vue'
import './style.css'
import { createRouter, createWebHashHistory } from "vue-router"
import App from './App.vue'
import Login from './pages/Login.vue'
import Home from './pages/Home.vue'
import Products from './pages/Products.vue'
import { createVuePlugin } from 'harlem'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faSignInAlt, faShoppingBag, faStoreAlt   } from '@fortawesome/free-solid-svg-icons'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */

const routes = [

    {
        path: '/',
        component: Home
    },

    {
        path: '/login',
        component: Login
    }, 

    {
        path: '/products',
        component: Products
    }
]

const router = createRouter({
    routes: routes,
    history: createWebHashHistory()
})

library.add(faShoppingBag, faHome, faSignInAlt, faStoreAlt)
const app = createApp(App)
/* add icons to the library */

const harlem = createVuePlugin()


app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.use(harlem)
app.mount('#app')
