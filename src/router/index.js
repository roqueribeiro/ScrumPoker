import Vue from 'vue'
import Router from 'vue-router'
import StartPage from '@/components/StartPage'
import ScrumPoker from '@/components/ScrumPoker'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'StartPage',
      component: StartPage
    },
    {
      path: '/ScrumPoker',
      name: 'ScrumPoker',
      component: ScrumPoker
    }
  ]
})
