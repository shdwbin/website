import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createHead } from '@vueuse/head';
import App from '@/App.vue';
import router from '@/router';

import '@/assets/main.scss';

const app = createApp(App);
const pinia = createPinia();
const head = createHead({
  htmlAttrs: { lang: 'en' },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  ],
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    { rel: 'icon', type: 'image/png', href: '/favicon.png' },
  ],
  titleTemplate: (title) => (title ? `${title} - Shadowbin` : 'Shadowbin'),
  title: '',
});

app.use(router);
app.use(pinia);
app.use(head);

app.mount('body');
