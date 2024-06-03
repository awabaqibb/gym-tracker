const User = require("../models/user_model");

const loginUser = async (req, res) => {
  res.json("Login user");
};
const signupUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.signup(username, password);
    res.status(201).json({ username });
  } catch (Error) {
    res.status(400).json({ message: Error });
  }
};

module.exports = { loginUser, signupUser };
