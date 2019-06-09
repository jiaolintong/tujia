<template>
  <div id='mheader'>
    <div id="top">
      
    </div>
  </div>
</template>
<script>
export default {
  name:'mheader',
  data(){
    return{
      

    }
  }
}
</script>
<style lang="less" scoped>
// @import url('../../common/style/index.less');
@import '~style/index.less';
//样式使用别名要加~
#mheader{
  .w(375);
  .h(35);
  position: relative;
  z-index: 1;
  #top{
      .w(225);
      .h(35);
      margin:0 auto;
       background: url('../../assets/images/tujia.png') no-repeat center -90px;
       background-position:0 auto;
       background-size: 139px 115px
    }
 
}
</style>
