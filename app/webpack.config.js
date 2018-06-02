const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const configuration = {
  mode: "production",
  entry: "./app/src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, "src")],
        loader: "babel-loader"
      },
      {
        test: /\.html/,
        include: [path.resolve(__dirname, "src")],
        loader: "html-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./app/src/index.html",
      filename: "./index.html"
    })
  ]
};

module.exports = configuration;
