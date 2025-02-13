<script setup lang="ts">
import { NModalProvider, NNotificationProvider } from 'naive-ui';

import Navbar from './components/Navbar.vue';
</script>
<template>
    <n-modal-provider>
        <n-notification-provider>
            <Navbar />
            <router-view />
        </n-notification-provider>
    </n-modal-provider>
</template>