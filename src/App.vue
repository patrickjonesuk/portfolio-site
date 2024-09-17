<script setup lang="ts">
import { RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';
import PageFooter from './components/PageFooter.vue';
</script>
<template>
  <div class="root">
    <NavBar />
    <div class="root-container">
      <RouterView v-slot="{ Component, route }">
        <component :is="Component" :key="route.path" />
      </RouterView>
    </div>
    <PageFooter class="footer" />
  </div>
</template>

<style scoped>
.root-container {
  height: 100%;
  flex: 1;
  margin-top: 5rem;
}

.footer {
  width: 100%;
  text-align: center;
  background-color: var(--header-bg-colour);
}
.root {
  display: flex;
  flex-direction: column;
}
</style>
