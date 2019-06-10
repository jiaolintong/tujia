<template>
   <div class="list_1">
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
</template>
<script>

export default {
    name:'list_1',
    data(){
        return{
          live:[]
        }
    },
    methods: {
        initList(){
            this.$axios.get('/api/bingo/h5/portal/getPortalUnitModule')
            .then((res)=>{
            this.live=res.data.units
             //console.log(this.live)
            })
        }
    },
      created(){
   },
  mounted() {
         this.initList();
  },
}
</script>
<style lang="less" scoped>
@import '~style/index.less';
      .list_1{
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
  

</style>
