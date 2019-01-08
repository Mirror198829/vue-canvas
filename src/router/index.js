import Vue from 'vue'
import Router from 'vue-router'
import Heart from '@/pages/heart'
import Time from '@/pages/time'
import Progress from '@/pages/progress'
import MouseDraw from '@/pages/mouseDraw'
import Clock from '@/pages/clock'
import TransformDemo from '@/pages/TransformDemo'

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
      name:'Time',
      component:Time
    },
    {
      path:'/progress',
      name:'Progress',
      component:Progress
    },
    {
      path:'/mouseDraw',
      name:'MouseDraw',
      component:MouseDraw
    },
    {
      path:'/clock',
      name:'Clock',
      component:Clock
    },
    {
      path:'/transformDemo',
      name:'TransformDemo',
      component:TransformDemo
    }
  ]
})
