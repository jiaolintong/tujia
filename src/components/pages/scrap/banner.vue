 <template>
  <div class="swiper swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" 
           v-for="{item ,index} in  banners"
           :key="index"
        >
        <img :src="item.picUrl" alt>
      </div>
  
    </div>
  </div>
</template>
<script>
import Swiper from "swiper"; // 引入swiper插件
import Axios from "axios";
export default {
  name: "banner",
  data() {
    return {
      banners: []
    };
  },
   methods: {
    initBanner(){
      new Swiper('.swiper-container',{
            loop:true,
            autoplay:true
          })
    }
  },
  created() {
    console.log(this);
    this.$axios.post('https://m.tujia.com/bingo/h5/unit/GetSimilarUnits',
{"unitId": "176981"})
      .then((res) => {
        this.banners=res.data.slider
        this.$nextTick(()=>{
        this.initBanner()
      })
   })
      .catch(err => {
        console.log(err);
    })
  } 
}
</script>
<style lang="less" scoped>
@import url("../../../node_modules/swiper/dist/css/swiper.min.css");
@import url("../../common/style/index.less");
.swiper-container{
  .w(375);
  .h(150);
  img{
    width: 100%;
    height: 100%;
  }
}
</style>
