<template>
  <div id="handbook" ref="handbook">
    <!-- <Scroll> -->
      <div class="handbook-contain">
    <img src='https://pic.tujia.com/upload/feccms/day_190529/201905291904078381.jpg'>
    <img src="https://pic.tujia.com/upload/feccms/day_190530/201905302020015884.jpg" alt="">
    <img src="https://pic.tujia.com/upload/feccms/day_190529/201905291908008268.jpg" alt="">
    <img src="https://pic.tujia.com/upload/feccms/day_190529/201905291922494233.jpg" alt="">
      <ul>
        <li v-for="(item,index) in lists"  
            :key="index"
            @click="change(index)"
            :class="index==sel?'color':''">
          {{item}}
        </li>
      </ul>
      <div >
        111
        
        <img :src="conList.smallPictureUrl" alt="">
      </div>
      </div>
    <!-- </Scroll> -->
  </div>
</template>
<script> 
/* import Scroll from 'base/scroll.vue' */
import BS from 'better-scroll'
export default {
  name:'handbook',
  /* components:{Scroll}, */
  data(){
    return {
      lists:["香港","首尔","北京","南京","广州"],
      sel:0,//下标
      show:true,
      conList:[]
    }
    
  },
  methods:{
    initBS(){
      this.scroll=new BS(this.$refs.handbook,{probeType:2,click:true})
    },
    change(index){
      this.sel=index
    },
    initData(){
      this.$axios.post('https://pwa.tujia.com/feapi/bingo/h5/promotion/search/searchhousebyhouseidlist',{
        'activityIds': [],
        'defaultBetweenDays': 1,
        'houseCardType': "2",
        'houseIdList':[
           "12176354",
           "8124572",
           "5186897",
           "3007823",
           "12176312",
           "9993124",
          "9471365",
           "3425592",
          "3212239",
           "10855741",
           "8103873",
           "6320981",
           "5660867",
           "3169301",
           "3007263",
           "2995657",
           "8708295",
           "9609790",
           "3212316",
           "11124989",
           "3866676",
           "9552327"
        ],
        'needNoRepositoty': false,
        'needUnactive': false,
        'noNeedPrice': false,
        'pageSize': 12,
        'promotion': "T20190529151928"
      })
      .then((res)=>{
        console.log(res)
        this.conList=res.data.items;
        console.log(conList)
      })
    }
  
  },
  mounted() {
    this.initBS();
    this.initData();
  },
}
</script>
<style lang="less" scoped>
@import '~style/index.less';
#handbook{
  color:#fff;
  .w(375);
 /*  height:100%; */
  .h(100);
  .handbook-contain{
    img{
    width:100%;
    display:block;
    }
    ul{
      display:flex;
      font-size:@fs-s;
      li{
        width:385px;
        height:38px;
        line-height:38px;
        text-align:center;
        background-color: rgb(252, 125, 1);
        .m_b(10);
        
      }
      .color{
        /* border-bottom:1px #fff solid; */
        color:yellow;
      }
      
    }
  }
  
}
</style>