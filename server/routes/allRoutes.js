const express = require("express");
const router = express.Router();
const authRoutes = require("./authRoutes.js");
const authMiddleware = require("../middleware/authMiddleware.js");

router.use("/auth", authRoutes);

module.exports = router;
