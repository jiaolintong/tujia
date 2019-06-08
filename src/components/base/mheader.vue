<template>
  <div id='mheader'>
    <div id="top">
      <ul>
        <li v-for='(item,index) in list'
        :key=index
        >{{item}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name:'mheader',
  data(){
    return{
      list:["首页","发现","注册","登录"],

    }
  }
}
</script>
<style lang="less" scoped>
// @import url('../../common/style/index.less');
@import '~style/index.less';
//样式使用别名要加~
#mheader{
  #top{
      position: relative;
      z-index: 1;
      background: @bg-black;
      .w(375);
      .h(40);
      .l_h(40);
      color:@fc-yellow;
      font-size: @fs-l;
      ul{
      .w(375);
      .h(40);
      .l_h(40);
      display: flex;
      text-align: center;
      li{
        width:25%;
      }
      }
      
      
  }
 
}
</style>
