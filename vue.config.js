module.exports = {
  devServer: {
    proxy: {
      "/gtag": {
        target: "https://www.googletagmanager.com/",
        changeOrigin: true
      }
    }
  }
};
