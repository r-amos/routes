const apiRoute = require("./api");
const express = require("express");
const { notFound } = require("../middleware/errorHandlers");

// All Routing
const init = server => {
  server.use(express.static("server/public"));
  server.use("/api", apiRoute);
  // Handle Routes Not Present
  server.use(notFound);
};

module.exports = {
  init
};
