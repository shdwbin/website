import { createPinia } from 'pinia';
import { createHead } from '@vueuse/head';
import { ViteSSG } from 'vite-ssg';
import App from '@/App.vue';

import '@/assets/main.scss';

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,

  {
    routes: [
      {
        path: '/',
        name: 'home',
        component: async () => import('@/views/HomeView.vue'),
      },
      {
        path: '/:path(.*)*',
        component: async () => import('@/views/NotFound.vue'),
      },
    ],
  },

  ({ app, router }) => {
    const pinia = createPinia();
    const head = createHead({
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'og:title', content: 'Shadowbin' },
        {
          name: 'og:description',
          content: 'An encrypted, privacy focused file sharing service',
        },
        { name: 'og:url', content: 'https://shadowb.in' },
        {
          name: 'og:image',
          content: 'https://avatars.githubusercontent.com/u/117332791?v=4',
        }, // placeholder, should move to a CDN soon.
        { name: 'og:image:height', content: '256' },
        { name: 'og:image:width', content: '256' },
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
  }
);
