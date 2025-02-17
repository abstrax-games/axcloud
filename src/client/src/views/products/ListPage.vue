<script setup lang="ts">
import { onMounted, computed, ref } from 'vue';
import { useSiteConfigStore } from '@/stores/siteConfig';
import { useNavbarConfigStore } from '@/stores/navbarConfig';

import ChooseApplication from '@/views/products/ChooseApplication.vue';

import { NSteps, NStep, type StepsProps } from 'naive-ui';

const siteConfig = useSiteConfigStore();
const navbarConfig = useNavbarConfigStore();

const currentRef = ref<number | undefined>(1);
const current = computed(() => currentRef.value);
const currentStatus = ref<StepsProps['status']>('process')

navbarConfig.setNavbarMode(0);

onMounted(() => {
    document.title = `产品与服务 - ${siteConfig.title}`;
});
</script>

<template>
    <div class="ax-main">
        <div class="ax-card">
            <n-steps :current="current" :status="currentStatus">
                <n-step title="选取应用镜像" description="从丰富的应用市场中选取心仪的应用" />
                <n-step title="选择服务器套餐"
                    description="丰富的服务器套餐，包含国内和国外不同地域以及不同配置的服务器" />
                <n-step title="其他配置" description="进行网络、数据库、域名等的其他配置" />
                <n-step title="等待部署"
                    description="等待系统部署完成应用，即可开始使用！" />
            </n-steps>
        </div>
        <div v-if="current === 1">
            <ChooseApplication />
        </div>
    </div>
</template>