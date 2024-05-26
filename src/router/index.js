import { createRouter, createWebHashHistory } from 'vue-router'
const LoginPage = () => import('@/pages/Login.vue')

const publicroutes = [
  {
    path: '/',
    name: 'home',
    component: LoginPage
  },
  {
    path: '/login',
    name: 'about',
    component: LoginPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicroutes
})

export default router
