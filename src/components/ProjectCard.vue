<script setup lang="ts">
import LinkChip from './LinkChip.vue';
import { type Project } from '@/lib/types';
import TechContainer from './TechContainer.vue';
import Card from 'primevue/card';
import Galleria from 'primevue/galleria';
import { computed, ref, type CSSProperties } from 'vue';

defineEmits(['showImages']);
const displayImages = ref(false);

const props = defineProps<{
  project: Project;
}>();

const cardStyle = computed<CSSProperties>(() => {
  const borderStyle: CSSProperties = props.project.featured
    ? { border: '1px solid var(--p-text-accent-colour)' }
    : {};
  return {
    ...borderStyle,
  };
});
</script>

<template>
  <Galleria
    v-model:visible="displayImages"
    full-screen
    show-item-navigators
    circular
    show-indicators
    :show-thumbnails="false"
    indicators-position="top"
    container-class="image-container"
    :value="
      project.images.map((image) => ({
        itemImageSrc: image.imageURL,
        thumbnailImageSrc: image.imageURL,
        alt: image.caption,
        title: image.caption,
      }))
    "
  >
    <template #item="slotProps">
      <img
        :src="slotProps.item.itemImageSrc"
        :alt="slotProps.item.alt"
        style="width: 100%; display: block"
      />
    </template>
    <template #caption="slotProps">
      <p class="text-white">{{ slotProps.item.alt }}</p>
    </template>
  </Galleria>
  <Card class="card" :style="cardStyle" v-if="!project.hidden">
    <template #title>
      <div class="project-title">
        {{ project.name }}
        <div class="tech-container">
          <img
            class="image-btn"
            src="https://img.shields.io/badge/screenshots-657D8B.svg?style=for-the-badge&logoColor=white&logo="
            v-if="project.images.length"
            @click="displayImages = true"
          />
          <LinkChip v-for="link in project.links" :link="link" :key="link.clickURL" />
        </div>
      </div>
    </template>
    <template #content>
      <div class="body-section">
        <div class="project-description">
          <span class="project-description" v-html="project.description"></span>
          <span class="dates">{{ project.dates }}</span>
        </div>

        <div class="tech-list" style="">
          <div v-for="category in project.technologies" class="category" :key="category.name">
            <TechContainer :category="category" on-card />
          </div>
        </div>
      </div>
    </template>
  </Card>
</template>

<style scoped>
.container {
  border: 0.1rem solid var(--border-colour);
  border-radius: 2px;
  padding: 1rem;
  margin: 1rem;
  max-width: 90rem;
}

.project-title {
  color: var(--text-colour);
  font-weight: bold;
  display: flex;
  justify-content: space-between;
}

.project-description {
  color: var(--text-colour);
  flex-basis: 0;
  flex-grow: 2;
  display: flex;
  flex-direction: column;
}

.tech-list {
  display: flex;
  flex-direction: column;
  flex-basis: 0;
  flex-grow: 1;
}

.body-section {
  display: flex;
}

.tech-list {
  margin-left: 1rem;
  background-color: var(--p-surface-accent-colour);
  padding: 1rem;
  border-radius: var(--p-border-radius);
  color: white;
}

@media screen and (max-width: 600px) {
  .project-title {
    flex-direction: column;
  }

  .project-description {
    width: fit-content;
  }

  .project-title .tech-container {
    margin-top: 1rem;
  }

  .body-section {
    flex-direction: column;
  }

  .tech-list {
    margin-left: 0;
    margin-top: 1rem;
  }
}

.image-btn {
  cursor: pointer;
  margin-right: 0.5rem;
  min-height: 2rem;
}
.card {
  margin-bottom: 1rem;
  width: 100%;
}
</style>
<style>
@media (orientation: landscape) {
  .image-container {
    max-width: 50%;
  }
}
.p-galleria-indicator-list {
  background-color: var(--p-surface-900);
}
.tech-list .category:first-child .section-title {
  margin-top: 0;
}
</style>
