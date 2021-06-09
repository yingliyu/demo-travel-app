<template>
  <div class="home-recommand">
    <h4 class="recommand-title">周末去哪</h4>
    <ul>
      <li>
        <div>
          <img width="100%" :src="picture" alt="" />
        </div>
        <div class="recommand-content">
          <h5>大连圣亚海洋世界</h5>
          <span>大连圣亚海洋世界大连圣亚海洋世界</span>
        </div>
      </li>
      <li>
        <div>
          <img width="100%" :src="picture" alt="" />
        </div>
        <div class="recommand-content">
          <h5>大连圣亚海洋世界</h5>
          <span>大连圣亚海洋世界大连圣亚海洋世界</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import picture from "./imgs/1.jpg";
export default {
  name: "index",
  props: {},
  components: {},
  data() {
    return { picture };
  },
};
</script>
<style scoped lang="less">
.home-recommand {
  .recommand-title {
    font-weight: 700;
    text-align: left;
    padding: 0.2rem 0.4rem;
    background: #eee;
  }
  li {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background: #fff;
    .recommand-content {
      height: 60px;
      text-align: left;
      padding: 0.2rem;
      h5 {
        padding-bottom: 0.1rem;
      }
      span {
        color: #666;
        font-size: 0.2rem;
      }
    }
  }
}
</style>
