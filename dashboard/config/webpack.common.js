const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  entry: "/src/index.js",
  output: {
    filename: "[name].[contenthash].js",
  },
  resolve: {
    extensions: [".js", ".vue"],
  },
  module: {
    rules: [
      //define loader -> use of loader is to tell webpack process some different files as we import them into our project
      {
        test: /\.(png|jpe?g|gif|woff|svg|eot|ttf)$/i, //custom fonts and images in the Vue project
        use: [
          { loader: "file-loader" }, //file loader helps webpack to understand those fonts and images imports
        ],
      },
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      {
        test: /\.scss|\.css$/,
        use: ["vue-style-loader", "style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
};
