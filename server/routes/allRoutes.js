const express = require("express");
const router = express.Router();

const authRoutes = require("./auth.routes");
const leadRoutes = require("./lead.routes");
const userRoutes = require("./user.routes");

router.use("/auth", authRoutes);
router.use("/leads", leadRoutes);
router.use("/user", userRoutes);

module.exports = router;
