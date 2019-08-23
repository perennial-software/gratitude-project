import api from "@/api/api";
import fake_api from "@/api/api.fake";

export default {
  install(Vue) {
    Vue.prototype.$api =
      process.env.NODE_ENV === "development" ? fake_api : api;
  }
};
