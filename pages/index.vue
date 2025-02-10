<script setup>
    const { data: avatar } = await useFetch('/api/avatar')
    const { data: bio } = await useFetch('/api/bio')
    const { data: links } = await useFetch('/api/links')
</script>

<template>
    <div>
        <h1>Hello world!</h1>
        <p>{{ avatar }}</p>
        <p>{{ bio }}</p>
        <p>{{ links }}</p>
    </div>
</template>