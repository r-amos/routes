const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const GeoJSONSchema = require("./GeoJSONSchema");

const RouteSchema = new Schema({
  title: String,
  user: String,
  description: String,
  routeGeoJSON: GeoJSONSchema,
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
