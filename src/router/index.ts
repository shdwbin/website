import HomeView from '@/views/HomeView.vue';
import NotFound from '@/views/NotFound.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/:path(.*)*',
      component: NotFound,
    },
  ],
});

export default router;
