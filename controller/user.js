const User = require("../model/User");

const create = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).send({
      success: true,
      user,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error,
    });
  }
};

const users = async (req, res) => {
  try {
    const user = await User.find({});

    res.status(200).send({
      success: true,
      user,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error,
    });
  }
};

const user = async (req, res) => {
  try {
    const user = await User.findById({ _id: req.params.id }).populate("posts");
    res.status(200).send({
      success: true,
      user,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error,
    });
  }
};

module.exports = { users, user, create };
