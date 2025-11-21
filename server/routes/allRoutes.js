const express = require("express");
const router = express.Router();
const authRoutes = require("./auth.routes.js");
const authMiddleware = require("../middleware/auth.middleware.js");

router.use("/auth", authRoutes);

module.exports = router;
