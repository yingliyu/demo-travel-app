import Vue from "vue";
import App from "./app.vue";
import router from "./router";
import store from "./store";
import fastClick from "fastclick";
import "./styles/reset.css";
import "./styles/border.css"; // 移动端1px边框的问题

Vue.config.productionTip = false;
//某些机型某些浏览器300ms点击延迟
fastClick.attach(document.body);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
