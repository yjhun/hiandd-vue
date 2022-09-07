import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/AboutUs',
    name: 'AboutUs',
    component: () => import('@/views/AboutUs.vue')
  },
  {
    path: '/HotelOrder',
    name: 'HotelOrder',
    component: () => import('@/views/HotelOrder.vue')
  },
  {
    path: '/TimeOrder',
    name: 'TimeOrder',
    component: () => import('@/views/TimeOrder.vue')
  },
  {
    path: '/FandB',
    name: 'FandB',
    component: () => import('@/views/FandB.vue')
  },
  {
    path: '/NewsView',
    name: 'NewsView',
    component: () => import('@/views/NewsView.vue')
  },
  {
    path: '/RecruitView',
    name: 'RecruitView',
    component: () => import('@/views/RecruitView.vue')
  },
  {
    path: '/NoticeView',
    name: 'NoticeView',
    component: () => import('@/views/NoticeView.vue')
  },
  {
    path: '/ContactView',
    name: 'ContactView',
    component: () => import('@/views/ContactView.vue')
  },
  {
    path: '/AxiosView',
    name: 'AxiosView',
    component: () => import('@/views/AxiosView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
