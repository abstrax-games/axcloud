import { createApp } from 'vue';
import { createPinia } from "pinia";

// 字体
// 通用字体
import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'

// css文件
import './style.css';

import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

import { useSiteConfigStore } from "./stores/siteConfig";

const app = createApp(App);
// Route
const route = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('./views/IndexPage.vue')
        },
        {
            path: '/register',
            component: () => import('./views/RegisterPage.vue')
        },
        {
            path: '/forget',
            component: () => import('./views/ForgetPassword.vue')
        },
        {
            path: '/user',
            component: () => import('./views/UserTickets.vue')
        },
        {
            path: '/error',
            component: () => import('./views/ErrorPage.vue')
        },
    ]
});
route.beforeEach((to, from, next) => {
    // 如果from.query.service存在，访问login和register也会带上service参数
    if (!to.query.service && (to.path === '/' || to.path === '/register')) {
        if (from.query.service) {
            next({ path: to.path, query: { service: from.query.service, path: from.query.path } });
        } else {
            next();
        }
    } else {
        next();
    }
});
app.use(route);


const pinia = createPinia();
app.use(pinia);

const siteConfig = useSiteConfigStore();

async function main() {
    await siteConfig.fetchSiteConfig();
    app.mount('#app');
}

main();
