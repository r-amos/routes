const mongoose = require("mongoose");

const connect = url => {
  return mongoose.connect(url);
};

mongoose.connection.on("error", () => {
  console.error.bind(console, "connection error:");
});

mongoose.connection.once("open", () => {
  console.log("Connected to database");
});

module.exports = {
  connect
};
