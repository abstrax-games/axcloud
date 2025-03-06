<script setup lang="ts">
import { onMounted } from 'vue';
import { useSiteConfigStore } from '../stores/siteConfig';
import { useNavbarConfigStore } from '../stores/navbarConfig';

const siteConfig = useSiteConfigStore();
const navbarConfig = useNavbarConfigStore();

navbarConfig.setNavbarMode(1);

onMounted(() => {
    document.title = `${siteConfig.title} - ${siteConfig.description}`;
})
</script>

<template>
    <section class="ax-banner">
        <video autoplay muted playsinline loop class="ax-banner-video">
            <source src="https://assets.yemaster.cn/videos/back1.mp4" type="video/mp4">
        </video>
        <div class="ax-banner__text">
            <div class="ax-banner-header">小白也能快速搭建Web应用</div>
            <div class="ax-banner-subheader">一键部署、性能卓越、功能丰富、价格实惠</div>
        </div>
    </section>
    <div v-for="i in 100">233<br /></div>

</template>

<style scoped>
.ax-banner {
    position: relative;
    width: 100%;
    height: 80vh;
    background-color: #dce9f8;
    background-size: cover;
    background-position: center 0;
    background-repeat: no-repeat;
    background-attachment: fixed;
    z-index: -2
}

.ax-banner__text {
    position: absolute;
    top: 50%;
    left: 5rem;
    width: 100%;
    max-width: calc(768px - 2rem);
}

.ax-banner-video {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.ax-banner-header {
    font-size: 2rem;
}

.ax-banner-subheader {
    margin-top: .5rem;
    font-size: 1.125rem;
}
</style>