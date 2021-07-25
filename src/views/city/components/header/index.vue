<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="header-back"><svg-icon iconname="travel-back" /></div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "CitySelect",
  props: {},
  components: {},
  data() {
    return {};
  },
};
</script>
<style scoped lang="less">
@import "~@/styles/varibles.less";

.header {
  overflow: hidden;
  height: @headerHeight;
  line-height: @headerHeight;
  text-align: center;
  color: #fff;
  background: @bgColor;
  position: relative;
  .header-back {
    position: absolute;
    top: 0;
    left: 0;
    width: 0.64rem;
    text-align: center;
    font-size: 0.4rem;
    color: #fff;
  }
}
</style>
