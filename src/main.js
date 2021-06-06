import Vue from "vue";
import App from "./app.vue";
import router from "./router";
import store from "./store";
import fastClick from "fastclick";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "./styles/reset.css";
import "./styles/border.css"; // 移动端1px边框的问题
//引入 iconfont
import "./styles/iconfont/iconfont.js";
import "swiper/dist/css/swiper.css";
//全局注册组件
import SvgIcon from "@/components/svg-icon";
Vue.use(VueAwesomeSwiper);
Vue.component("svg-icon", SvgIcon);
Vue.config.productionTip = false;
//某些机型某些浏览器300ms点击延迟
fastClick.attach(document.body);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
