import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/Home.vue'),
  },
  {
    path: '/guide',
    name: 'guide',
    component: () => import('@/pages/Guide.vue'),
  },
  {
    path: '/idea-recommendations',
    name: 'idea-recommendations',
    component: () => import('@/pages/IdeaRecommendations.vue'),
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router


