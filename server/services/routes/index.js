const Route = require("../../models/routes");

const getRoutes = () => {
  return Route.find((err, routes) => {
    if (err) return console.error(err);
    return routes;
  });
};

const getRouteWithId = id => {
  return Route.findOne({ _id: id }, (err, route) => {
    if (err) return console.error(err);
    return route;
  });
};

const createNewRoute = async userData => {
  const route = new Route(userData);
  return await route.save();
};

module.exports = {
  getRoutes,
  getRouteWithId,
  createNewRoute
};
