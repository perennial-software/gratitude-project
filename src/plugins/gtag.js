export default {
  install(Vue) {
    Vue.prototype.$gtag = window.gtag;
  }
};
