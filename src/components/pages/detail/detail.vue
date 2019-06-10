<template>
  <div id="detail">
    <Scroll>
      <div>
        <div class="wrapper" v-if='!statePraise'>
          <div class="header">
            <div class="back">
              <span></span>
            </div>
            <h4>房屋详情</h4>
            <span class="more"></span>
          </div>
          <!-- 轮播图 -->
          <div class="swiper swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide" 
                  v-for="(item,index) in detailCons.pictureList"
                  :key='index'>
                <img :src="item.url" alt="">
                <div class="swiper-index">
                  <span>{{index+1}}/{{detailCons.pictureList.length}}</span>
                </div>
              </div>
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
                <span></span>
                <h4>{{detailCons.roomCountSummary}}</h4>
                <p>{{detailCons.unitSimpleIntros[0]}}</p>
                <p>{{detailCons.unitSimpleIntros[1]}}</p>
              </div>
              <div class="house-right">
                <span></span>
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
                <h3>{{detailCons.unitCommentSummary.traffic}}.0</h3>
                <div>
                  <span 
                      v-for="(item,index) in detailCons.unitCommentSummary.traffic"
                      :key='index'>★</span>
                  <p class="good">{{detailCons.unitCommentSummary.scoreTitle}}</p>
                </div>
              </div>
              <div class="star-right" @click='praiseShow(true)'>
                <p>查看全部<span>{{detailCons.unitCommentSummary.recommendedCount}}条</span>评论</p>
              </div>
            </div>
            <!-- 评价 -->
            <div class='topic'>
              <p>
                <img :src="praiseInfo[0].customerAvatarUrl" alt="">
                <span>{{praiseInfo[0].name}}</span>
                <span class="date">{{praiseInfo[0].submitDate}}</span>
              </p>
              <p class="praDesc">{{praiseInfo[0].commentDetail}}</p>
            </div>
          </div>
          <!-- 房屋介绍 -->
            <div class="house-introduce">
              <!-- 位置 -->
              <div class='house house-pos'>
                <h3>房屋位置</h3>
                <div class="map">
                  <img src="https://api.map.baidu.com/staticimage?width=670&height=200&center=104.090389,30.652627&zoom=16&markers=104.090389,30.652627&markerStyles=-1,https://staticfile.tujia.com/mobile/images/h5/housedetail/mapicon.png" alt="">
                </div>
                <span class="pos-icon"></span>
                <h4>{{detailCons.address}}</h4>
                <section :class="statePos? 'overflow':''">
                  {{detailCons.introduction}} 
                </section>
                <p class='toggle' @click='togglePos'>{{statePos? '展开全部': '收起'}}</p>
              </div>
              <!-- 详情 -->
              <div class="house house-details">
                <h3>房屋详情</h3>
                <h4>{{detailCons.unitTrafficInfos[0].title}}</h4>
                <section :class="stateDet? 'overflow':''">
                  <!-- {{decStr}}      -->
                  {{detailCons.unitTrafficInfos[0].introduction}} 
                </section>
                <p class='toggle' @click='toggleDet'>{{stateDet? '展开全部': '收起'}}</p>
              </div>
              <!-- 服务 -->
              <div class="house house-server">
                <h3>设施服务</h3>
                <div :class='stateSer? "toggleSer":""'>
                  <div class='serve-kind'
                    v-for='(item,index) in detailCons.unitFacilityGroups'
                    :key='index'
                    >
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
                <p class='toggle' @click='toggleSer'>{{stateSer? '展开全部': '收起'}}</p>
              </div>
              <!-- 日期 -->
              <div class="house house-data"></div>
              <!-- 规则 -->
              <div class="house house-rule"></div>
              <!-- 须知 -->
              <div class='house-know'>
                <div class='house house-item'>
                  <h3>入住须知</h3>
                  <ul>
                    <li v-for="(item,index) in detailCons.checkInRules[0].items"
                      :key='index'>
                      <span :class="item.isDeleted? 'true':'false'"></span>
                      {{item.introduction}}</li>
                  </ul>
                </div>
                <div class='house house-clear'>
                  <p v-for="(item,index) in detailCons.checkInRules[1].items"
                    :key='index'>
                    <span>{{item.introduction}}：</span>
                    <span>{{item.tip}}</span>
                  </p>
                </div>
                <div class="otherInfo">
                  <div class="other">
                    <h3>
                      <span>额外费用</span>
                      <span>额外费用不包含在总房费内，由房东线下收取并自行开票</span>
                    </h3>
                  </div>
                  <p v-for="(item,index) in detailCons.checkinOtherInfo"
                    :key='index'>
                    <span>{{item.title}}：</span>
                    <span>{{item.items[0].introduction}}</span>
                  </p>
                </div>
              </div>
              <!-- 价格 -->
              <div class="house house-price">
                <h4></h4>

              </div>
            </div>
            <!-- 相似房屋 -->
            <div class='similar'>
              <h3>周边相似房屋</h3>
              <div class="swiper-container">
                <div class="swiper-wrapper">
                  <div class="swiper-slide" 
                      v-for="(item,index) in similarInfo"
                      :key='index'>
                    <div class='swiper-item'>
                      <img :src="item.pictureURL" alt="" class='imgPic'>
                      <span>￥{{item.finalPrice}}</span>
                      <img :src="item.logoUrl" alt="" class="logoUrl">
                    </div>  
                    <h4>{{item.unitName}}</h4>
                    <p>{{item.unitSummary}}</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div class="praise" v-else>
          <Scroll>
            <div>
              <h3>客房点评<span @click='praiseShow(false)'>×</span></h3>
              <div class='praiseItem' v-for="(item,index) in praiseInfo"
                :key='index'>
                <p>
                  <img :src="item.customerAvatarUrl" alt="">
                  <span>{{item.name}}</span>
                  <span class="date">{{item.submitDate}}</span>
                </p>
                <p class="star">{{item.totalScore}}分</p>
                <p class="praDesc">{{item.commentDetail}}</p>
                <div class='reply'>
                  <p><span class='land-answer'>房东回复：</span>{{item.replyContent}}</p>
                </div>
              </div>
            </div>
          </Scroll>
        </div>
      </div>
    </Scroll>
  </div>
