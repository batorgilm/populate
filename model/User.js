const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    toJSON: { virtuals: true },
  }
);

UserSchema.virtual("posts", {
  ref: "Post",
  localField: "_id",
  foreignField: "author_id",
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
