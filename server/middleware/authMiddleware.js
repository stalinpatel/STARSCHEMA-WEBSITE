const jwt = require("jsonwebtoken");
// const User = require("../models/user.js");

const authMiddleware = async (req, res, next) => {
  // try {
  //   const token = req.cookies.token;
  //   if (!token) {
  //     return res.status(401).json({ message: "Unauthorized: No token" });
  //   }
  //   // Verify token
  //   const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
  //     const user = await User.findById(decoded.id);
  //   if (!user) {
  //     return res.status(401).json({ message: "Unauthorized: User not found" });
  //   }
  //   req.user = user;
  //   next();
  // } catch (error) {
  //   if (error.name === "TokenExpiredError") {
  //     return res
  //       .status(401)
  //       .json({ message: "Session expired, please login again" });
  //   }
  //   res.status(401).json({ message: "Unauthorized: Invalid token" });
  // }
};

module.exports = authMiddleware;
