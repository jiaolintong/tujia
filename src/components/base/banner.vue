<template>
  <div class="swiper swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide" 
             v-for="(item ,index) in  banners"
             :key="index"
        >
          <img :src="item" alt="">
        </div>
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper'// 引入swiper插件
export default {
  name:'banner',
  data(){
    return{
      banners:['https://nmstatic.tujia.com/static/images/index/home/banner_bg1.jpg','https://nmstatic.tujia.com/static/images/index/home/banner_bg2.jpg']
    }
  },
  methods: {
    initBanner(){
      new Swiper('.swiper-container',{
            loop:true,
            autoplay:true
          })
    }
  },
//   created(){
//     console.log(this)
//     this.$axios.post('/api/bingo/h5/portal/getPortal')
//     .then((res)=>{
// console.log(res)
//       this.banners=res.data
//       this.$nextTick(()=>{
//         this.initBanner()
//       })
//     })
//     .catch((err)=>{
//       console.log(err)
//     })
//   }
mounted() {
this.initBanner();

  
},
}
</script>
<style lang="less" scoped>
@import '~node_modules/swiper/dist/css/swiper.min.css';
@import '~style/index.less';
.swiper-container{
  .w(375);
  .h(280);
  overflow: hidden;
  img{
    width: 100%;
    height: 100%;
  }
}
</style>
