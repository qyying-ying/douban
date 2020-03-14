import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/hot' // 强制跳转到正在热映
  },
  {
    path: '/hot', // 正在热映
    component: () => import('@/views/hot')
  },
  {
    path: '/movie', // 即将上映
    component: () => import('@/views/movie')
  }, {
    path: '/top', // top250榜单
    component: () => import('@/views/top')
  },
  {
    path: '/detail/:id', // 豆瓣影片详情
    component: () => import('@/views/detail')
  }
]

const router = new VueRouter({
  routes
})

export default router
