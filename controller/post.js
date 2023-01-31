const Post = require("../model/Post");

const create = async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.status(200).send({
      success: true,
      post,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error,
    });
  }
};

const posts = async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).send({
      success: true,
      posts,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error,
    });
  }
};

const post = async (req, res) => {
  try {
    const post = await Post.findById({ _id: req.params.id }).populate(
      "author_id"
    );
    res.status(200).send({
      success: true,
      post,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error,
    });
  }
};

module.exports = {
  create,
  posts,
  post,
};
