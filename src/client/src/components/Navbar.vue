<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useSiteConfigStore } from '../stores/siteConfig';
import { throttle } from "../libs/func";

const siteConfig = useSiteConfigStore();

const axPageHeader = ref();
const axNavbarScroller = ref();

const handleScroll = function () {
    const scrollPosition = window.scrollY || window.pageYOffset;
    const speed = 0.5;

    //banner.style.backgroundPositionY = -(scrollPosition * speed) + 'px';
    if (scrollPosition > 0) {
        axPageHeader.value.classList.add("bg-white");
    }
    else {
        axPageHeader.value.classList.remove("bg-white");
    }
}

const handleHover = function (e: MouseEvent) {
    let t = e.target as HTMLElement;

    while (t && !t.classList.contains('ax-navbar-item')) {
        if (t?.tagName === 'HEADER') {
            break;
        }
        t = t.parentElement as HTMLElement;
    }

    if (t && t.classList.contains('ax-navbar-item') && !t.classList.contains('logo')) {
        axNavbarScroller.value.style.left = `${t.offsetLeft}px`;
        axNavbarScroller.value.style.width = `${t.clientWidth}px`;
        axNavbarScroller.value.style.opacity = '1';
    }
    else {
        axNavbarScroller.value.style.opacity = '0';
    }
}

const throttledHandleScroll = throttle(handleScroll, 50);

onMounted(() => {
    window.addEventListener('scroll', throttledHandleScroll);
    window.addEventListener('touchmove', throttledHandleScroll);
    axPageHeader.value.addEventListener("mouseover", handleHover);
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', throttledHandleScroll);
    window.removeEventListener('touchmove', throttledHandleScroll);
    axPageHeader.value.removeEventListener("mouseover", handleHover);
})
</script>

<template>
    <header class="ax-header-menu" ref="axPageHeader">
        <div class="ax-navbar">
            <div class="ax-navbar__left">
                <div class="ax-navbar-item logo">
                    <div class="ax-navbar-item__link" href="https://blog.yemaster.cn/">{{ siteConfig.title }}</div>
                </div>
                <div class="ax-navbar-item">
                    <a class="ax-navbar-item__link-active ax-navbar-item__link"
                        href="https://blog.yemaster.cn/">最新活动</a>
                </div>
                <div class="ax-navbar-item">
                    <div class="ax-navbar-item__link" href="https://blog.yemaster.cn/about">产品与服务</div>
                </div>
                <div class="ax-navbar-item">
                    <div class="ax-navbar-item__link" href="https://blog.yemaster.cn/contest-history">帮助文档</div>
                </div>
                <div class="ax-navbar-item">
                    <div class="ax-navbar-item__link" href="https://blog.yemaster.cn/resources">资料与工具</div>
                </div>
            </div>
            <div class="ax-navbar__right">
                <div class="ax-navbar-item ax-menu-bar">
                    <div class="ax-navbar-item__link" href="javascript:;">
                        <i class="icon">&#xe601;</i>
                    </div>
                    <div class="ax-navbar-dropdown-container">
                        <a class="ax-navbar-dropdown__item" href="https://blog.yemaster.cn/">
                            首页
                        </a>
                        <a class="ax-navbar-dropdown__item" href="https://blog.yemaster.cn/about">
                            关于我 </a>
                        <a class="ax-navbar-dropdown__item" href="https://blog.yemaster.cn/contest-history">
                            比赛档案 </a>
                        <a class="ax-navbar-dropdown__item" href="https://blog.yemaster.cn/resources">
                            资料与工具 </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="ax-navbar-scroller" ref="axNavbarScroller"></div>
    </header>
    <section class="ax-banner">
        <video autoplay muted playsinline loop class="ax-banner-video">
            <source src="https://assets.yemaster.cn/videos/back1.mp4" type="video/mp4">
        </video>
        <div class="ax-banner__text">
            <div class="ax-banner-header">小白也能快速搭建Web应用</div>
            <div class="ax-banner-subheader">一键部署、性能卓越、价格优惠</div>
        </div>
    </section>
</template>

<style lang="css" scoped>
.ax-header-menu {
    position: fixed;
    top: 0;
    height: 4rem;
    width: 100%;
    padding-top: .75rem;
    padding-bottom: .75rem;
    z-index: 1000
}

.ax-header-menu.bg-white {
    height: 3.5rem;
    background-color: #fff;
    box-shadow: 0 1px 2px rgba(0, 0, 0, .2)
}

.ax-navbar {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    max-width: 80rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    margin-left: auto;
    margin-right: auto
}

.ax-navbar__left,
.ax-navbar__right {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.75rem
}

.ax-navbar-item {
    display: inline-flex;
    height: 100%;
    align-items: center;
    color: #6b7280;
    transition: all .2s;
}

.ax-navbar-item:hover {
    color: #212223;
    cursor: pointer;
}

.ax-navbar-item.logo {
    margin-right: .5rem
}

.ax-navbar-item__link {
    font-size: .875rem;
    line-height: 1.25rem
}

.ax-navbar-item.logo .ax-navbar-item__link {
    color: #212223 !important;
    font-weight: 500;
    font-size: 1.125rem;
    line-height: 1.75rem
}

.ax-navbar-item .ax-navbar-item__link.ax-navbar-item__link-active {
    color: #212223
}

.ax-menu-bar {
    display: none
}

.ax-menu-bar .ax-navbar-item__link {
    font-size: 1.125rem
}

.ax-menu-bar .ax-navbar-dropdown-container {
    position: absolute;
    top: 3.875rem;
    right: .5rem;
    background-color: #fff;
    border-radius: 2px;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-5px);
    box-shadow: 0 0 8px rgba(0, 0, 0, .15);
    transition: .2s cubic-bezier(.4, 0, .2, 1)
}

.ax-menu-bar:hover .ax-navbar-dropdown-container {
    opacity: 1;
    visibility: visible;
    transform: none;
    max-height: 150px;
    display: block
}

.ax-navbar-dropdown-container .ax-navbar-dropdown__item {
    display: block;
    padding: .625rem 1.25rem;
    min-width: 6rem;
    font-size: 1rem;
    color: #6b7280;
    transition: .15s cubic-bezier(.4, 0, .2, 1)
}

.ax-navbar-dropdown-container .ax-navbar-dropdown__item:hover {
    background-color: #f0f2f3;
    color: #212223
}

.ax-navbar-dropdown__item:not(:last-child) {
    border-bottom: 1px solid #ebeef5
}

.ax-navbar-scroller {
    position: absolute;
    bottom: 0px;
    height: 2px;
    background-color: #1780db;
    width: 50px;
    opacity: 0;

    transition: all .3s ease;
}

header:not(:hover) .ax-navbar-scroller {
    opacity: 0 !important;
}

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

.ax-banner::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, .6);
    z-index: -1
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

@media (max-width:768px) {

    .ax-navbar-item:not(.logo):not(.ax-menu-bar),
    .mobile-hidden {
        display: none
    }

    .ax-menu-bar {
        display: inline-flex
    }
}
</style>
