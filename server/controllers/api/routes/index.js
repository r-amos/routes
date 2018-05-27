const express = require("express");
const routeService = require("../../../services/routes");

const router = express.Router();

router.get("/", async (request, response) => {
  const routes = await routeService.getRoutes();
  return response.json(routes);
});

router.get("/:id", async (request, response) => {
  //Check Async
  const route = await routeService.getRouteWithId(request.params.id);
  return response.json(route);
});

router.post("/", async (request, response) => {
  const route = await routeService.createNewRoute(request.body);
  response.redirect(`routes/${route._id}`);
});

module.exports = router;
