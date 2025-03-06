<script setup lang="ts">
</script>

<template>
    <div class="flex flex-col items-center justify-center min-h-screen py-12 px-4">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div class="flex flex-col md:flex-row items-center justify-center gap-8">
                <img class="w-full md:w-1/2 h-64 object-contain"
                    src="/imgs/not-found.png"
                    alt="404 Image">

                <div class="space-y-6">
                    <h1 class="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl">
                        Page Not Found
                    </h1>
                    <p class="text-lg text-gray-500">
                        Sorry, we couldn't find the page.
                    </p>
                    <router-link to="/" class="inline-block">
                        <button
                            class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
                            type="button">
                            返回主页
                        </button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>

    <!-- 版权部分 -->
    <footer class="fixed bottom-0 w-full bg-gray-100 py-4">
        <div class="max-w-7xl mx-auto px-4 text-center text-gray-600">
            &copy; {{ new Date().getFullYear() }} Axcloud. All rights reserved.
        </div>
    </footer>
</template>