<template>
  <div id="detail">
    <Scroll>
      <div class="wrapper">
        <div class="header">
          <h4>房屋详情</h4>
        </div>
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
          <div class='star'>
            <div class="star-left">
              <h3>{{detailCons.unitCommentSummary.traffic}}</h3>
              <div>
                <span 
                    v-for="(item,index) in detailCons.unitCommentSummary.traffic"
                    :key='index'>☆</span>
                <p class="good">{{detailCons.unitCommentSummary.scoreTitle}}</p>
              </div>
            </div>
            <div class="star-right">
              <p>查看全部<span>{{detailCons.unitCommentSummary.recommendedCount}}条</span>评论</p>
            </div>
          </div>
       
          <!-- 房屋介绍 -->
          <div class="house-introduce">
            <!-- 位置 -->
            <div class='house-pos'>
              <h3>房屋位置</h3>
              <span class="pos-icon"></span>
               <h4>{{detailCons.address}}</h4>
              <section>
                {{detailCons.introduction}} 
              </section>
            </div>
            <!-- 详情 -->
            <div class="house-details">
              <h3>房屋详情</h3>
              <h4>{{detailCons.unitTrafficInfos[0].title}}</h4>
              <section>
                <!-- {{decStr}}      -->
                {{detailCons.unitTrafficInfos[0].introduction}} 
              </section>
            </div>
            <!-- 服务 -->
            <div class="house-server">
              <h3>设施服务</h3>
              <div class='serve-kind'
                v-for='(item,index) in detailCons.unitFacilityGroups'
                :key='index'>
                <h4>{{item.groupName}}</h4>
                <ul>
                  <li 
                    v-for='(itemServe,index) in item.unitFacilities'
                    :key='index'>
                    <p class='icon'></p>
                    <p class='serverName'>{{itemServe.name}}</p>
                  </li>
                </ul>
              </div>
            </div>
            <!-- 日期 -->
            <div class="house-data"></div>
            <!-- 规则 -->
            <div class="house-rule"></div>
            <!-- 须知 -->
            <div class='house-know'>
              <h3>入住须知</h3>
              <div class='house-item'>
                <ul>
                  <li v-for="(item,index) in detailCons.checkInRules[0].items"
                    :key='index'>
                    <span></span>
                    {{item.introduction}}</li>
                </ul>
              </div>
              <div class='house-clear'>
                <p v-for="(item,index) in detailCons.checkInRules[1].items"
                  :key='index'>
                  <span>{{item.introduction}}：</span>
                  <span>{{item.tip}}</span>
                </p>
              </div>
              <div class="otherInfo">
                <p v-for="(item,index) in detailCons.checkinOtherInfo"
                  :key='index'>
                  <span>{{item.title}}：</span>
                  <span>{{item.items[0].introduction}}</span>
                </p>
              </div>
            </div>
            <!-- 价格 -->
            <div class="house-price">
              <h4></h4>

            </div>
          </div>
         </div>
        <li>zjl</li>
      </div>
    </Scroll>
  </div>
</template>
<script>
import Swiper from 'swiper';
import Scroll from 'base/scroll';
export default {
  name:'detail',
  props:['index'],
  components:{Scroll},
  data(){
    return{
      detailCons:[]
    }
  },
  computed:{
    // decStr(){
    //   let decStr = this.detailCons.unitTrafficInfos[0].introduction;
    //   let decArr = decStr.split('').join('')
    //   return decArr;
    // }
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
    .header{
      .w(375);
      .h(44);
      font-size:@fs-m;
      text-align:center;
      h4{
        .l_h(44);
      }
    }
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
          color:#000;
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
        .padding(30,0,30,0);
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
        .m_t(26);
        img{
          .w(40);
          .h(40);
          .m_r(15);
        }
      }
      .star{
        width:100%;
        .padding(14,20,14,20);
        box-sizing:border-box;
        .m_t(27);
        display:flex;
        justify-content: space-between;
        .star-left{
          color:#fd8238;
          display:flex;
          h3{
            font-size:35px;
            .m_r(9);
          }
          div{
            font-size:@fs-xs;
            .l_h(19);
            .good{
              color:#666;
            }
          }
        }
        .star-right{
          font-size:@fs-xs;
           color:#999;
           span{
             color:#fd8238;
           }
        }
      }
    }
    .house-introduce{
       h3{
        font-size:@fs-l;
        .l_h(56);
      }
      h4{
          font-size:@fs-s;
          .l_h(22);
          .m_b(15);
        }
      .house-server{ 
        .serve-kind{
          ul{
            display:flex;
            flex-wrap:wrap;
            li{
              width:25%;
              font-size:@fs-xs;
              color:#555;
              .m_b(12);
              text-align:center;
              display:flex;
              flex-direction: column;
              align-items: center;
              .icon{
                width:25px;
                height:25px;
                .m_b(10);
                background-image: url(https://nmstatic.tujia.com/static/ssr/static/images/house-ico.ccf14a8.png);
                background-position: -208px -234px;
                background-size: 284px 258px;
              }
            }
          }
        }
      }
      .house-details,.house-pos{
        section{
          font-size:@fs-s;
          color:#666;
          .l_h(22);
        }
      }
      .pos-icon{
        float:left;
        display:inline-block;
        width:20px;
        height:24px;
        .m_r(10);
        background-image: url(https://nmstatic.tujia.com/static/ssr/static/images/page-unitDetal.bd91f27.png);
        background-position: -104px -69px;
        background-size: 165px 160px;
      }
      .house-know{
        font-size:@fs-s;
        .l_h(28);
      }
    }
  }
</style>
