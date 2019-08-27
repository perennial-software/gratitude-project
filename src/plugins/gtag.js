function fake_gtag() {
  let output = "GTAG: ";
  for (var i = 0; i < arguments.length; i++) {
    output += `${arguments[i]}`;
    if (i + 1 !== arguments.length) {
      output += ", ";
    }
  }
  console.log(output);
}

export default {
  install(Vue) {
    Vue.prototype.$gtag =
      process.env.NODE_ENV === "development" ? fake_gtag : window.gtag;
  }
};
