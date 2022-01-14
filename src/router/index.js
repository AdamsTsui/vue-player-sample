import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/single/vod'
  },
  {
    path: '/single/vod',
    name: 'SingleVod',
    component: () => import('../views/SingleVod')
  },
  {
    path: '/single/live',
    name: 'SingleLive',
    component: () => import('../views/SingleLive')
  },
  {
    path: '/multi/vod',
    name: 'MultiVod',
    component: () => import('../views/MultiVod')
  },
  {
    path: '/multi/live',
    name: 'MultiLive',
    component: () => import('../views/MultiLive')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
