<script setup>
    const { data: links } = await useFetch('/api/links')
</script>

<template>
    <div>
        <h1>Hello world!</h1>
        <p>{{ links }}</p>
    </div>
</template>