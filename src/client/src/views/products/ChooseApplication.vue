<script setup lang="ts">
import { NInput } from 'naive-ui';
import { Search24Regular } from '@vicons/fluent';
</script>

<template>
    <div class="ax-card">
        <n-input placeholder="搜索">
            <template #prefix>
                <n-icon :component="Search24Regular" />
            </template>
        </n-input>
    </div>
    <div class="ax-application-list">

    </div>
</template>

<style scoped>
.ax-application-list {
    display: flex;
    width: 100%;
}
</style>