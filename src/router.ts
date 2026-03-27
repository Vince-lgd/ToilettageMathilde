import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('./pages/HomePage.vue'),
    meta: {
      title: 'Accueil - Clean\'s Pattounes'
    }
  },
  {
    path: '/presentation',
    name: 'presentation',
    component: () => import('./pages/Presentation.vue'),
    meta: {
      title: 'Présentation - Clean\'s Pattounes'
    }
  },
  {
    path: '/services',
    name: 'services',
    component: () => import('./pages/Service.vue'),
    meta: {
      title: 'Prestations - Clean\'s Pattounes'
    }
  },
  {
    path: '/appointments',
    name: 'appointments',
    component: () => import('./pages/Appointment.vue'),
    meta: {
      title: 'Réserver - Clean\'s Pattounes'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0, behavior: 'smooth' }
  }
})

router.beforeEach((to, from, next) => {
  const title = to.meta.title as string
  if (title) {
    document.title = title
  }
  next()
})

export default router
