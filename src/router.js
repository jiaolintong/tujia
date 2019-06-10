import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import  Home  from  'pages/Home/home.vue'
import  Rank  from  'pages/Rank/Rank'
import Detail from 'pages/detail/detail';
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
      //     path:'handbook',
      //     component:Handbook
      //   },
      //   {
      //     path:'sale',
      //     component:Sale
      //   },
          {
           path:'detail',
           component:Detail,
           name:'detail'
          }
      ]
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