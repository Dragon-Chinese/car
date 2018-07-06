import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Detail from '@/components/details'
import Car from '@/components/shopcar'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/car',
      name: 'Car',
      component: Car
    }
  ]
})
