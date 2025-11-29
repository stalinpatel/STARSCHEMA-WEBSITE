const express = require("express");
const router = express.Router();

const authRoutes = require("./auth.routes");
const leadRoutes = require("./lead.routes");
const userRoutes = require("./user.routes");

router.use("/auth", authRoutes);
router.use("/api", leadRoutes);
router.use("/user", userRoutes); // enables /starschema/user/me

module.exports = router;
