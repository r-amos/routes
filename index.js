const server = require("./server");

server.create({
  port: 3000,
  hostname: "localhost",
  database: "test"
});

server.start();
