const Route = require("../../models/routes/Route.js");
const Comment = require("../../models/comments/Comment.js");

const getRoutes = () => {
  return Route.find({}, "-routeGeoJSON", (err, routes) => {
    if (err) return console.error(err);
    return routes;
  });
};

const getRouteWithId = async id => {
  const route = await Route.findOne({ _id: id });
  const obj = route.toObject();
  obj.comments = await getRouteCommentThread(id);
  return obj;
};

const getRouteCommentThread = async routeId => {
  const comments = await Comment.find({ route: routeId });
  // Sort Comments By Ancestor Length (Largest First)
  comments.sort(
    (currentComment, nextComment) =>
      nextComment.ancestors.length - currentComment.ancestors.length
  );
  const nestedComments = {};
  comments
    .map(comment => comment.toObject())
    .forEach(comment => (nestedComments[comment._id] = comment));
  // For Each Comment Populate Parent (Second Last Ancestor)
  comments.forEach(comment => {
    if (comment.ancestors.length > 1) {
      // Get Parent Comment From Ancestor Array
      const parent =
        nestedComments[comment.ancestors[comment.ancestors.length - 2]];
      // Add / Append To Replies Array On Parent
      if (!parent.replies) {
        nestedComments[parent._id] = {
          ...nestedComments[parent._id],
          replies: [nestedComments[comment._id]]
        };
      } else {
        parent.replies.push(nestedComments[comment._id]);
      }
    }
  });
  //Return Root Comments Only As Tree Now Populated
  const filteredComments = {};
  const routeComments = comments
    .filter(comment => comment.ancestors.length === 1)
    .map(comment => comment.toObject()._id.toString());
  // If Root Comment Add To Filtered Object
  // TODO: Filter Object Properties
  for (let comment in nestedComments) {
    if (routeComments.includes(comment)) {
      filteredComments[comment] = nestedComments[comment];
    }
  }
  return filteredComments;
};

const createNewRoute = async data => {
  const route = new Route(data);
  return await route.save();
};

const updateRoute = async (id, field, value) => {
  const route = await Route.findOne({ _id: id });
  if (Array.isArray(route[field])) {
    route[field].push(value);
  } else {
    route[field] = value;
  }
  route.save();
};

module.exports = {
  getRoutes,
  getRouteWithId,
  createNewRoute,
  updateRoute
};
