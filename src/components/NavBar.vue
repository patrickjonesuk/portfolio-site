<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { computed, ref } from 'vue';
import { headerRoutes } from '@/router';
import Menubar from 'primevue/menubar';
const items = computed(() => headerRoutes.map(({ name, path }) => ({ label: name, route: path })));
const menu = ref(null);
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
    </Menubar>
  </div>
</template>

<style scoped>
.background {
  position: fixed;
  background-color: var(--p-background-colour);
  width: 100%;
}
@media screen and (min-width: 1px) {
  .background {
    width: 100%;
    display: flex;
    justify-content: center;
  }
}
</style>
