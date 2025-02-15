<template>
    <div class="flex flex-col items-center px-5">
        <h1 class="text-xl sm:text-3xl font-bold mb-4">{{ bio.title }}</h1>
        <h2 class="text-lg sm:text-xl leading-8 font-semibold mb-3">{{ bio.description }}</h2>
        <p class="text-base sm:text-lg font-medium text-slate-500 my-2">{{ bio.subtext }}</p>
    </div>
</template>

<script setup>
const { data: bio } = await useFetch('/api/bio')

defineProps ({
    title: String,
    description: String,
    subtext: String,
    required: true
})
</script>