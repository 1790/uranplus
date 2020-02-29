import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import service from '@/pages/service'
import about from '@/pages/about'
import product from '@/pages/product'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      components: {
        default: index
      }
    },
    {
      path: '/service',
      name: 'service',
      components: {
        default: service
      }
    },
    {
      path: '/about',
      name: 'about',
      components: {
        default: about
      }
    },
    {
      path: '/product',
      name: 'product',
      components: {
        default: product
      }
    },
    {
      path: '*',
      name: 'index',
      components: {
        default: index
      }
    }
  ]
})
