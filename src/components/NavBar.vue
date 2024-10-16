<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { computed, ref } from 'vue';
import { headerRoutes } from '@/router';
import Menubar from 'primevue/menubar';
const items = computed(() => headerRoutes.map(({ name, path }) => ({ label: name, route: path })));
const menu = ref(null);
const darkMode = ref(true);
const toggleDarkMode = () => {
  darkMode.value = document.querySelector('html')!.classList.toggle('dark-mode');
};
const icon = computed(() => (darkMode.value ? 'pi pi-moon' : 'pi pi-sun'));
</script>

<template>
  <div class="background">
    <Menubar ref="menu" :model="items" style="margin: 1rem" breakpoint="1px">
      <template #item="{ item, props }">
        <router-link
          v-if="item.route"
          v-slot="{ href, navigate, isActive }"
          :to="item.route"
          custom
        >
          <a
            :href="href"
            v-bind="props.action"
            @click="navigate"
            :class="isActive ? 'p-focus' : ''"
          >
            <span v-if="item.icon" :class="item.icon" />
            <span>{{ item.label }}</span>
          </a>
        </router-link>
      </template>
      <template #end>
        <div class="dark-mode-selector" @click="toggleDarkMode">
          <i :class="icon"></i>
        </div>
      </template>
    </Menubar>
  </div>
</template>

<style scoped>
.background {
  background-color: var(--p-background-colour);
  width: 100%;
  display: flex;
  justify-content: center;
}
.dark-mode-selector {
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-left: 1rem;
  color: var(--p-menubar-item-color);
}
@media screen and (max-width: 400px) {
  .background {
    flex-direction: column;
    align-items: center;
  }
  .dark-mode-selector {
    margin-right: 0;
  }
}
</style>
