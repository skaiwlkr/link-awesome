<script setup>
    const { data: bio } = await useFetch('/api/bio')
    const { data: links } = await useFetch('/api/links')
</script>

<template>
    <div>
        <h1>Hello world!</h1>
        <p>{{ bio }}</p>
        <p>{{ links }}</p>
    </div>
</template>