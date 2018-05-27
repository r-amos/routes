const express = require("express");
const routes = require("./routes");
const db = require("./database/db");
const bodyParser = require("body-parser");

// Create Express Instance
const server = express();

// Create

const create = configuration => {
  const { hostname, port, database } = configuration;

  // Connect To Database

  db.connect(`mongodb://${hostname}/${database}`);

  // Server Settings

  server.set("port", port);
  server.set("hostname", hostname);

  // Define Middlewares
  server.use(bodyParser.urlencoded({ extended: false }));

  // Set up Routes
  routes.init(server);
};

// Start Server

const start = () => {
  const hostname = server.get("hostname");
  const port = server.get("port");
  server.listen(port, () => {
    console.log(`Server Listening On http://${hostname}:${port}`);
  });
};

module.exports = {
  create,
  start
};
