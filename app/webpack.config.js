const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const configuration = {
  mode: "production",
  entry: "./app/src/index.js",
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: "initial",
          name: "vendor",
          priority: 10,
          enforce: true
        }
      }
    }
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, "src/"),
          path.resolve(__dirname, "src/components"),
          path.resolve(__dirname, "src/containers")
        ],
        loader: "babel-loader"
      },
      {
        test: /\.html/,
        include: [path.resolve(__dirname, "src")],
        loader: "html-loader"
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./app/src/index.html",
      filename: "./index.html"
    })
  ]
};

module.exports = configuration;
