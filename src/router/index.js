import Vue from 'vue'
import Router from 'vue-router'
import Heart from '@/pages/heart'
import Time from '@/pages/time'
import Progress from '@/pages/progress'
import MouseDraw from '@/pages/mouseDraw'
import Clock from '@/pages/clock'
import TransformDemo from '@/pages/TransformDemo'
import ImgDemo from '@/pages/imgDemo'
import CoolClock from '@/pages/coolClock'
import PixelDemo from '@/pages/pixelDemo'
import ThreeD from '@/pages/ThreeD'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:{
        name:'CoolClock'
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
    },
    {
      path:'/imgDemo',
      name:'ImgDemo',
      component:ImgDemo
    },
    {
      path:'/coolClock',
      name:'CoolClock',
      component:CoolClock
    },
    {
      path:'/pixelDemo',
      name:'PixelDemo',
      component:PixelDemo
    },
    {
      path:'/3d',
      name:'ThreeD',
      component:ThreeD
    }
  ]
})
