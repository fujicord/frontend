import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Token from '@/components/Token'
import Features from '@/components/Features'

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
      path: '/token',
      name: 'Token',
      component: Token
    },
    {
      path: '/features',
      name: 'Features',
      component: Features
    }
  ]
})
