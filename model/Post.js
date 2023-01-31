const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    author_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    createdAt: {
      type: Date,
      default: new Date(),
    },
  },
  {
    toJSON: { virtuals: true },
  }
);

const Post = mongoose.model("Post", PostSchema);
module.exports = Post;
