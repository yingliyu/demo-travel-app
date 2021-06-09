<template>
  <div class="home-recommand">
    <h4 class="recommand-title">热门推荐</h4>
    <ul>
      <li>
        <div>
          <img width="60px" :src="picture" alt="" />
        </div>
        <div class="recommand-content">
          <h5>大连圣亚海洋世界</h5>
          <span>大连圣亚海洋世界大连圣亚海洋世界</span>
          <router-link to="">查看详情</router-link>
        </div>
      </li>
      <li>
        <div>
          <img width="60px" :src="picture" alt="" />
        </div>
        <div class="recommand-content">
          <h5>大连圣亚海洋世界</h5>
          <span>大连圣亚海洋世界大连圣亚海洋世界</span>
          <router-link to="">查看详情</router-link>
        </div>
      </li>
      <li>
        <div>
          <img width="60px" :src="picture" alt="" />
        </div>
        <div class="recommand-content">
          <h5>大连圣亚海洋世界</h5>
          <span>大连圣亚海洋世界大连圣亚海洋世界</span>
          <router-link to="">查看详情</router-link>
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
    justify-content: flex-start;
    align-items: center;
    padding: 10px 15px;
    background: #fff;
    .recommand-content {
      height: 60px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      text-align: left;
      margin-left: 0.4rem;
      span {
        color: #666;
        font-size: 0.2rem;
      }
      a {
        padding: 0.05rem 0.1rem;
        border-radius: 0.05rem;
        color: #fff;
        background: orange;
      }
    }
  }
}
</style>
