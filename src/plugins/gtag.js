function fake_gtag() {
  let output = "gtag(";
  for (var i = 0; i < arguments.length; i++) {
    output += JSON.stringify(arguments[i]);
    if (i + 1 !== arguments.length) {
      output += ", ";
    }
  }
  output += ")";
  console.log(output);
}

export default {
  install(Vue) {
    Vue.prototype.$gtag =
      process.env.NODE_ENV === "development" ? fake_gtag : window.gtag;
  }
};
