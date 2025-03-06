<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useSiteConfigStore } from '../stores/siteConfig';
import { useNavbarConfigStore } from '../stores/navbarConfig';
import { throttle } from "../libs/func";

const siteConfig = useSiteConfigStore();
const navbarConfig = useNavbarConfigStore();
const route = useRoute();
const router = useRouter();

const axPageHeader = ref();
const axNavbarScroller = ref();

const handleScroll = function () {
    const scrollPosition = window.scrollY || window.pageYOffset;

    //banner.style.backgroundPositionY = -(scrollPosition * speed) + 'px';
    if (scrollPosition > 0 || navbarConfig.navbarMode === 0) {
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

function gotoPage(link: string) {
    console.log(link);
    router.push(link);
}

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
    <header class="ax-header-menu" ref="axPageHeader" :class="{ 'bg-white': navbarConfig.navbarMode === 0 }">
        <div class="ax-navbar">
            <div class="ax-navbar__left">
                <div class="ax-navbar-item logo">
                    <div class="ax-navbar-item__link" href="https://blog.yemaster.cn/" @click="gotoPage('/')">{{ siteConfig.title }}</div>
                </div>
                <div class="ax-navbar-item" v-for="navbarItem in siteConfig.navbar" @click="gotoPage(navbarItem.link)">
                    <div :class="{ 'ax-navbar-item__link-active': route.path === navbarItem.link }" class="ax-navbar-item__link">{{ navbarItem.name }}</div>
                </div>
            </div>
            <div class="ax-navbar__right">
                <div class="ax-navbar-item" @click="gotoPage('/login')">
                    <div class="ax-navbar-item__link">登录</div>
                </div>
                <div class="ax-navbar-item" @click="gotoPage('/register')">
                    <div class="ax-navbar-item__link">注册</div>
                </div>
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
    max-width: 1200px;
    height: 100%;
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
