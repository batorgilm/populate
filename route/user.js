const express = require("express");
const { users, user, create } = require("../controller/user");

const userRoute = express.Router();

userRoute.route("/").get(users).post(create);
userRoute.route("/:id").get(user);

module.exports = userRoute;
