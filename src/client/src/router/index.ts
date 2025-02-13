import { createRouter, createWebHistory } from 'vue-router';

const route = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('../views/IndexPage.vue')
        },

        // Products
        {
            path: '/product/list',
            component: () => import('../views/products/ListPage.vue')
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

export default route;