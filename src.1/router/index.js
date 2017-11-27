import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import AppMain from '../container/AppMain/AppMain'
import AppMovie from '../container/AppMovie/AppMovie'
import AppMine from '../container/AppMine/AppMine'
import AppPosition from '../container/AppPosition/AppPosition'


Vue.use(Router)


var router = new Router({
  mode:'history',
  routes: [
   {
     path:'*',
     redirect:'main'
   },
   {
     path:'/',
     component:AppMain,
     name:'main'
   },
   {
     path:'/movie',
     component:AppMovie,
     name:'movie'
   },
   {
     path:'/mine',
     component:AppMine,
     name:'mine'
   },
   {
    path:'/position',
    component:AppPosition,
    name:'position'
   }
  ]
})

export default router


