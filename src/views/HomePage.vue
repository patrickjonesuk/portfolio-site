<script setup lang="ts">
import SkillsCard from '@/components/SkillsCard.vue';
import {
  Contact,
  about_description,
  cv_url,
  project_description,
  skills,
  streak_stats_url,
} from '@/lib/constants';
import { staticImage } from '@/lib/images';
import Divider from 'primevue/divider';
import { computed } from 'vue';
import { $dt } from '@primevue/themes';
const img = computed(
  () =>
    streak_stats_url +
    Object.entries({
      user: 'patrickjonesuk',
      theme: 'dracula',
      date_format: 'j%20M%5B%20Y%5D',
      background: $dt('surface.accent.colour').value.replace('#', ''),
      sideNums: $dt('text.accent.colour').value.replace('#', ''),
      sideLabels: $dt('text.accent.colour').value.replace('#', ''),
      border_radius: $dt('border.radius').value.replace('px', ''),
      card_width: 300,
      hide_current_streak: true,
    })
      .map((x) => x.join('='))
      .join('&'),
);
</script>

<template>
  <div class="container">
    <div class="intro-container flex-wrap margins">
      <div class="image-container">
        <img :src="staticImage('general/profile.jpg').toString()" class="profile-image" />
      </div>
      <div class="divider" style="flex-basis: 20rem; flex-shrink: 1"></div>
      <div>
        <h1>Patrick Jones</h1>
        <h2>Computer Science student and hobbyist programmer.</h2>
        <h4 v-html="about_description"></h4>
      </div>
    </div>
    <div class="projects-full-width">
      <div class="projects-container flex-wrap margins">
        <div class="projects-text">
          <h2>Projects</h2>
          <h4 v-html="project_description"></h4>
        </div>
        <div class="divider" style="flex-basis: 5rem; flex-shrink: 1"></div>
        <a :href="Contact.Github" class="contribution-image-container"
          ><img class="contribution-image" :src="img" alt="GitHub Streak"
        /></a>
      </div>
    </div>
    <div class="skills-container">
      <h2>Skills</h2>
      <div>
        <SkillsCard :skills="skills" />
      </div>
    </div>
    <Divider />
    <div class="cv-container">
      <a :href="cv_url" target="_blank" class="cv-anchor">
        <div class="cv-link">
          <i class="pi pi-file-pdf" style="font-size: 3rem"></i>
          <span>View CV</span>
        </div>
      </a>
    </div>
    <Divider />
  </div>
</template>

<style scoped>
@media screen and (max-width: 850px) {
  .flex-wrap {
    flex-direction: column;
  }
  .divider {
    display: none;
  }
}
.cv-anchor {
  text-decoration: none;
  color: inherit;
}
.cv-container {
  display: flex;
  justify-content: center;
  margin-top: var(--p-spacing-height);
  margin-bottom: var(--p-spacing-height);
}
.cv-link {
  padding: var(--p-spacing-inline);
  cursor: pointer;
  display: flex;
  border: 1px dashed var(--p-divider-border-color);
  align-items: center;
  gap: 1rem;
}
.container {
  display: flex;
  flex-direction: column;
}
.contribution-image {
  max-width: 100%;
}
.contribution-image-container {
  max-width: 100%;
}
h2 {
  color: var(--p-text-accent-colour);
}
.projects-full-width {
  background-color: var(--p-surface-secondary);
  width: 100vw;
  left: 0;
}
.projects-container {
  margin-left: var(--p-spacing-inline);
  display: flex;
}
.projects-text {
  flex-basis: 0;
  flex-grow: 1;
}
.skills-container {
  background-color: var(--p-surface-accent-colour);

  padding-left: var(--p-spacing-card);
  margin-left: var(--p-spacing-card);
  padding-right: var(--p-spacing-card);
  margin-right: var(--p-spacing-card);

  padding-top: calc(var(--p-spacing-card) / 2);
  margin-top: calc(var(--p-spacing-card) / 2);
  padding-bottom: calc(var(--p-spacing-card) / 2);
  margin-bottom: calc(var(--p-spacing-card) / 2);

  border-radius: 10px;
}
.intro-container {
  display: flex;
  justify-content: space-between;
}
.margins {
  margin-left: var(--p-spacing-width);
  margin-right: var(--p-spacing-width);

  margin-top: var(--p-spacing-height);
  margin-bottom: var(--p-spacing-height);
}
.image-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.profile-image {
  max-width: 300px;
  width: auto;
  height: auto;
  border-radius: var(--p-border-radius);
  object-fit: contain;
}
</style>
