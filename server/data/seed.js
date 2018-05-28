const db = require("./db");
const Route = require("../models/routes/Route.js");

db.connect(`mongodb://localhost/test2`);

const one = new Route({ title: "one" });

one.save(function(err, one) {
  if (err) return handleError(err);
  console.log("Saved", one._id);
});
