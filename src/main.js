import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import i18n from "./plugins/i18n";
import VueCookies from "vue-cookies";
// import userStore from "./store/user";

Vue.config.productionTip = false;

Vue.use(VueCookies);

new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
