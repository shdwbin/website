import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
});

export default router;
