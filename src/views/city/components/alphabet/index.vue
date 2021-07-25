<template>
  <ul class="alphabet-wrapper">
    <li v-for="item in list" :key="item">{{ item }}</li>
  </ul>
</template>
<script>
export default {
  name: "index",
  props: {},
  components: {},
  data() {
    return {
      list: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
      ],
    };
  },
};
</script>
<style scoped lang="less">
.alphabet-wrapper {
  width: 0.4rem;
  position: fixed;
  right: 0;
  top: 1.58rem;
  bottom: 0;
  color: #00bcd4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  li {
    font-size: 0.1rem;
    line-height: 0.33rem;
    text-align: left;
  }
}
</style>
