import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Token from '@/components/Token'
import Features from '@/components/Features'
import Dashboard from '@/components/Dashboard'
import Server from '@/components/ServerPage'
import Overview from '@/components/Server/Overview'
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
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/server/:id',
      name: 'Server',
      component: Server,
      children: [
        {
          path: "overview",
          name: "ServerOverview",
          component: Overview
        }
      ]
    }
  ]
})
