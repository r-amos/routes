const setHeaders = (request, response, next) => {
  // Allow localhost:8080 to connect
  //TODO: Remove
  response.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");
  // Request methods allowed
  response.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  // Request headers allowed
  response.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  next();
};

module.exports = setHeaders;
