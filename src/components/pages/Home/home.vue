<template>
    <div id="home" ref='wrapper'>
        <Scroll >
        <div class= 'home-contain'>
        <m-header></m-header>
        <banner></banner>
            <div class="home_1">
                <!-- <p class="title">{{lists.name}}</p>
                <img src="https://pic.tujia.com/upload/mobileconfig/day_190403/201904031157356821.jpg" alt="" > -->
                <p class="title">{{list.name}}</p>
                <img :src="list.pictureUrl" alt="" >
                <p class="title">坑现公寓</p>
                <listfirst></listfirst>
                
            </div>
        </div>
        </Scroll>
        <router-view></router-view>
    </div>
</template>
<script>
import Scroll  from 'base/scroll.vue'
import Banner from  'base/banner'
import MHeader from  'base/mheader'
import listfirst from  'base/listfirst'

export default {
    name:'home',
    components: {
   MHeader,Banner,Scroll,listfirst
    },
    data(){
        return{
          lists:[],
          list:[],
          //live:[]
        }
    },
    methods: {
        initLists(){
            this.$axios.post('/api/bingo/h5/portal/getPortal')
            .then((res)=>{
            //this.lists=res.data.topBanner.navigations[0]
            this.list=res.data.middleBanner.navigations[0]
            console.log(this.lists)
            })
        },
    },
      created(){
         setTimeout(()=>{
           this.initLists();
           //this.initList();
         },30)
    

  },
  mounted() {
        //this.initLists();
          //this.initList();
  },
//   watch: {
//       lists(){
//         this.initLists();
//       }
//   },
}
</script>
<style lang="less" scoped>
@import '~style/index.less';
#home{
  position: fixed;
  .top(8);
  .bottom(0);
  .w(375);
  .h(500);
  // border:1px solid red;
  .m_t(-10);
  .home-contain{
    .w(375);
      .home_1{
        color:#fff;
        .title{
        color:@fc-yellow;
        .h(40);
        .l_h(40);
        text-align: center;
        font-size: @fs-xl;
        }
        img{
          .h(220);
          .w(375);
        }
    }
  }
}
</style>
