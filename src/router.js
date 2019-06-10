import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import  Home  from  'pages/Home/home.vue'
import Handbook from 'pages/handbook/handbook'
export default new Router({
  mode:'history',
  routes:[
    {
      path:'/home',
      component:Home,
       children:[
      //   {
      //     path:'scrap',
      //     component:Scrap
      //   },
        
      //   {
      //     path:'sale',
      //     conponent:Sale
      //   },
      //   {
      //     path:'detail',
      //     conponent:Detail
      //   }
          {
          path:'handbook',
          component:Handbook,
          name:'handbook'
          },
      ]
    },
    {
      path:'/',
      redirect:'/home' //重定向
    }
  ]
})