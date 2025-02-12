import { ref } from 'vue';
import { defineStore } from "pinia";
import { fetchData } from '../services/fetchData';

type AxcloudConfig = {
    title: string;
}

export const useSiteConfigStore = defineStore('siteConfig', () => {
    const title = ref("Axcloud");

    async function fetchSiteConfig() {
        const res = await fetchData.get<AxcloudConfig>('/config');
        if (res.success) {
            title.value = res.data?.title ?? "Axcloud";
        }
    }

    return {
        title,
        fetchSiteConfig
    };
});