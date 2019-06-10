<template>
  <div id="handbook" ref="handbook">
      <div class="handbook-contain">
      <img src='https://pic.tujia.com/upload/feccms/day_190529/201905291904078381.jpg'>
      <img src="https://pic.tujia.com/upload/feccms/day_190530/201905302020015884.jpg" alt="">
      <img src="https://pic.tujia.com/upload/feccms/day_190529/201905291908008268.jpg" alt="">
      <img src="https://pic.tujia.com/upload/feccms/day_190529/201905291922494233.jpg" alt="">
    <!--  <ul  v-for="(item,index) in lists" :key="index">
       <li v-for="(con,conIndex) in item" :key="conIndex">
        
       </li>
        
     </ul> -->
     <div class="substance">
        <h2>香港</h2>
        <div class='content' v-for="(item,index) in lists"
            :key='index'>
            <img :src="item.smallPictureUrl" alt="">
            <h4>{{item.unitName}}</h4>
            <p class="p1">
              <span v-for='(itemdesc,index) in item.unitSummeries'
                  :key='index'>{{itemdesc.text}}   </span>
            </p>
            <span class="s1">￥{{item.finalPrice}}</span>
            <span class="s2">￥{{item.productPrice}}</span>  
            <p class="p2">{{item.priceTags[0].text}}</p>
        </div>
        </div>
      </div>
  </div>
</template>
<script> 
import BS from 'better-scroll'
export default {
  name:'handbook',
  data(){
    return {
      lists:[]
    }
    
  },
  methods:{
    initBS(){
      this.scroll=new BS(this.$refs.handbook,{probeType:2,click:true})
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
      .then(res=>{
        console.log(res)
        this.lists=res.data.items
        console.log(this.lists)
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
    background:#FCA939;
    img{
    width:100%;
    display:block;
    }
    .substance{
      display:flex;
      flex-wrap: wrap;
       h2{
         width:375px;
         height:30px;
         line-height:30px;
        font-size:24px;
        text-align:center;
        margin-bottom:10px;
      }
      .content{
        width:165px;
        height:230px;
        background:#fff;
        /* border-radius: 10px; */
        /* display:flex; */
        /* padding:10px;
        box-sizing: border-box; */
        margin-left:15px;
        margin-bottom:10px;
        img{
          width:100%;
          height:110px;
          border-radius: 10px,10px,0,0;
        }
        h4{
          font-size:@fs-s;
          color:#333;
          white-space: nowrap;
          overflow: hidden;
          -o-text-overflow: ellipsis;
          text-overflow: ellipsis;
          padding-left:10px;
          margin-top:5px;
        }
        .p1{
          font-size:@fs-xs;
          color:#999;
          padding-right:5px;
          padding-left:10px;
        }
        .s1{
           font-size:@fs-m;
            color:#FF7666;
            padding-left:10px;
            padding-right:5px;
        }
        .s2{
           font-size:@fs-xs;
            color:#999;
        }
        .p2{
          width:70px;
          height:14px;
          line-height:14px;
          text-align: center;
          font-size:@fs-xs;
          color:#FF7666;
          background:#FEEDED;
          margin-left:10px;
        }
      }
    }
   
  }
  
}
</style>