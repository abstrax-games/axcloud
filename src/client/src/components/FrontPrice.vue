<script setup lang="ts">
</script>

<template>
    <div class="bg-surface-50 dark:bg-surface-950 px-6 py-20 md:px-12 lg:px-20">
        <div class="flex flex-col gap-4 items-center justify-center mb-12">
            <div class="text-surface-900 dark:text-surface-0 font-light text-4xl lg:text-5xl text-center leading-tight">
                优选套餐</div>
            <div class="text-surface-500 dark:text-surface-400 text-lg text-center leading-normal">丰富的套餐供选择，还有几乎免费的试用套餐！</div>
        </div>

        <div class="flex lg:flex-row flex-col gap-8 max-w-7xl mx-auto">
            <div class="w-full flex-1 p-8 flex rounded-2xl flex-col bg-surface-0 dark:bg-surface-800 shadow-sm gap-6">
                <div class="flex flex-col gap-2">
                    <h4 class="text-surface-900 dark:text-surface-0 font-medium text-xl leading-tight">轻量体验版</h4>
                    <p class="text-surface-500 dark:text-surface-400 leading-normal">体验配置仅需 0.01 元 3 天，每个用户仅限一次！</p>
                </div>

                <div class="w-full h-px bg-surface-200 dark:bg-surface-700" />
                <div class="flex items-center gap-2">
                    <span class="font-bold text-3xl text-surface-900 dark:text-surface-0 leading-tight">¥0.01</span>
                    <span class="font-medium text-surface-500 dark:text-surface-400 leading-tight">3 天</span>
                </div>
                <div class="w-full h-px bg-surface-200 dark:bg-surface-600" />
                <ul class="list-none flex flex-col gap-4 flex-1">
                    <li class="flex items-center gap-2">
                        <i class="pi pi-check-circle !text-lg text-green-500" />
                        <span class="text-surface-800 dark:text-surface-100 leading-tight"> 免费的每日备份服务 </span>
                    </li>
                    <li class="flex items-center gap-2">
                        <i class="pi pi-check-circle !text-lg text-green-500" />
                        <span class="text-surface-800 dark:text-surface-100 leading-tight"> 0.5核 E5-2696av4 CPU
                        </span>
                    </li>
                    <li class="flex items-center gap-2">
                        <i class="pi pi-check-circle !text-lg text-green-500" />
                        <span class="text-surface-800 dark:text-surface-100 leading-tight"> 2GB 内存(0.5GB 真实内存)
                        </span>
                    </li>
                    <li class="flex items-center gap-2">
                        <i class="pi pi-check-circle !text-lg text-green-500" />
                        <span class="text-surface-800 dark:text-surface-100 leading-tight"> 5GB SSD+5GB 数据库空间
                        </span>
                    </li>
                    <li class="flex items-center gap-2">
                        <i class="pi pi-check-circle !text-lg text-green-500" />
                        <span class="text-surface-800 dark:text-surface-100 leading-tight"> 最多 10 域名绑定
                        </span>
                    </li>
                </ul>
                <Button label="立刻购买" rounded class="w-full" variant="outlined" />
            </div>
            <div class="w-full flex-1 p-8 flex rounded-2xl flex-col bg-surface-0 dark:bg-surface-800 shadow-sm gap-6 border-4 border-green-500 dark:border-green-400">
                <div class="flex flex-col gap-2">
                    <h4 class="text-surface-900 dark:text-surface-0 font-medium text-xl leading-tight">标准年付版</h4>
                    <p class="text-surface-500 dark:text-surface-400 leading-normal">低价高质量的年付应用服务器，能够长期稳定运行服务.</p>
                </div>

                <div class="w-full h-px bg-surface-200 dark:bg-surface-700" />
                <div class="flex items-center gap-1">
                    <span class="font-bold text-3xl text-surface-900 dark:text-surface-0 leading-tight">¥40.00</span>
                    <span class="font-medium text-surface-500 dark:text-surface-400 leading-tight">每年</span>
                    <span class="font-medium text-surface-500 dark:text-surface-400 leading-tight line-through ml-2">¥5.00 每月</span>
                </div>
                <div class="w-full h-px bg-surface-200 dark:bg-surface-600" />
                <ul class="list-none flex flex-col gap-4 flex-1">
                    <li class="flex items-center gap-2">
                        <i class="pi pi-check-circle !text-lg text-green-500" />
                        <span class="text-surface-800 dark:text-surface-100 leading-tight"> 1核 vCPU </span>
                    </li>
                    <li class="flex items-center gap-2">
                        <i class="pi pi-check-circle !text-lg text-green-500" />
                        <span class="text-surface-800 dark:text-surface-100 leading-tight"> 2GB 内存(1GB 真实内存)
                        </span>
                    </li>
                    <li class="flex items-center gap-2">
                        <i class="pi pi-check-circle !text-lg text-green-500" />
                        <span class="text-surface-800 dark:text-surface-100 leading-tight"> 10GB SSD+10GB 数据库空间
                        </span>
                    </li>
                    <li class="flex items-center gap-2">
                        <i class="pi pi-check-circle !text-lg text-green-500" />
                        <span class="text-surface-800 dark:text-surface-100 leading-tight"> 最多 5 域名绑定
                        </span>
                    </li>
                </ul>
                <Button label="立刻购买" rounded class="w-full" raised />
            </div>
            <div class="w-full flex-1 p-8 flex rounded-2xl flex-col bg-surface-0 dark:bg-surface-800 shadow-sm gap-6">
                <div class="flex flex-col gap-2">
                    <h4 class="text-surface-900 dark:text-surface-0 font-medium text-xl leading-tight">开发小月卡</h4>
                    <p class="text-surface-500 dark:text-surface-400 leading-normal">适合程序员测试的月卡，每日免费的，可随时更换开发环境应用镜像.</p>
                </div>

                <div class="w-full h-px bg-surface-200 dark:bg-surface-700" />
                <div class="flex items-center gap-2">
                    <span class="font-bold text-3xl text-surface-900 dark:text-surface-0 leading-tight">¥10.00</span>
                    <span class="font-medium text-surface-500 dark:text-surface-400 leading-tight">每月</span>
                </div>
                <div class="w-full h-px bg-surface-200 dark:bg-surface-600" />
                <ul class="list-none flex flex-col gap-4 flex-1">
                    <li class="flex items-center gap-2">
                        <i class="pi pi-check-circle !text-lg text-green-500" />
                        <span class="text-surface-800 dark:text-surface-100 leading-tight"> 每周 20 小时配额 </span>
                    </li>
                    <li class="flex items-center gap-2">
                        <i class="pi pi-check-circle !text-lg text-green-500" />
                        <span class="text-surface-800 dark:text-surface-100 leading-tight"> 随时更换环境镜像 </span>
                    </li>
                    <li class="flex items-center gap-2">
                        <i class="pi pi-check-circle !text-lg text-green-500" />
                        <span class="text-surface-800 dark:text-surface-100 leading-tight"> 2核 vCPU </span>
                    </li>
                    <li class="flex items-center gap-2">
                        <i class="pi pi-check-circle !text-lg text-green-500" />
                        <span class="text-surface-800 dark:text-surface-100 leading-tight"> 4GB 内存(2GB 真实内存)
                        </span>
                    </li>
                    <li class="flex items-center gap-2">
                        <i class="pi pi-check-circle !text-lg text-green-500" />
                        <span class="text-surface-800 dark:text-surface-100 leading-tight"> 30GB SSD+5GB 数据库空间</span>
                    </li>
                </ul>
                <Button label="立刻购买" rounded class="w-full" variant="outlined" />
            </div>
        </div>
    </div>
</template>