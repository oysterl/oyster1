import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'UserIntro',
    component: () => import('../views/UserIntro.vue'),
  },
  {
    path: '/company',
    name: 'Company',
    component: () => import('../views/Company.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { left: 0, top: 0 }
  },
  routes,
})

export default router
