<template>
  <ul class="alphabet-wrapper">
    <li>A</li>
    <li>B</li>
    <li>C</li>
    <li>D</li>
    <li>E</li>
    <li>F</li>
    <li>G</li>
  </ul>
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
.alphabet-wrapper {
  width: 0.4rem;
  position: absolute;
  right: 0;
  top: 1.58rem;
  bottom: 0;
  color: #00bcd4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  li {
    line-height: 0.44rem;
    text-align: left;
  }
}
</style>
