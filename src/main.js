import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

import "@/assets/css/tailwind.css";

import gtag from "./plugins/gtag";
import api from "./plugins/api";

Vue.config.productionTip = false;

Vue.use(gtag);
Vue.use(api);

router.beforeEach((to, from, next) => {
  router.app.$gtag("event", "screen_view", {
    app_name: "GratitudeProject",
    screen_name: to.name
  });
  next();
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
