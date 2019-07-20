import Vue from 'vue'
import Router from 'vue-router'
import Table from '@/components/table/table'
import Calendar from '@/components/Calendar/Calendar'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Table',
      component: Table
    },
    {
      path: '/Calendar',
      name: 'Calendar',
      component: Calendar
    }
  ]
})
