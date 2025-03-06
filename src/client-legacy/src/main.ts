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
import route from './router';

import { useSiteConfigStore } from "./stores/siteConfig";

const app = createApp(App);
app.use(route);

const pinia = createPinia();
app.use(pinia);

const siteConfig = useSiteConfigStore();

async function main() {
    //await siteConfig.fetchSiteConfig();
    app.mount('#app');
}

main();
