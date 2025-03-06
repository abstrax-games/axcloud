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

const userItems1 = [{
    label: '登录',
    command: () => {
        gotoPage('/login')
    }
}, {
    label: '注册',
    command: () => {
        gotoPage('/register')
    }
}]

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
                    <div class="ax-navbar-item__link" href="https://blog.yemaster.cn/" @click="gotoPage('/')">{{
                        siteConfig.title }}</div>
                </div>
            </div>
            <div class="ax-navbar__right">
                <div class="ax-navbar-item" v-for="navbarItem in siteConfig.navbar" @click="gotoPage(navbarItem.link)">
                    <div :class="{ 'ax-navbar-item__link-active': route.path === navbarItem.link }"
                        class="ax-navbar-item__link">{{ navbarItem.name }}</div>
                </div>
                <div class="ax-navbar-item">
                    <div class="ax-navbar-item__link ax-navbar-dropdown">
                        <div class="ax-navbar-item__link" href="javascript:;">
                            账户 <i class="pi pi-angle-down"></i>
                        </div>
                        <div class="ax-navbar-dropdown-container">
                            <div class="ax-navbar-dropdown-title">账户</div>
                            <router-link class="ax-navbar-dropdown__item" to="/login">
                                <span class="ax-navbar-dropdown-item__icon">
                                    <i class="pi pi-arrow-right" style="font-size: 12px"></i>
                                </span>
                                <span class="ax-navbar-dropdown-item__text">登录</span>
                            </router-link>
                            <router-link class="ax-navbar-dropdown__item" to="/register">
                                <span class="ax-navbar-dropdown-item__icon">
                                    <i class="pi pi-arrow-right" style="font-size: 12px"></i>
                                </span>
                                <span class="ax-navbar-dropdown-item__text">注册</span>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="ax-navbar-item ax-menu-bar ax-navbar-dropdown">
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
    height: 5.5rem;
    width: 100%;
    padding-top: 16px;
    padding-bottom: 16px;
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
    width: calc(100% - 60px);
    max-width: 1200px;
    height: 100%;
    margin-left: auto;
    margin-right: auto
}

@media (max-width: 768px) {
    .ax-header-menu {
        height: 5rem;
    }
}

.ax-navbar__left,
.ax-navbar__right {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px
}

.ax-navbar-item {
    display: inline-flex;
    height: 100%;
    align-items: center;
    color: #212223;
    transition: all .2s;
}

.ax-navbar-item:hover {
    cursor: pointer;
}

.ax-navbar-item.logo {
    margin-right: .5rem
}

.ax-navbar-item__link {
    display: flex;
    align-items: center;
    font-size: 18px;
    line-height: 1.25rem;
    font-weight: 300;
    transition: all .2s;
}

.ax-header-menu.bg-white .ax-navbar-item__link {
    font-size: 16px;
    font-weight: normal;
}

.ax-navbar-item__link i {
    margin-left: 5px;
}

.ax-navbar-item.logo .ax-navbar-item__link {
    color: #212223 !important;
    font-weight: 500;
    font-size: 24px;
    line-height: 1.75rem
}

.ax-navbar-item .ax-navbar-item__link.ax-navbar-item__link-active {
    color: #212223
}

.ax-menu-bar {
    display: none
}

.ax-navbar-dropdown {
    position: relative;
}

.ax-navbar-dropdown .ax-navbar-item__link {
    font-size: 18px
}

.ax-navbar-dropdown .ax-navbar-dropdown-container {
    position: absolute;
    top: 32px;
    min-width: 260px;
    right: 0;
    padding: 25px 35px 21px;
    border-radius: 6px;
    opacity: 0;
    background-color: #fff;
    visibility: hidden;
    box-sizing: border-box;
    transform: translateY(-5px);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.175);
    transition: .2s cubic-bezier(.4, 0, .2, 1);
    z-index: 233;
}

.ax-navbar-item:hover .ax-navbar-dropdown .ax-navbar-dropdown-container {
    opacity: 1;
    visibility: visible;
    transform: none;
    display: block
}

.ax-navbar-dropdown-container .ax-navbar-dropdown-title {
    font-size: 18px;
    line-height: 1.5;
    margin-bottom: 12px;
}

.ax-navbar-dropdown-container .ax-navbar-dropdown__item {
    display: flex;
    align-items: center;
    position: relative;
    gap: 12px;
    left: -26px;
    font-size: 15px;
    line-height: 1.7;
    transition: .15s cubic-bezier(.4, 0, .2, 1)
}

.ax-navbar-dropdown-container .ax-navbar-dropdown__item:hover {
    left: 0;
    text-decoration: none;
}

.ax-navbar-dropdown-container .ax-navbar-dropdown-item__icon {
    content: "→";
    color: #777;
    width: 14px;
    opacity: 0;
    transition: opacity .2s ease-in-out;
}

.ax-navbar-dropdown-container .ax-navbar-dropdown__item:hover .ax-navbar-dropdown-item__icon {
    opacity: 1;
}

.ax-navbar-dropdown-container .ax-navbar-dropdown__item:hover .ax-navbar-dropdown-item__text {
    color: #1780db;
}

.ax-navbar-dropdown__item:not(:last-child) {
    margin-bottom: 6px;
}

.ax-navbar-scroller {
    position: absolute;
    bottom: 0px;
    height: 2px;
    background-color: #1780db;
    width: 50px;
    opacity: 0;
    box-shadow: 0 -2px 8px #1780db45;

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
