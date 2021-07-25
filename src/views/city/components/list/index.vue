<template>
  <div class="list" ref="areaWrapper">
    <div>
      <div class="area">
        <div class="title">当前城市</div>
        <div class="button-group">
          <div class="button-wrapper">
            <div class="button">上海</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title">热门城市</div>
        <div class="button-group">
          <div class="button-wrapper">
            <div class="button">上海</div>
          </div>
          <div class="button-wrapper">
            <div class="button">上海</div>
          </div>
          <div class="button-wrapper">
            <div class="button">上海</div>
          </div>
          <div class="button-wrapper">
            <div class="button">上海</div>
          </div>
          <div class="button-wrapper">
            <div class="button">上海</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title">A</div>
        <ul class="area-list">
          <li>阿拉尔</li>
          <li>阿拉尔</li>
          <li>阿拉尔</li>
          <li>阿拉尔</li>
          <li>阿拉尔</li>
          <li>阿拉尔</li>
        </ul>
        <div class="title">B</div>
        <ul class="area-list">
          <li>阿拉尔</li>
          <li>阿拉尔</li>
          <li>阿拉尔</li>
          <li>阿拉尔</li>
          <li>阿拉尔</li>
          <li>阿拉尔</li>
        </ul>
        <div class="title">C</div>
        <ul class="area-list">
          <li>阿拉尔</li>
          <li>阿拉尔</li>
          <li>阿拉尔</li>
          <li>阿拉尔</li>
          <li>阿拉尔</li>
          <li>阿拉尔</li>
        </ul>
        <div class="title">D</div>
        <ul class="area-list">
          <li>阿拉尔</li>
          <li>阿拉尔</li>
          <li>阿拉尔</li>
          <li>阿拉尔</li>
          <li>阿拉尔</li>
          <li>阿拉尔</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Bscroll from "better-scroll";
export default {
  name: "CitySelect",
  props: {},
  components: {},
  data() {
    return {};
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.areaWrapper);
  },
};
</script>
<style scoped lang="less">
@import "~@/styles/varibles.less";
.list {
  position: absolute;
  top: 1.7rem;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
  .title {
    line-height: 0.54rem;
    background: #eee;
    padding-left: 0.2rem;
    color: #666;
    font-size: 0.26rem;
    text-align: left;
    border-bottom: 1px solid #ccc;
  }
  .button-group {
    overflow: hidden;
    padding: 0.1rem 0.6rem 0.1rem 0.1rem;
    .button-wrapper {
      width: 33.33%;
      float: left;
      .button {
        margin: 0.1rem;
        padding: 0.1rem 0;
        text-align: center;
        border: 0.02rem solid #ccc;
        border-radius: 0.06rem;
      }
    }
  }
  .area-list {
    li {
      line-height: 0.76rem;
      text-align: left;
      padding-left: 0.2rem;
      border-bottom: 1px solid #ccc;
    }
  }
}
</style>
