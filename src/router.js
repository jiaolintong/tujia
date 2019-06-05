import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import  Recommend  from  'pages/Recommend/Recommend.vue'
import  Rank  from  'pages/Rank/Rank'
export default new Router({
  mode:'history',
  routes:[
    {
      path:'/recommend',
      component:Recommend
    },
    
    {
      path:'/Rank',
      component:Rank
    },
    {
      path:'/',
      redirect:'/recommend' //重定向
    }
  ]
})