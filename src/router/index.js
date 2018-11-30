import Vue from 'vue'
import Router from 'vue-router'
import Heart from '@/pages/heart'

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
    }
  ]
})
