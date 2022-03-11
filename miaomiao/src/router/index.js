import Vue from 'vue'
import VueRouter from 'vue-router'
import movieRouter from './movie'
import cinemaRouter from './cinema'
import mineRouter from './mine'


Vue.use(VueRouter)

const routes = [
  movieRouter,
 cinemaRouter,
  mineRouter,
  {
    path:'/*',//容错当输入地址不对时，跳转到/movie
    redirect: '/movie'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkExactActiveClass:'active'
})

export default router
