const jwt = require("jsonwebtoken");
const User = require("../models/user_model");

const requireAuth = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "You must be logged in" });
  }

  const token = authorization.split(" ")[1];
  let user = {
    username: "",
    password: "",
  };

  try {
    const { _id } = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findOne({ _id }).select("_id");
    console.log(req.user);
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "Not authorized" });
  }
};

module.exports = requireAuth;
