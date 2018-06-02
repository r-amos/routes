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

//TODO: Make Better
const updateComment = async (id, field, value) => {
  const comment = await Comment.findOne({ _id: id });
  if (Array.isArray(comment[field])) {
    if (Array.isArray(value)) {
      comment[field] = value;
    } else {
      comment[field].push(value);
    }
  } else {
    comment[field] = value;
  }
  comment.save();
};

module.exports = {
  getComments,
  getCommentWithId,
  createNewComment,
  updateComment
};
