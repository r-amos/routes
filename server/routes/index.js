const apiRoute = require("./api");
const express = require("express");
const { notFound } = require("../middleware/errorHandlers");
const setHeaders = require("../middleware/headers");

// All Routing
const init = server => {
  server.use(express.static("server/public"));
  // Set Headers
  server.use(setHeaders);
  // Set Routes
  server.use("/api", apiRoute);
  // Handle Routes Not Present
  server.use(notFound);
};

module.exports = {
  init
};
