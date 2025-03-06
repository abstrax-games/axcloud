<script setup lang="ts">
import { ref, computed } from 'vue';

import { Product, ProductPlan } from '@/models/Product';

import { NInput, NInputGroup, NButton, NPopover, NDropdown, NIcon } from 'naive-ui';
import { Search48Regular } from '@vicons/fluent';

// const chosenApplication = ref<ApplicationChoice | null>(null);
const chosenProduct = defineModel<Product | null>('product');
const chosenPlan = defineModel<ProductPlan | null>('plan');

const productArea = ref([
    { label: "全部", key: "all" },
    { label: "成都", key: "cd" },
    { label: "香港", key: "hk" },
]);
const chosenProductArea = ref("all");

function chooseProduct(product: Product) {
    chosenProduct.value = product;
}

function chooseProductPlan(plan: ProductPlan) {
    chosenPlan.value = plan;
}

const productList = ref<Product[]>([{
    id: 1,
    serverIp: "12.23.34.45",
    area: "成都",
    name: "成都1区",
    description: "成都1区",
    plans: [{
        id: 1,
        name: "",
        cpu: 10,
        memory: 20,
        swap: number,
        disk: number,
        sqlSize: number,
        ports: number,
        bandwidth: number,
        price: [66,77,88,99],
    }],
}]);

function handleSelectApplication(application: any, key: string | number) {
    application.chosenVersion = key;
}

const applicationListFiltered = computed(() => {
    if (chosenProductArea.value === 'all') {
        return applicationList.value;
    }
    return applicationList.value.filter((application: ApplicationChoice) => application.tags.includes(chosenProductArea.value));
});
</script>

<template>
    <div class="ax-card ax-application-filter">
        <div class="ax-filter-box">
            <div class="ax-filter-box__label">
                产品地域
            </div>
            <div class="ax-filter-box__input">
                <div class="ax-tag-box">
                    <span class="ax-tag" v-for="area in productArea" :key="area.key"
                        :class="{ 'ax-tag--selected': chosenProductArea === area.key }"
                        @click="chosenProductArea = area.key">{{
                            area.label }}</span>
                </div>
            </div>
        </div>
        <div class="ax-filter-box">
            <div class="ax-filter-box__label">
                产品选择
            </div>
            <div class="ax-filter-box__input">
                <div class="ax-tag-box">
                    <span class="ax-tag" v-for="area in productArea" :key="area.key"
                        :class="{ 'ax-tag--selected': chosenProductArea === area.key }"
                        @click="chosenProductArea = area.key">{{
                            area.label }}</span>
                </div>
            </div>
        </div>
    </div>
    <div class="ax-application-list">
        <div class="ax-application-item" v-for="application in applicationListFiltered" :key="application.name"
            :class="{ 'ax-application-item--selected': chosenApplication === application }"
            @click="chooseApplication(application)">
            <n-popover style="max-width: 200px" trigger="hover">
                <template #trigger>
                    <div class="ax-application-item-info">
                        <div class="ax-application-item-info__icon">
                            <img :src="application.icon" alt="logo" />
                        </div>
                        <div class="ax-application-item-info__name">{{ application.name }}</div>
                    </div>
                </template>
                <span>{{ application.description }}</span>
            </n-popover>
            <n-dropdown trigger="click" :options="application.versions"
                @select="(key) => handleSelectApplication(application, key)">
                <div class="ax-application-item-version">{{ application.chosenVersion }}</div>
            </n-dropdown>
        </div>
    </div>
</template>

<style scoped>
.ax-application-filter {
    padding: 1.5rem 2rem;
}

.ax-filter-box {
    display: flex;
    gap: 1.25rem;
    width: 100%;
    align-items: center;
}

.ax-tag-box {
    display: flex;
    gap: .75rem;
}

.ax-tag {
    padding: .25rem 1rem;
    background-color: #f2f3f8;
    border: 1px solid transparent;
    color: #666;
    font-size: 14px;
    transition: all 0.3s ease-in-out;
}

.ax-tag:hover {
    border-color: #1780db;
    color: #1780db;
    cursor: pointer;
}

.ax-tag--selected {
    border-color: #1780db;
    color: #1780db;
}

.ax-filter-box:not(:last-child) {
    margin-bottom: 1.5rem;
}

.ax-filter-box__label {
    font-size: 14px;
}

.ax-filter-box__input {
    flex: 1;
}

.ax-application-list {
    display: flex;
    width: 100%;
    gap: 1rem;
}

/* Application Item, 4 Columns. Decrease to 3 or less columns when screen size is small */

.ax-application-item {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 20%;

    background-color: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    box-sizing: border-box;

    border: 1px solid transparent;

    text-align: center;

    filter: grayscale(100%);
    transition: all 0.3s ease-in-out;
}

.ax-application-item:hover {
    border-color: #1780db;
    filter: grayscale(0%);
    cursor: pointer;
}

.ax-application-item--selected {
    border-color: #1780db;
    filter: grayscale(0%);
}

.ax-application-item-info {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: .75rem 1.5rem;
    background-color: #f2f3f8;
}

@media (max-width: 1200px) {
    .ax-application-item {
        width: 25%;
    }
}

@media (max-width: 768px) {
    .ax-application-item {
        width: 33.3333%;
    }
}

@media (max-width: 576px) {
    .ax-application-item {
        width: 50%;
    }
}

.ax-application-item-info__icon {
    display: flex;
    align-items: center;
    margin-right: 10px;
}

.ax-application-item-info__icon img {
    width: auto;
    height: 1.75rem;
}

.ax-application-item-info__name {
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 800;
}

.ax-application-item-info__description {
    font-size: 14px;
    color: #666;
}

.ax-application-item-version {
    padding: .5rem 1rem;
    font-size: 14px;
    color: #666;
}
</style>