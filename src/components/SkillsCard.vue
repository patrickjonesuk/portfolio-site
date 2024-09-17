<script setup lang="ts">
import type { TechCategory } from '@/lib/types';
import TechContainer from './TechContainer.vue';

defineProps<{
  skills: TechCategory[];
}>();
</script>

<template>
  <div v-for="category in skills" :key="category.name">
    <TechContainer :category="category" class="category" on-card />
    <hr style="margin-top: var(--p-spacing-inline)" />
  </div>
</template>

<style scoped></style>
