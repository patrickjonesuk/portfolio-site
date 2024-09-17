import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import ProjectsPage from '../views/ProjectsPage.vue';
import ContactPage from '../views/ContactPage.vue';

export const headerRoutes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/projects',
    name: 'Projects',
    component: ProjectsPage,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactPage,
  },
];

export const allRoutes = [...headerRoutes];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: allRoutes,
});

export default router;
