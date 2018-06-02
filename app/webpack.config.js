const path = require("path");
const configuration = {
  entry: "./app/src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  }
};

module.exports = configuration;
