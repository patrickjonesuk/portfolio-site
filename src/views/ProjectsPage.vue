<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue';
import { projects } from '@/lib/constants';
</script>

<template>
  <div>
    <div>
      <h1>Projects</h1>
      <div class="project-container">
        <ProjectCard v-for="project in projects" :project="project" :key="project.name" />
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  margin-left: calc(var(--p-spacing-card) + var(--p-card-body-padding));
  color: var(--p-text-accent-colour);
}

.project-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--p-inline-spacing);
  margin: 2rem 2rem 0 2rem;
  margin-left: var(--p-spacing-card);
  margin-right: var(--p-spacing-card);
}

.modal {
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: black;
}

.modal-image {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
}

.close-button {
  position: absolute;
  top: 15px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
}

.close-button:hover,
.close-button:focus {
  color: #bbb;
  text-decoration: none;
  cursor: pointer;
}

.caption {
  margin: auto;
  display: flex;
  justify-content: space-between;
  width: 80%;
  max-width: 700px;
  text-align: center;
  color: #ccc;
  padding: 10px 0;
}

@media only screen and (max-width: 700px) {
  .modal-image {
    width: 100%;
  }
}
</style>
