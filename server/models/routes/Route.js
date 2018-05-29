const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const GeoJSONSchema = require("./GeoJSONSchema");

const RouteSchema = new Schema({
  title: String,
  user: String,
  description: String,
  tags: [String],
  routeGeoJSON: GeoJSONSchema,
  created: {
    type: Date,
    default: Date.now
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment"
    }
  ],
  meta: {
    hearts: Number
  }
});

const Route = mongoose.model("Route", RouteSchema);

module.exports = Route;
