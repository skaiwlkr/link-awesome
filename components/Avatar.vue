<template>
    <div class="relative h-24 w-24 mb-8">
        <div class="h-full w-full">
            <img :src="avatar.image" class="rounded-full border-slate-600 border-2">
        </div>
    </div>
</template>

<script setup>
const { data: avatar } = await useFetch('/api/avatar')

defineProps ({
    avatar: {
        type: Object,
        required: true
    },
})
</script>