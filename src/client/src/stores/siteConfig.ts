import { ref } from 'vue';
import { defineStore } from "pinia";
import { fetchData } from '../services/fetchData';

type AxcloudConfig = {
    title: string;
    description: string;
}

export const useSiteConfigStore = defineStore('siteConfig', () => {
    const title = ref("Axcloud");
    const description = ref("小白也能轻松使用的云平台");

    async function fetchSiteConfig() {
        const res = await fetchData.get<AxcloudConfig>('/config');
        if (res.success) {
            title.value = res.data?.title ?? "Axcloud";
            description.value = res.data?.description ?? "小白也能轻松使用的云平台";
        }
    }

    return {
        title,
        description,
        fetchSiteConfig
    };
});