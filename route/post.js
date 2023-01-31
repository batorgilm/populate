const express = require("express");
const { posts, post, create } = require("../controller/post");

const postRoute = express.Router();

postRoute.route("/").get(posts).post(create);
postRoute.route("/:id").get(post);

module.exports = postRoute;
