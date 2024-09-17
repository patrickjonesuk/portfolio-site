<script setup lang="ts">
import { contact_html, contact_links } from '@/lib/constants';
import TechContainer from '@/components/TechContainer.vue';
</script>

<template>
  <div>
    <div class="container">
      <h1>Contact</h1>
      <hr />
      <div class="contact-info" v-html="contact_html"></div>
      <hr />
      <TechContainer :category="contact_links" />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  flex-direction: column;
}
h1 {
  margin: 1rem;
  color: var(--p-text-accent-colour);
}

.contact-info {
  padding-top: var(--p-spacing-inline);
  padding-bottom: var(--p-spacing-inline);
}
::v-deep .contact-info > a {
  color: var(--link-text-colour);
}
hr {
  width: 50%;
}
</style>
