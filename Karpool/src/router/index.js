import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import nav from '@/components/nav'
import ranking from '@/components/Ranking'
import active from '@/components/Active'
import about from '@/components/About'



Vue.use(Router)
//array of routes that page goes to
export default new Router({
  routes: [
    {
      path: '/',
      name: 'nav',
      component: nav
    },
    {
      path: '/active/:name/:working',
      name: 'active',
      props: true,
      component: active
    },
    {
      path: '/ranking',
      name: 'ranking',
      component: ranking
    },
    {
      path: '/HelloWorld',
      name: 'hello',
      component: HelloWorld
    },
    {
      path: '/About',
      name: 'about',
      component: about
    }
  ]
})
