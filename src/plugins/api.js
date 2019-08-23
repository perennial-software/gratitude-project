import api from "@/services/api";
import fake_api from "@/services/api.fake";

export default {
  install(Vue) {
    Vue.prototype.$api =
      process.env.NODE_ENV === "development" ? fake_api : api;
  }
};
