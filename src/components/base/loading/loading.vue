<template>
  <div class='loading'>
     <img src='./loading.gif' alt="">
     <br>
     <span>{{txt}}</span>
  </div>
</template>
<script>
export default {
  name:'loading',
  props:{
    icon:{
      default:require('base/loading/loading.gif')
    },
    txt:{
      default:'数据加载ing'
    }
  }
}
</script>
<style lang="less" scoped>
@import '~style/index.less';
.loading{
  .w(375);
  color:@fc-grayopacity;
  img{
    width: 24px;
    height: 24px;

  }
  font-size: @fs-xs;
  text-align: center;
  position: absolute;
  top:40%;
 
}
</style>
