import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

import "@/assets/css/tailwind.css";

import gtag from "./plugins/gtag";
import api from "./plugins/api";
import TableComponent from "vue-table-component";
import vuetify from "./plugins/vuetify";

const jwt = require("jsonwebtoken");

Vue.config.productionTip = false;

Vue.use(gtag);
Vue.use(api);
Vue.use(TableComponent);

router.beforeEach((to, from, next) => {
  router.app.$gtag("event", "screen_view", {
    app_name: "GratitudeProject",
    screen_name: to.name
  });
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    var token = localStorage.getItem('token');
    if (token != null) {
      console.log(token)
      try {
        const exp_check = jwt.decode(token.substring(7, token.length));
        if (Date.now() >= exp_check.exp * 1000) {
          // token expired 
          next({
            path: '/login',
            query: { redirect: to.fullPath }
          })
        } else {
          // token is valid
          next()
        }
      } catch (err) {
        console.log(err)
      }
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  } else {
    next() // make sure to always call next()!
  }
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