</template>
<script>
import Swiper from 'swiper';
import Scroll from 'base/scroll';
import Local from 'common/utils/localstorage';
export default {
  name:'detail',
  props:['index'],
  components:{Scroll},
  data(){
    return{
      detailCons:[],
      similarInfo:[],
      praiseInfo:[],
      statePos:true,
      stateDet:true,
      stateSer:true,
      statePraise:false
    }
  },
  methods:{
    togglePos(){
      this.statePos = !this.statePos;
    },
    toggleDet(){
      this.stateDet = !this.stateDet;
    },
    toggleSer(){
      this.stateSer = !this.stateSer;
    },
    praiseShow(state){
      this.statePraise = state;
    },
    initData(){
      let localData = Local.get('detailCons');
      if(localData){
        this.detailCons = localData;
      }else{
        this.$axios.post('https://m.tujia.com/bingo/h5/unit/getunitv2',
        {"unitId": "176981", "fromSource": null, "unitGuid": "176981", "istrans": false})
       .then((res)=>{
         console.log(res.data);
         Local.set('detailCons',res.data,20000)
         this.detailCons = res.data;
          this.$nextTick(()=>{
            this.initBanner();
          })
       })
      }
    },
    initSimilar(){
     let localData = Local.get('similarInfo');
     if(localData){
       this.similarInfo = localData;
     }else{
       this.$axios.post('https://m.tujia.com/bingo/h5/unit/GetSimilarUnits',
       {"unitId": "176981"})
       .then((res)=>{
         console.log(res,res.data);
         Local.set("similarInfo",res.data,20000);
          this.similarInfo = res.data;
          this.$nextTick(()=>{
            this.initBanner();
          })
       })
     }
    },
    initPraise(){
      let localData = Local.get('praiseInfo');
      if(localData){
       this.praiseInfo = localData;
      }else{
       this.$axios.post('https://m.tujia.com/bingo/h5/comment/searchUnitComments',
       {unitId: 176981, pageIndex: 0, pageSize: 10})
       .then((res)=>{
         console.log('////////',res,res.data);
         Local.set("praiseInfo",res.data,20000);
          this.praiseInfo = res.data;
       })
     }
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
    this.initSimilar();
    this.initPraise();
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
      box-sizing:border-box;
      font-size:@fs-m;
      text-align:center;
      display:flex;
      justify-content: space-between;
      align-items:center;
      .padding(0,20,0,20);
      h4{
        .l_h(44);
      }
      //.back{
        span{
          display: inline-block;
          width: 45px;
          height: 17px;
          background-image: url(https://nmstatic.tujia.com/static/ssr/static/images/page-common.fc9c372.png);
          background-position:0 -90px;
          background-size: 157px 125px;
        }
      //}
      .more{
        width: 20px;
        height: 13px;
         background-position:-45px -91px;
      }
    }
    .swiper{
      .w(375);
      .h(250);
      position:relative;
      img{
        width:100%;
        display:block;
      }
      .swiper-index{
        font-size:@fs-s;
        color:#fff;
        position:absolute;
        z-index:5;
        .bottom(15);
        .right(20);
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
          span{
            display:inline-block;
            background-image: url(https://nmstatic.tujia.com/static/ssr/static/images/page-unitDetal.bd91f27.png);
            background-position: -126px -32px;
            width: 24px;
            height: 23px;
            background-size: 165px 160px;
          }
        }
        .house-left{
          span{
            background-position: -126px -56px;
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
            font-weight:400;
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
      .topic{
        .margin(25,0,25,0);
        p{
          display:block;
          font-size:@fs-xs;
          .l_h(19);
          color:#333;
          overflow: hidden;
          img{
            width: 34px;
            height: 34px;
            -webkit-border-radius: 50%;
            border-radius: 50%;
            overflow: hidden;
            display: block;
            float: left;
            margin-right: 10px;
          }
          span{
            display:block;
          }
          .date{
            color:#666;
          }
        }
      }
    }
    // 房屋介绍
    .house-introduce{
      .house{
        width:100%;
        box-sizing:border-box;
        .padding(0,20,0,20);
      }
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
      .house-pos{
        .map{
          width:100%;
          img{
            width:100%;
            display:block;
          }
          .m_b(20);
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
      // 入住须知
      .house-know{
        font-size:@fs-s;
        .l_h(28);
        .house-item{
          ul{
             display:flex;
            flex-wrap:wrap;
            li{
             width:33%;
             .l_h(23);
             .m_b(9);
             span{
              .m_r(5);
              display: inline-block;
              background-image: url(https://nmstatic.tujia.com/static/ssr/static/images/page-unitDetal.bd91f27.png);
              width: 16px;
              height: 16px;
              background-size: 165px 160px;
             }
            }
            .true{
              background-position: -41px -105px;
            }
            .false{
              background-position: -59px -105px;
            }
          }
        }
        .house-clear{
          .m_t(21);
          .m_b(23);
        }
        .otherInfo{
          .padding(27,20,0,20);
          background:#fff9eb;
          .other{
            h3{
              display: flex;
              align-items:baseline;
            }
            span:first-of-type{
              display: inline-block;
              .m_r(4);
            }
            span:last-of-type{
              flex:1;
              display: inline-block;
              font-size: @fs-s;
              font-weight:400;
              white-space:nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
          p:last-of-type{
            span:first-of-type{
              position:absolute;
            }
            span:last-of-type{
              display:inline-block;
              .m_l(42);
            }
          }
        }
      }
    }
    .similar{
      .w(315);
      .m_l(30);
      .swiper-item{
        position:relative;
      }
      h3{
        margin-top: 9px;
        line-height: 56px;
        font-size: @fs-m;
        padding-left: 20px;
      }
      .imgPic{
        .w(335);
        
        display:block;
      }
      span{
        color: #fff;
        font-size: @fs-l;
        padding: 6px 8px;
        display: inline-block;
        position: absolute;
        left: 0;
        bottom: 0;
        opacity: .7;
        background: #000;
      }
      .logoUrl{
        margin: 2px;
        width: 56px;
        height: 56px;
        -webkit-border-radius: 28px;
        border-radius: 50%;
        border: 2px solid #fff;
        position: absolute;
        .bottom(-25);
        .right(20);
      }
      h4{
        font-size: @fs-m;
        color: #333;
        .padding(16,50,0,0);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      p{
        font-size: @fs-s;
        color: #999;
        padding-bottom: 7px;
        .l_h(22);
      }
    }
  }
  .overflow{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  .toggle{
    font-size:@fs-s;
    line-height: 72px;
    text-align: center;
    color: #fd8238;
  }
  .toggleSer{
    .h(150);
    overflow: hidden;
  }
  .praise{
    position:fixed;
    .top(0);
    .bottom(0);
    .padding(0,20,0,20);
    h3{
      font-size:@fs-l;
      .l_h(28);
      color:#999;
      .margin(30,20,20,20);
      span{
        float:right;
      }
    }
    .praiseItem{
      .padding(20,0,20,0);
    }
    p{
      display:block;
      font-size:@fs-xs;
      .l_h(19);
      color:#333;
      overflow: hidden;
      img{
        width: 34px;
        height: 34px;
        -webkit-border-radius: 50%;
        border-radius: 50%;
        overflow: hidden;
        display: block;
        float: left;
        margin-right: 10px;
      }
      span{
        display:block;
      }
      .date{
        color:#666;
      }
    }
    .star{
      .margin(12,0,8,0);
    }
    .reply{
      width: 100%;
      .l_h(20);
      .padding(10,11,10,11);
      .m_t(28);
      box-sizing: border-box;
      text-overflow: ellipsis;
      display: -webkit-box;
      overflow: hidden;
      -webkit-box-orient: vertical;
      position: relative;
      background-color: #f7f9fa;
    }
    .land-answer{
      display:inline;
      color:#fd8238;
    }
  }
</style>
