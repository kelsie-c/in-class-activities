// const WebpackPwaManifest = require("webpack-pwa-manifest");
// const path = require("path");

const config = {
  mode: "development",
  entry: {
    index: "./assets/js/index.js",
    topic: "./assets/js/topic.js",
    favorites: "./assets/js/favorites.js"
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name].bundle.js"
  },
  // plugins: [
  //   new WebpackPwaManifest({
  //     fingerprints: false,
  //     inject: false,
  //     name: "News App",
  //     short_name: "News App",
  //     description: "An application for news",
  //     background_color: "#01579b",
  //     theme_color: "#ffffff",
  //     start_url: "/",
  //     icons: [{
  //       src: path.resolve("public/assets/images/icons/icon-192x192.png"),
  //       sizes: [96, 128, 192, 256, 384, 512],
  //       destination: path.join("assets", "icons")
  //     }]
  //   })
  // ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
};
module.exports = config;

