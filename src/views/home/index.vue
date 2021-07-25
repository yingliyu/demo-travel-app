<template>
  <div class="home">
    <home-header />
    <home-swiper />
    <home-icons />
    <home-recommand />
    <home-weekend />
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import HomeHeader from "./components/header";
import HomeSwiper from "./components/swiper";
import HomeIcons from "./components/icons";
import HomeRecommand from "./components/recommand";
import HomeWeekend from "./components/weekend";

export default {
  name: "Home",
  components: { HomeHeader, HomeSwiper, HomeIcons, HomeRecommand, HomeWeekend },
  mounted() {
    this.getHomeInfo();
  },
  methods: {
    getHomeInfo() {
      axios.get("/api/index.json").then(this.getHomeInfoSucc);
    },
    getHomeInfoSucc(res) {
      console.log(res);
    },
  },
};
</script>
