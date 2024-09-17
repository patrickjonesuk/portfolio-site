<template>
  <a :href="link.clickURL" target="_blank">
    <img :src="link.imageURL" style="border-radius: 5px" />
  </a>
</template>

<script setup lang="ts">
import type { IconLink } from '@/lib/types';

defineProps<{
  link: IconLink;
}>();
</script>

<style scoped>
img {
  cursor: pointer;
  margin-right: 0.5rem;
  min-height: 2rem;
}
</style>
