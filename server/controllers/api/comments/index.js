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
    const { route, body, parent } = request.body;
    const comment = await commentService.createNewComment({
      content: body,
      route: route
    });
    // If Root Comment Just Add Comment Id, Else Get Parents Ancestors & Append
    let ancestors = [];
    if (!parent) {
      ancestors.push(comment._id);
    } else {
      const parentComment = await commentService.getCommentWithId(parent);
      ancestors = [...parentComment.ancestors, comment._id];
    }
    // Update Comment Ancestors
    await commentService.updateComment(comment._id, "ancestors", ancestors);
    // Add To Route
    await routeService.updateRoute(comment.route, "comments", comment._id);
    response.redirect(`comments/${comment._id}`);
  })
);

module.exports = router;
