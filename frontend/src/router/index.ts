import MainPageVue from '@/views/MainPage.vue'
import ContactUsVue from '@/views/ContactUs.vue'
import LogInVue from '@/views/LogIn.vue'
import SignUpVue from '@/views/SignUp.vue'
import AddPostVue from '@/views/AddPost.vue'
import UpdatePostVue from '@/views/UpdatePost.vue'
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
      component: SignUpVue
    },
    {
      path: '/contactus',
      name: 'contactus',
      component: ContactUsVue
    },
    {
      path: '/login',
      name: 'login',
      component: LogInVue
    },
    {
      path: '/addpost',
      name: 'addpost',
      component: AddPostVue
    },
    {
      path: '/updatepost',
      name: 'updatepost',
      component: UpdatePostVue
    },
  ]
})

export default router
