<template>
  <div class="city-wrapper">
    <city-header />
    <city-search />
    <city-list />
    <city-alphabet />
  </div>
</template>

<script>
import CityHeader from "./components/header";
import CitySearch from "./components/search";
import CityList from "./components/list";
import CityAlphabet from "./components/alphabet";
export default {
  name: "index",
  props: {},
  components: { CityHeader, CitySearch, CityList, CityAlphabet },
  data() {
    return {};
  },
};
</script>
<style scoped lang="less"></style>
