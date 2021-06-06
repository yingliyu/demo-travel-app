<template>
  <div class="icons-wrapper">
    <div v-for="item in iconList" class="icon" :key="item.id">
      <div class="img-wrapper"><img :src="item.imgUrl" alt="" /></div>
      <span class="icon-desc">{{ item.desc }}</span>
    </div>
  </div>
</template>
<script>
import icon1 from "./imgs/1.jpg";
import icon2 from "./imgs/2.jpg";
import icon3 from "./imgs/3.jpg";
import icon4 from "./imgs/4.jpg";
import icon5 from "./imgs/5.jpg";
import icon6 from "./imgs/6.jpg";
import icon7 from "./imgs/7.jpg";
import icon8 from "./imgs/8.jpg";
export default {
  name: "HomeIcons",
  props: {},
  components: {},
  data() {
    return {
      iconList: [
        { id: 1, imgUrl: icon1, desc: "豫园" },
        { id: 2, imgUrl: icon2, desc: "动物园" },
        { id: 3, imgUrl: icon3, desc: "水族馆" },
        { id: 4, imgUrl: icon4, desc: "哈哈哈哈" },
        { id: 5, imgUrl: icon5, desc: "零零落落" },
        { id: 6, imgUrl: icon6, desc: "啦啦啦啦" },
        { id: 7, imgUrl: icon7, desc: "密密麻麻" },
        { id: 8, imgUrl: icon8, desc: "滴滴答答" },
      ],
    };
  },
};
</script>
<style scoped lang="less">
@import "~@/styles/varibles";
.icons-wrapper {
  width: 100%;
  height: 0;
  padding-bottom: 50%;
  overflow: hidden;
  background: green;
  .icon {
    width: 25%;
    height: 0;
    padding-bottom: 25%;
    float: left;
    background: #fff;
    position: relative;
    // display: flex;
    // flex-direction: column;
    .img-wrapper {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0.44rem;
      padding: 0.2rem;
      box-sizing: border-box;
      img {
        display: block;
        margin: 0 auto;
        height: 100%;
        border-radius: 5px;
      }
    }
    .icon-desc {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      display: inline-block;
      height: 0.44rem;
      line-height: 0.44rem;
      color: @darkTextColor;
    }
  }
}
</style>
