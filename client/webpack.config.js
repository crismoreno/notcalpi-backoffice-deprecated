const path = require("path");
// require("babel-polyfill");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const webpack = require("webpack");
require("babel-polyfill");

module.exports = {
  entry: "./src/App.js",
  output: {
    filename: "bundle.js",
    path: __dirname + "../../server/public/",
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    proxy: {
      "/api": "http://localhost:5000/",
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     filename: "./src/index.html",
  //     template: "./src/index.html",
  //     inject: true,
  //   }),
  // ],
};
