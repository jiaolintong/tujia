<template>
  <div id="app">
      
      <router-view></router-view>
  
  </div>
</template>

<script>
// import  Tab from 'base/tab'


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

