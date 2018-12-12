import Vue from 'vue'
import Router from 'vue-router'
import Heart from '@/pages/heart'
import Time from '@/pages/time'
import Progress from '@/pages/progress'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:{
        name:'Heart'
      }
    },
    {
      path: '/heart',
      name: 'Heart',
      component: Heart
    },
    {
      path:'/time',
      name:Time,
      component:Time
    },
    {
      path:'/progress',
      name:Progress,
      component:Progress
    }
  ]
})
