import { ref } from 'vue';
import { defineStore } from "pinia";
import { fetchData } from '../services/fetchData';

type NavbarItem = {
    name: string;
    link: string;
}

type AxcloudConfig = {
    title: string;
    description: string;

    navbar: NavbarItem[];
}

const defaultNavbar: NavbarItem[] = [
    { name: "最新活动", link: "/activity" },
    { name: "产品与服务", link: "/product/list" },
    { name: "帮助文档", link: "/help" },
    { name: "联系我们", link: "/contact "}
]

export const useSiteConfigStore = defineStore('siteConfig', () => {
    const title = ref("Axcloud");
    const description = ref("小白也能轻松使用的云平台");
    const navbar = ref(defaultNavbar);

    async function fetchSiteConfig() {
        const res = await fetchData.get<AxcloudConfig>('/config');
        if (res.success) {
            title.value = res.data?.title ?? "Axcloud";
            description.value = res.data?.description ?? "小白也能轻松使用的云平台";
            navbar.value = res.data?.navbar ?? defaultNavbar;
        }
    }

    return {
        title,
        description,
        navbar,
        fetchSiteConfig
    };
});