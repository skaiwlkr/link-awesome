<script setup>
    const { data: avatar } = await useFetch('/api/avatar')
    const { data: bio } = await useFetch('/api/bio')
    const { data: links } = await useFetch('/api/links')
</script>

<template>
    <div class="flex flex-col items-center mt-16 mb-3">
        <Avatar :avatar="avatar"/>
        <p>{{ bio }}</p>
        <p>{{ links }}</p>
    </div>
</template>