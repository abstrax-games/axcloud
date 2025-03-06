import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'

import PrimeVue from 'primevue/config'
import 'primeicons/primeicons.css'
import Axlight from './themes/axlight'
import ConfirmationService from 'primevue/confirmationservice'
import ToastService from 'primevue/toastservice'

import { createPinia } from 'pinia'

import './style.css'
import App from './App.vue'

const router = createRouter({
    history: createWebHistory(),
    routes,
})

const app = createApp(App)

const pinia = createPinia()
app.use(pinia)

app.use(router)

app.use(PrimeVue, {
    theme: {
        preset: Axlight,
    }
})
app.use(ConfirmationService)
app.use(ToastService)
app.mount('#app')
