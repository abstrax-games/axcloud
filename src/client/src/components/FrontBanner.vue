<script setup lang="ts">


</script>

<template>
    <section class="ax-banner">
        <div class="ax-banner-container">
            <div class="ax-banner__text">
                <div class="ax-banner-header">极速 & 安全 & 丰富<br>网站应用部署</div>
                <div class="ax-banner-button">立即体验</div>
            </div>
        </div>
        <div class="ax-banner-image">
            <img src="/imgs/main-slide-1.png" alt="banner" class="ax-banner-image-element">
        </div>
    </section>
</template>

<style lang="css" scoped>
.ax-banner {
    width: 100%;
    height: 100vh;
    background-color: #fff;
    background-image: url('/imgs/swiper-bg.png');
    background-size: cover;
    background-position-y: 150px;
    background-repeat: no-repeat;
    z-index: -2
}

.ax-banner-container {
    position: relative;
    height: 100%;
    width: 90%;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    z-index: 1;
}

@media (min-width: 1200px) {
    .ax-banner {
        min-height: 100vh;
    }
}

@media (min-width: 992px) {
    .ax-banner {
        min-height: 100vh;
    }
}

@media (min-width: 768px) {
    .ax-banner {
        min-height: 80vh;
    }
}


.ax-banner-header {
    font-size: 28px;
    line-height: 1.25;
    font-weight: 100;
}

@media (min-width: 768px) {
    .ax-banner-header {
        font-size: 36px;
    }
}

@media (min-width: 1200px) {
    .ax-banner-header {
        font-size: 50px;
    }
}

@media (min-width: 1600px) {
    .ax-banner-header {
        font-size: 62px;
    }
}

.ax-banner__text {
    position: absolute;
    top: 35%;
    left: 0;
    width: 60%;
    max-width: calc(768px - 2rem);
}

.ax-banner-button {
    display: inline-block;
    padding: 0 3rem;
    background-color: #437fec;
    color: #fff;
    font-size: 18px;
    line-height: 54px;
    height: 54px;
    border-radius: 27px;
    cursor: pointer;

    transition: all .2s;
}

.ax-banner-button:hover {
    background-color: #3b6cb7;
}

.ax-banner-button {
    margin-top: 30px;
}

@media (min-width: 1600px) {
    .ax-banner-button {
        margin-top: 48px;
    }
}

.ax-banner-subheader {
    margin-top: .5rem;
    font-size: 1.125rem;
}

.ax-banner-image {
    position: absolute;
    top: 50%;
    left: 30%;
    right: 7rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    transform: translateY(-50%);
    z-index: 0;
}

.ax-banner-image img {
    max-width: 50vw;
    animation: move infinite 3s;
    will-change: transform;
}

@keyframes move {
    0% {
        transform: rotate3d(0, 0, 0, 0deg);
    }

    50% {
        transform: rotate3d(0, 1, 0, 20deg);
    }

    100% {
        transform: rotate3d(0, 0, 0, 0deg);
    }
}

@media (min-width: 1200px) {
    .ax-banner-image img {
        animation: move infinite 3s;
        will-change: transform;
    }
}
</style>