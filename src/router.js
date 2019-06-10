import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import  Home  from  'pages/Home/home.vue'
import  Rank  from  'pages/Rank/Rank'
export default new Router({
  mode:'history',
  routes:[
    {
      path:'/home',
      component:Home,
      // children:[
      //   {
      //     path:'scrap',
      //     component:Scrap
      //   },
      //   {
      //     path:'handbook',
      //     component:Handbook
      //   },
      //   {
      //     path:'sale',
      //     conponent:Sale
      //   },
      //   {
      //     path:'detail',
      //     conponent:Detail
      //   }
      //]
    },
    
    {
      path:'/Rank',
      component:Rank
    },
    {
      path:'/',
      redirect:'/home' //重定向
    }
  ]
})