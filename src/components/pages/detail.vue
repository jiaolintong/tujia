<template>
  <div id="detail">
    <!-- 轮播图 -->
    <div class="swiper swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" 
            v-for="(item,index) in detailCons.pictureList"
            :key='index'>
          <img :src="item.url" alt="">
        </div>
      </div>
      <div class="swiper-index">
        <span>{{index+1}}/{{detailCons.pictureList.length}}</span>
      </div>
    </div>
    <div class="content">
      <div class="house-desc">
        <h3>{{detailCons.unitName}}</h3>
        <ul>
          <li 
            v-for="(item,index) in detailCons.houseTags"
            :key="index">{{item.tagName}}<span>·</span></li>
        </ul>
      </div>
      
      <div class="house-detail">
        <div class="house-left">
          <h4>{{detailCons.roomCountSummary}}</h4>
          <p>{{detailCons.unitSimpleIntros[0]}}</p>
          <p>{{detailCons.unitSimpleIntros[1]}}</p>
        </div>
        <div class="house-right">
          <h4>{{detailCons.bedSummary}}</h4>
          <p>{{detailCons.bedDescriptions[0]}}</p>
          <p>{{detailCons.bedDescriptions[1]}}</p>
        </div>
      </div>
      <div class="house-master">
        <img :src="detailCons.landlordInfo.logoUrl" alt="">
        <div class="hm-con">
           <h4>{{detailCons.landlordInfo.hotelName}}</h4>
          <p>
            <span>{{detailCons.businessTypeName}}&nbsp;&nbsp;</span>
            
            <span>·&nbsp;&nbsp;{{detailCons.landlordInfo.verifiedDetail}}</span>
          </p>
        </div>
      </div>
       
      <!-- 评分 -->
      <div class='star'></div>
    </div>
    <li>zjl</li>
  </div>
</template>
<script>
import Swiper from 'swiper';
export default {
  name:'detail',
  props:['index'],
  data(){
    return{
      detailCons:[]
    }
  },
  methods:{
    initData(){
     // alert('111');
       this.$axios.post('https://m.tujia.com/bingo/h5/unit/getunitv2',
       {"unitId": "176981", "fromSource": null, "unitGuid": "176981", "istrans": false})
       .then((res)=>{
         console.log(res.data);
          this.detailCons = res.data;
          this.$nextTick(()=>{
            this.initBanner();
          })
       })
    },
    initBanner(){
      new Swiper('.swiper-container',{
        loop:true,
        autoplay:true
      })
    },
    initBS(){

    }
  },
  created(){
    this.initData();
  }
}
</script>
<style lang='less' scoped>
  @import '~style/index.less';
  @import '~node_modules/swiper/dist/css/swiper.min.css';
  #detail{
    .w(375);
    position:fixed;
    .top(0);
    .bottom(0);
    background:#fff;
    z-index:10;
    .swiper-container{
      .w(375);
      .h(250);
      img{
        width:100%;
        display:block;
      }
    }
    .content{
      .w(335);
      .padding(0,20,0,20);
      .house-desc{
        .padding(28,0,28,0);
        h3{
          font-size:@fs-l;
          .m_b(20);
        }
        ul{
          display:flex;
          li{
            font-size:@fs-s;
            color:rgb(51,51,51);
            span{
              .margin(0,4,0,4);
              color:#999;
            }
          }
        }
      }
     
      .house-detail{
        width:100%;
        //.h(100);
        display:flex;
        justify-content: space-around;
        background: #f7f9fb;
        .margin(30,0,30,0);
        .house-left,.house-right{
          text-align:center;
          h4{
            .margin(5,0,5,0);
          }
        }
      }
      .house-detail,.house-master{
        h4{
          font-size:@fs-s;
          color:#333;
          .l_h(22);
        }
        p{
          font-size:@fs-xs;
          color:#999;
          .l_h(19);
        }
      }
      .house-master{
        display:flex;
        img{
          .w(40);
          .h(40);
          .m_r(15);
        }
      }
    }
  }
</style>
