const path = require("path");

module.exports = ({ config, mode }) => {
  config.resolve.alias = {
    // Fixes absolute @ imports in .vue files.
    "@": path.resolve(__dirname, "../src"),
    // Bug with storybook not properly loading vue instance.
    vue$: "vue/dist/vue.esm.js"
  };

  config.module.rules.push(
    {
      test: /\.css$/,
      loaders: ["postcss-loader"],
      include: path.resolve(__dirname, "../")
    },
    {
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      loaders: ["file-loader"],
      include: path.resolve(__dirname, "../")
    }
  );

  return config;
};
