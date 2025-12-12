import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import Presentation from './pages/Presentation.vue';
import Service from './pages/Service.vue';
import Appointment from './pages/Appointment.vue';

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
  },
  {
    path: '/services',
    name: 'services',
    component: Service
  },
  {
    path: '/appointments',
    name: 'appointments',
    component: Appointment
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
