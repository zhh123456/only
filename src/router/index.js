import Vue from 'vue'
import Router from 'vue-router'

import AppMain from '../container/AppMain/AppMain'
import AppMine from '../container/AppMine/AppMine'
import AppCar from '../container/AppCar/AppCar'

import AppDetail from '../container/AppDetail/AppDetail'
import AppLogin from '../container/AppLogin/AppLogin'
import AppList from '../container/AppList/AppList'
import AppSearch from '../container/AppSearch/AppSearch'

Vue.use(Router)


var router = new Router({
  mode:'history',
  routes: [
  //  {
  //    path:'/',
  //    name:'HelloWorld',
  //    component:HelloWorld
  //  }
      {
        path:'*',
        redirect:'/'
      },
      {
        path:'/',
        name:'main',
        component:AppMain
      },
      {
        path:'/mine',
        name:'mine',
        component:AppMine
      },
      {
        path:'/car',
        name:'car',
        component:AppCar
      },
    
      {
		    path:'/list',
		    component:AppList,
		    name:'list'
		   },
		   {
		    path:'/detail/:id',
		    component:AppDetail,
		    name:'detail'
		   },
		    {
		    path:'/login',
		    component:AppLogin,
		    name:'login'
		   },
		   {
		    path:'/search',
		    component:AppSearch,
		    name:'search'
		   }
   ]
})

export default router


