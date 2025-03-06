<script setup lang="ts">
</script>

<template>
    <footer class="bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div class="flex flex-col md:flex-row gap-12">
                <div class="md:w-1/2 space-y-6">
                    <div class="flex items-center gap-3">
                        <svg class="w-8 h-8 text-gray-900" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                            viewBox="0 0 32 32" fill="none">
                            <!-- 保持原始SVG路径 -->
                        </svg>
                        <span class="text-2xl font-bold text-gray-900">Axcloud</span>
                    </div>
                    <p class="text-gray-600 text-base leading-relaxed">
                        邮箱：feedback@absx.cloud
                    </p>
                </div>

                <div class="md:w-1/2 flex flex-col sm:flex-row gap-8">
                    <div class="w-full sm:w-1/2">
                        <h3 class="text-lg font-semibold text-gray-900 mb-4">帮助中心</h3>
                        <ul class="space-y-3">
                            <li class="text-gray-500 hover:text-gray-900 transition-colors duration-200"><a href="#">帮助中心</a></li>
                            <li class="text-gray-500 hover:text-gray-900 transition-colors duration-200"><a href="#">文件下载</a>
                            </li>
                            <li class="text-gray-500 hover:text-gray-900 transition-colors duration-200"><a href="#">联系我们</a></li>
                        </ul>
                    </div>
                    <div class="w-full sm:w-1/2">
                        <h3 class="text-lg font-semibold text-gray-900 mb-4">服务指南</h3>
                        <ul class="space-y-3">
                            <li class="text-gray-500 hover:text-gray-900 transition-colors duration-200"><a href="#">安全中心</a>
                            </li>
                            <li class="text-gray-500 hover:text-gray-900 transition-colors duration-200"><a href="#">实名认证</a>
                            </li>
                            <li class="text-gray-500 hover:text-gray-900 transition-colors duration-200"><a href="#">控制台</a></li>
                            <li class="text-gray-500 hover:text-gray-900 transition-colors duration-200"><a href="#">提交工单
                                    Initiatives</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="bg-black py-8">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex flex-col md:flex-row items-center justify-between gap-4">
                    <ul class="flex flex-wrap gap-6">
                        <li class="text-gray-300 hover:text-white hover:no-underline text-sm transition-colors"><a href="#">隐私政策</a></li>
                        <li class="text-gray-300 hover:text-white hover:no-underline text-sm transition-colors"><a href="#">使用条款</a></li>
                    </ul>

                    <div class="flex gap-4 text-gray-100">
                        © {{ new Date().getFullYear() }}, Axcloud.
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>