import Vue from 'vue'
import Router from 'vue-router'
// import headerTop from '@/components/headerTop'
import menuBar from '@/components/menuBar'
import index from '@/homePage/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      redirect: '/homePage/index',
      children: [
        //首页
        { path: '/homePage/index', component: menuBar, name: 'menuBar' },
      ]
    }
  ]
})
