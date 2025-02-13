<template>
    <div class="max-w-md w-full">
        <div v-for="group in links" :key="group" class="flex flex-col mx-auto py-3">
            <h3 class="uppercase tracking-widest text-slate-500 font-medium text-sm">{{ group.group }}</h3>
            <div v-for="link in group.links">
                <NuxtLink class="text-white text-base" :to="link.url" :title="link.title" :target="link.target">
                    <div class="button-inner relative border border-slate-800 flex flex-row items-center justify-between cursor-pointer font-semibold text-center my-2 mx-5 rounded-xl p-4 md:p-5">
                        <div class="flex items-center">{{ link.title }}</div>
                        <svg class="scale-50" width="21" height="20" viewBox="0 0 21 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.3413 0V15.3945C20.3426 15.7399 20.1698 16.0627 19.8818 16.2534C19.5938 16.4441 19.2292 16.477 18.9117 16.3411C18.594 16.2051 18.3663 15.9185 18.3055 15.5784L18.2895 15.3944L18.2875 3.74343V3.74357C18.2878 3.70326 18.2637 3.66671 18.2266 3.65095C18.1893 3.63518 18.1464 3.64327 18.1175 3.67159L2.09519 19.6982C1.92556 19.8684 1.70141 19.9737 1.46204 19.9957C1.22267 20.0176 0.983157 19.9547 0.785356 19.8182L0.645302 19.6982H0.645441C0.475119 19.5284 0.369798 19.3044 0.3479 19.065C0.325999 18.8255 0.388771 18.586 0.525479 18.3884L0.645445 18.2463L16.6638 2.22403C16.6933 2.19558 16.7025 2.15219 16.6871 2.11425C16.6716 2.07645 16.6347 2.05176 16.5938 2.05204H4.94712C4.70719 2.05218 4.47467 1.96834 4.29022 1.8149C4.10567 1.66145 3.98082 1.44815 3.9373 1.21214L3.92126 1.0241C3.92126 0.520113 4.28326 0.102191 4.76117 0.0141638L4.94921 0.000214478L20.3413 0Z" fill="currentColor"/>
                        </svg>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
const { data: links } = await useFetch('/api/links')

defineProps ({
    type: Object,
    required: true
})
</script>