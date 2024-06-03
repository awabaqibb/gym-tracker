const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// Define the user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
});

userSchema.statics.signup = async function (username, password) {
  if (!username || !password) {
    throw new Error("Username and password are required");
  }

  const existingUser = await this.findOne({ username });
  if (existingUser) {
    throw new Error("Username is already taken");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = new this({ username, password: hashedPassword });
  await user.save();
  return user;
};

userSchema.statics.login = async function (username, password) {
  const user = await this.findOne({ username });
  if (!user) {
    throw new Error("Invalid username or password");
  }

  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (!isPasswordCorrect) {
    throw new Error("Invalid username or password");
  }

  return user;
};

const User = mongoose.model("User", userSchema);
module.exports = User;
