const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  route: {
    type: Schema.Types.ObjectId,
    ref: "Route"
  },
  name: String,
  content: String,
  ancestors: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment"
    }
  ]
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
