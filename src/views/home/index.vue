<template>
  <div class="home">
    <home-header />
    <home-swiper />
    <home-icons />
    test
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from "./components/header";
import HomeSwiper from "./components/swiper";
import HomeIcons from "./components/icons";

export default {
  name: "Home",
  components: { HomeHeader, HomeSwiper, HomeIcons },
};
</script>
