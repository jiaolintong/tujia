<template>
    <div id="recommend" ref='wrapper'>
        <Scroll :data='lists'>
        <div class= 'recommend-contain'>
        <m-header></m-header>
        <banner></banner>
            <div class="recommend_1">
                <p class="title">{{lists.name}}</p>
                <img :src="lists.pictureUrl" alt="" >
                <p class="title">{{list.name}}</p>
                <img :src="list.pictureUrl" alt="" >
                <p class="title">发现公寓</p>
                <div
                 v-for="(item,index) in live"
                 :key='index'
                >
                  <img :src="item.defaultPicUrl" alt="">
                  <div class="present">
                    <p class="uname">{{item.unitName}}</p>
                    <p class="uregion">{{item.districtName}}</p>
                    <p class="uscore">{{item.unitSummary}}</p>
                  </div>
                </div>
                
                
            </div>
        </div>
        </Scroll>
    </div>
</template>
<script>
import Scroll  from 'base/scroll.vue'
import Banner from  'base/banner'
import MHeader from  'base/mheader'

export default {
    name:'recommend',
    components: {
   MHeader,Banner,Scroll,
    },
    data(){
        return{
          lists:[],
          list:[],
          live:[]
        }
    },
    methods: {
        initLists(){
            this.$axios.post('/api/bingo/h5/portal/getPortal')
            .then((res)=>{
            this.lists=res.data.topBanner.navigations[0]
            this.list=res.data.middleBanner.navigations[0]
            // console.log(this.lists)
            })
        },
        initList(){
            this.$axios.get('/api/bingo/h5/portal/getPortalUnitModule')
            .then((res)=>{
            this.live=res.data.units
             console.log(this.live)
            })
        }
    },
      created(){
        setTimeout(()=>{
          this.initLists();
          this.initList();
        },30)
    

  },
  mounted() {
      
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
#recommend{
  position: fixed;
  .top(8);
  .bottom(0);
  .w(375);
  .h(500);
  // border:1px solid red;
  .m_t(-10);
  .recommend-contain{
    .w(375);
      .recommend_1{
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
        .present{
          .h(90);
          color:black;
          .m_t(20);
          .m_l(20);
          p{
            .h(20);
            font-size: 14px;
           .m_t(5);
          }
          .uname{
            font-weight: 700;
          }
          .uregion{
            color:orangered;
          }
          .uscore{
            opacity: .5;
          }
        }
    }
  }
}
</style>
