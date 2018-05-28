const Route = require("../../models/routes/Route.js");
const Comment = require("../../models/comments/Comment.js");

const getRoutes = () => {
  return Route.find((err, routes) => {
    if (err) return console.error(err);
    return routes;
  });
};

const getRouteWithId = id => {
  return Route.findOne({ _id: id })
    .populate("comments", "id content")
    .exec();
};

const createNewRoute = async data => {
  const route = new Route(data);
  return await route.save();
};

const updateRoute = async (id, field, value) => {
  const route = await Route.findOne({ _id: id });
  route[field] = value;
  route.save();
};

module.exports = {
  getRoutes,
  getRouteWithId,
  createNewRoute,
  updateRoute
};
