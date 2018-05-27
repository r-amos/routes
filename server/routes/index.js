const apiRoute = require("./api");
const express = require("express");

const init = server => {
  server.use(express.static("server/public"));
  server.use("/api", apiRoute);
};

module.exports = {
  init
};
