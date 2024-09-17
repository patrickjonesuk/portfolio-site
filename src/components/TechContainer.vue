<script setup lang="ts">
import type { TechCategory } from '@/lib/types';
import LinkChip from './LinkChip.vue';
import { computed, type CSSProperties } from 'vue';
const props = withDefaults(
  defineProps<{
    category: TechCategory;
    onCard?: boolean;
  }>(),
  {
    onCard: false,
  },
);

const textColour = computed<CSSProperties>(() => ({
  color: props.onCard ? 'var(--p-surface-0)' : 'var(--p-text-color)',
}));
</script>

<template>
  <span class="section-title" :style="textColour"
    ><b>{{ category.name }}</b></span
  >
  <br />
  <span class="section-description" v-if="category.description">{{ category.description }}</span>
  <div class="tech-container">
    <LinkChip v-for="item in category.icons" :link="item" :key="item.clickURL" />
  </div>
</template>

<style scoped>
.section-title {
  margin-top: var(--p-spacing-text);
  display: inline-block;
}
.section-description {
  color: var(--p-surface-400);
  margin-bottom: var(--p-spacing-text);
  margin-top: var(--p-spacing-text);
  display: inline-block;
}
.tech-container {
  display: flex;
  flex-wrap: wrap;
  padding-top: 0.5rem;
}
</style>
