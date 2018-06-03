const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
      },
      {
        test: /\.scss$/,
        include: [
          path.resolve(__dirname, "src/"),
          path.resolve(__dirname, "src/components"),
          path.resolve(__dirname, "src/containers")
        ],
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  performance: {
    hints: "warning"
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./app/src/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
};

module.exports = configuration;
