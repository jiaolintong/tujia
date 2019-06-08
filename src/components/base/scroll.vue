<template>
  <div id="scroll" ref="wrapper">
    <slot></slot>
  </div>
</template>
<script>
import BScroll from "better-scroll"
export default{
  name:'scroll',
  props:['data'],
  methods:{
     initBS(){
         if(!this.$refs.wrapper){
             return false
         }
         this.scroll=new BScroll(this.$refs.wrapper)
     } 
  },
  watch:{
      data(newVal,oldVal){
          console.log(newVal,oldVal);
          this.scroll.refresh()
      }
  },
  mounted(){
      this.initBS()
  }
}
</script>
<style lang="less" scoped>
@import '~style/index.less';
#scroll{
    //color:#fff;
    height:100%;
    width:100%;
}
</style>