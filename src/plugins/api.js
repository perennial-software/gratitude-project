import api from "@/services/api";
import fake_api from "@/services/api.fake";

export default {
  install(Vue) {
    Vue.prototype.$api =
      process.env.VUE_APP_FAKE_API === "true" ? fake_api : api;
  }
};
