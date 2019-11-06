let Vimeo = require("vimeo").Vimeo;

const FakeVimeo = function(accesToken, key, secret) {
  this.upload = (fileName, data, success, progress, failed) => {
    success("/video/355475078");
  };

  this.request = (uri, f) => {
    f(null, { link: "https://vimeo.com/355475078" }, 200, {});
  };

  return this;
};

if (process.env.VUE_APP_FAKE_VIMEO === "true") {
  Vimeo = FakeVimeo;
}

export default Vimeo;
