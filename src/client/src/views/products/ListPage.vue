<script setup lang="ts">
import { onMounted, computed, ref } from 'vue';
import { useSiteConfigStore } from '@/stores/siteConfig';
import { useNavbarConfigStore } from '@/stores/navbarConfig';

import ChooseApplication from '@/views/products/ChooseApplication.vue';

import { NSteps, NStep, type StepsProps, NButton } from 'naive-ui';

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
                <n-step title="选择服务器套餐" description="丰富的服务器套餐，包含国内和国外不同地域以及不同配置的服务器" />
                <n-step title="其他配置" description="进行网络、数据库、域名等的其他配置" />
                <n-step title="等待部署" description="等待系统部署完成应用，即可开始使用！" />
            </n-steps>
        </div>
        <div v-if="current === 1">
            <ChooseApplication />
        </div>
    </div>
    <div class="ax-height-4"></div>
    <div class="ax-order-overview">
        <div class="ax-order-overview-column">
            <div class="ax-order-overview-item">
                <div class="ax-order-overview-item__label">应用名称</div>
                <div class="ax-order-overview-item__value">HUSTOJ</div>
            </div>
            <div class="ax-order-overview-item">
                <div class="ax-order-overview-item__label">应用版本</div>
                <div class="ax-order-overview-item__value">20250220</div>
            </div>
        </div>
        <div class="ax-order-overview-column">
            <div class="ax-order-overview-item">
                <div class="ax-order-overview-item__label">服务器配置</div>
                <div class="ax-order-overview-item__value">--</div>
            </div>
        </div>
        <div class="ax-order-overview-price-column">
            <div class="ax-order-overview-price-item">
                <div class="ax-order-overview-item__label">应付费用</div>
                <div class="ax-order-overview-item__value ax-order-overview-price">￥0.00</div>
            </div>
            <div>
                <button class="ax-order-overview-button">下一步</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.ax-order-overview {
    position: sticky;
    left: 0;
    bottom: 0;

    width: 100%;
    padding: 2rem 2.25rem;
    box-sizing: border-box;

    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    display: flex;
    gap: 2rem;
    align-items: center;
}

.ax-order-overview-column {
    width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
}

.ax-order-overview-item {
    display: flex;
    gap: 1rem;
}

.ax-order-overview-price-item {
    display: flex;
    gap: .25rem;
    align-items: flex-end;
}

.ax-order-overview-item:not(:last-child) {
    margin-bottom: .75rem;
}

.ax-order-overview-item__label {
    font-size: 14px;
    color: #666;
    line-height: 1;
    white-space: nowrap;
}

.ax-order-overview-item__value {
    font-size: 14px;
    color: #212223;
    line-height: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.ax-order-overview-price-column {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
}

.ax-order-overview-price {
    font-size: 2rem;
    color: #ff7f00;
    line-height: 1;
}

.ax-order-overview-button {
    padding: .5rem 2rem;
    background-color: #1780db;
    color: #fff;
    border: none;
    font-size: 16px;
    white-space: nowrap;
    cursor: pointer;

    transition: all 0.3s ease-in-out;
}

.ax-order-overview-button:hover {
    background-color: #0f6abf;
}
</style>