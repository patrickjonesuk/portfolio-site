<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  basis: string;
}>();
const style = computed(() => ({
  flexBasis: props.basis,
  flexShrink: 1,
}));
</script>

<template>
  <div class="divider" :style="style"></div>
</template>

<style scoped></style>
