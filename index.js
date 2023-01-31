const express = require("express");
const mongoose = require("mongoose");
const postRoute = require("./route/post");
const userRoute = require("./route/user");

const PORT = 8000;
const MONGO_URI = "mongodb://localhost:27017/instagram";
const app = express();

app.use(express.json());

app.use("/users", userRoute);
app.use("/posts", postRoute);

app.listen(PORT, async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(MONGO_URI);
    console.log("database connect success");
  } catch (error) {
    process.exit(1);
  }
  console.log(`Server running : ${PORT}`);
});
