const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RouteSchema = new Schema({
  title: String,
  author: String,
  body: String,
  date: { type: Date, default: Date.now },
  comments: [
    {
      body: String,
      date: Date
    }
  ],
  meta: {
    votes: Number
  }
});

const Route = mongoose.model("Route", RouteSchema);

module.exports = Route;
