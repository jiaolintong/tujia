<template>
  <div id='mheader'>
      <img src="" alt="">
      <p>首页</p>
      <p>发现</p>
      <p>登录</p>
      <p>注册</p>
  </div>
</template>
<script>
export default {
  name:'mheader',
  data(){
    return{
      name:'123'
    }
  }
}
</script>
<style lang="less" scoped>
// @import url('../../common/style/index.less');
@import '~style/index.less';
//样式使用别名要加~
#mheader{
  position: relative;
  z-index: 1;
  background: @bg-black;
  .w(375);
  .h(44);
  .l_h(44);
  text-align: center;
  color:@fc-yellow;
  font-size: @fs-l;
  .img{
    .w(40);
    .h(40);
    
  }
}
</style>
