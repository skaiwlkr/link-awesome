<template>
    <div class="max-w-md w-full">
        <div v-for="group in links" :key="group" class="flex flex-col mx-auto py-3">
            <h3 class="uppercase tracking-widest text-slate-500 font-medium text-sm">{{ group.group }}</h3>
            <div v-for="link in group.links">
                <GroupLink :link="link" :key="link.title"/>
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