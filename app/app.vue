<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<script setup lang="ts">
useServerSeoMeta({
  title: 'Link Awesome - Self-hosted Linktree alternative',
  ogTitle: 'Link Awesome - Self-hosted Linktree alternative',
  description: 'Self-host your own page for bio and links',
  ogDescription: 'Self-host your own page for bio and links',
  ogUrl: 'https://link-awesome.vercel.app/',
  ogSiteName: 'Link Awesome - Self-hosted Linktree alternative',
  ogImage: 'https://link-awesome.vercel.app/og-image.png',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Link Awesome - Self-hosted Linktree alternative',
  twitterImage: 'https://link-awesome.vercel.app/og-image.png',
  twitterDescription: 'Link Awesome - Self-hosted Linktree alternative'
})
</script>