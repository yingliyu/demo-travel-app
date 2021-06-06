<template>
  <div class="home-header">
    <div class="header-left">
      <svg-icon iconname="travel-back" />
    </div>
    <div class="header-input">
      <svg-icon iconname="travel-search" />输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      城市
      <svg-icon iconname="travel-arrowdown" />
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeHeader",
};
</script>

<style lang="less" scoped>
@import "~@/styles/varibles.less";
.home-header {
  height: 0.86rem;
  line-height: 0.86rem;
  display: flex;
  background: @bgColor;
  color: #fff;
  .header-left {
    width: 0.64rem;
    float: left;
  }
  .header-input {
    flex: 1;
    height: 0.64rem;
    line-height: 0.64rem;
    margin-left: 0.2rem;
    margin-top: 0.12rem;
    background: #fff;
    border-radius: 0.1rem;
    color: #ccc;
    text-align: left;
    text-indent: 0.1rem;
  }
  .header-right {
    width: 1.24rem;
    float: right;
    text-align: center;
  }
}
</style>
