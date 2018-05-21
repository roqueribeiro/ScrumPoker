import Vue from 'vue'
import Router from 'vue-router'
import ScrumPoker from '@/components/ScrumPoker'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ScrumPoker',
      component: ScrumPoker
    }
  ]
})
