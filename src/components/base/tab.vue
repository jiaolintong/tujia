<template>
  <div class="tab">
    <!-- tab 指定router link 渲染的元素 -->
      <router-link 
      active-class='sel'
      class='nav'
      to="/houses" tag='div'>
        <span>房屋介绍</span>
      </router-link>

      <router-link 
      class='nav'
      active-class='sel'
      to="/traderules" tag='div'>
        <span>交易规则</span>
      </router-link>

      <router-link 
      class='nav'
       active-class='sel'
      to="/notice" tag='div'>
        <span>入住须知</span>
      </router-link>

      <router-link 
      class='nav'
       active-class='sel'
      to="/premium" tag='div'>
        <span>额外费用</span>
      </router-link>

      <router-link 
      class='nav'
       active-class='sel'
      to="/comment" tag='div'>
        <span>房屋点评</span>
      </router-link>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="less">
@import '~style/index.less';
.tab{
  position: relative;
  z-index: 1;
  .w(375);
  .h(44);
  display: flex;
  font-size: 0;
  .nav{
    // align-items: center;
    background:@bg-black;
    width: 25%;
    .h(44);
    font-size: @fs-s;
    text-align: center;
    color:@fc-grayopacity;
    span{
      display: inline-block;
      border-bottom:2px solid @bg-black;
      .h(22);
      .m_t(8);
      .p_b(5);
      .l_h(22); 
    }
  }
  .sel{
    color:@fc-yellow;
    span{
      border-bottom:2px solid @fc-yellow;
    }
  }
}

</style>
