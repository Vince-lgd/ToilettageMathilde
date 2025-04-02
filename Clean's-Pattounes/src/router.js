import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';
import Presentation from './components/Presentation.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/presentation',
    name: 'presentation',
    component: Presentation
  }
  // Ajoutez d'autres routes selon vos besoins
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
