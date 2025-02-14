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

<style lang="scss">
.button-inner {
    &:hover {
      transition: all 333ms ease 0s;
      border-color: white;
    }

    &::before {
      content: "";
      border-radius: 0.75rem;
      display: block;
      position: absolute;
      z-index: -1;
      inset: -2px;
      opacity: 0;
      transform: scale(0.0)
    }

    &:hover::before {
      opacity: 1;
      transition: all 333ms ease 0s;
      transform: scale(1);
    }
  }
</style>

<script setup>
const { data: links } = await useFetch('/api/links')

defineProps ({
    type: Object,
    required: true
})
</script>