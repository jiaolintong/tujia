<template>
  <div id="app">
      
      <router-view></router-view>
     <!--  <m-header></m-header>
      <banner></banner>
      <tab></tab>
      <router-view></router-view> -->

    <Home></Home>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  
  },
  created(){
  
  }
}
</script>

<style lang="less" scoped>
@import '~style/index.less';
#app{
  // position: fixed;
  // top:0;
  // bottom:0;
  // .w(375);
}
</style>

