<script setup lang="ts">
import { onMounted } from 'vue';
import { useSiteConfigStore } from '../stores/siteConfig';
import { useNavbarConfigStore } from '../stores/navbarConfig';

const siteConfig = useSiteConfigStore();
const navbarConfig = useNavbarConfigStore();

navbarConfig.setNavbarMode(1);

onMounted(() => {
    document.title = `产品与服务 - ${siteConfig.title}`;
});
</script>

<template>

</template>