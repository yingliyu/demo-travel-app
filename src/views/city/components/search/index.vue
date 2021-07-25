<template>
  <div class="search-wrapper">
    <input type="text" placeholder="输入城市名或拼音" class="search-input" />
  </div>
</template>
<script>
export default {
  name: "index",
  props: {},
  components: {},
  data() {
    return {};
  },
};
</script>
<style scoped lang="less">
@import "~@/styles/varibles";
.search-wrapper {
  // width: 100%;
  height: 0.72rem;
  padding: 0.1rem;
  background: @bgColor;
  .search-input {
    width: 100%;
    height: 0.62rem;
    padding: 0 0.1rem;
    line-height: 0.62rem;
    text-align: center;
    border-radius: 0.06rem;
    color: #666;
    box-sizing: border-box;
  }
}
</style>
