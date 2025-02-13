<script setup lang="ts">
import { onMounted } from 'vue';
import { useSiteConfigStore } from '@/stores/siteConfig';
import { useNavbarConfigStore } from '@/stores/navbarConfig';

import { NTabs, NTabPane } from 'naive-ui';

const siteConfig = useSiteConfigStore();
const navbarConfig = useNavbarConfigStore();

navbarConfig.setNavbarMode(0);

onMounted(() => {
    document.title = `产品与服务 - ${siteConfig.title}`;
});
</script>

<template>
    <div class="ax-main">
        <n-tabs type="line" animated>
            <n-tab-pane name="oasis" tab="速建应用">
                Hustoj
            </n-tab-pane>
            <n-tab-pane name="the beatles" tab="云虚拟主机">
                Free
            </n-tab-pane>
            <n-tab-pane name="jay chou" tab="云服务器">
                
            </n-tab-pane>
        </n-tabs>
    </div>
</template>