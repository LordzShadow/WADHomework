import MainPageVue from '@/views/MainPage.vue'
import SignupPageVue from '@/views/SignupPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainPageVue
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupPageVue
    }
  ]
})

export default router
