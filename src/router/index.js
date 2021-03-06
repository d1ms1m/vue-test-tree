import Vue from 'vue'
import Router from 'vue-router'
import Solution from '@/views/Solution'
import Task from '@/views/Task'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'task',
      component: Task
    },
    {
      path: '/solution',
      name: 'solution',
      component: Solution
    },
    {
      path: '*',
      name: '404',
      component: {
        template: '<div class="ui header">Error 404: Page not found</div>'
      }
    }
  ]
})
