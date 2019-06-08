<template>
  <div id="app">
      <m-header></m-header>
      <banner></banner>
      <tab></tab>
      <router-view></router-view>
  </div>
</template>

<script>
import  Tab from 'base/tab'
import MHeader from  'base/mheader'
import Banner from  'base/banner'

export default {
  name: 'app',
  components: {
   Tab,MHeader,Banner
  },
  created(){
    
  }
}
</script>

<style lang="less" scoped>
@import '~style/index.less';
#app{
  position: fixed;
  top:0;
  bottom:0;
  .w(375);
}
</style>

