<script setup lang="ts">
import { NModalProvider, NNotificationProvider } from 'naive-ui';

import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
</script>
<template>
    <n-modal-provider>
        <n-notification-provider>
            <Navbar />
            <router-view />
            <Footer />
        </n-notification-provider>
    </n-modal-provider>
</template>