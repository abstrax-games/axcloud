import { createRouter, createWebHistory } from 'vue-router';

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

const route = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('../views/IndexPage.vue')
        },

        // Products
        {
            path: '/product/buy',
            component: () => import('../views/products/BuyPage.vue')
        },

        {
            path: '/register',
            component: () => import('../views/RegisterPage.vue')
        },
        {
            path: '/forget',
            component: () => import('../views/ForgetPassword.vue')
        },
        {
            path: '/user',
            component: () => import('../views/UserTickets.vue')
        },
        {
            path: '/error',
            component: () => import('../views/ErrorPage.vue')
        },
    ]
});

route.beforeEach((to, from, next) => {
    // 如果from.query.service存在，访问login和register也会带上service参数
    NProgress.start()
    if (!to.query.path && (to.path === '/login' || to.path === '/register')) {
        next({ path: to.path, query: { path: from.query.path } });
    } else {
        next();
    }
});

route.afterEach(() => {
    NProgress.done()
})

export default route;