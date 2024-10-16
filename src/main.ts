import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import PrimeVue from 'primevue/config';
import MyPreset from './lib/theme';

const app = createApp(App);

app.use(router);
app.use(PrimeVue, {
  theme: {
    preset: MyPreset,
    options: {
      darkModeSelector: '.dark-mode',
    },
  },
});

app.mount('#app');
