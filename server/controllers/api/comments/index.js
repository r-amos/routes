const express = require("express");
const commentService = require("../../../services/comments");
const routeService = require("../../../services/routes");
const router = express.Router();
const { catchAsyncErrors } = require("../../../utility");
const bodyParser = require("body-parser");

router.get(
  "/",
  catchAsyncErrors(async (request, response) => {
    const routes = await commentService.getComments();
    return response.json(routes);
  })
);

router.get(
  "/:id",
  catchAsyncErrors(async (request, response) => {
    const route = await commentService.getCommentWithId(request.params.id);
    return response.json(route);
  })
);

router.post(
  "/",
  // User Body Parser Middleware To Map Text To request.body
  bodyParser.urlencoded({
    extended: false
  }),
  catchAsyncErrors(async (request, response) => {
    const { route, body } = request.body;
    const comment = await commentService.createNewComment({
      content: body,
      route: route
    });
    // Link to Route
    await routeService.updateRoute(comment.route, "comments", comment._id);
    response.redirect(`comments/${comment._id}`);
  })
);

module.exports = router;
