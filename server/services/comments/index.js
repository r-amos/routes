const Comment = require("../../models/comments/Comment.js");

const getComments = () => {
  return Comment.find((err, routes) => {
    if (err) return console.error(err);
    return routes;
  });
};

const getCommentWithId = id => {
  return Comment.findOne({ _id: id }, (err, comment) => {
    if (err) return console.error(err);
    return comment;
  });
};

const createNewComment = async data => {
  const comment = new Comment(data);

  return await comment.save();
};

module.exports = {
  getComments,
  getCommentWithId,
  createNewComment
};
