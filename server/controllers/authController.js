const User = require("../models/user.model.js");
const generateToken = require("../utils/generateToken.js");

// REGISTER
exports.registerUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    // TODO: Save to DB
    // TODO: Check existing user

    const token = generateToken("dummyUserId");

    res.json({ message: "User registered", token });
  } catch (error) {
    next(error);
  }
};

// LOGIN
exports.loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // TODO: Validate user credentials

    const token = generateToken("dummyUserId");

    res.json({ message: "Logged in", token });
  } catch (error) {
    next(error);
  }
};

// LOGOUT
exports.logoutUser = async (req, res, next) => {
  try {
    res.json({ message: "Logged out" });
  } catch (error) {
    next(error);
  }
};
