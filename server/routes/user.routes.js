const express = require("express");
const router = express.Router();
const { getProfile } = require("../controllers/userController");
const { protect } = require("../middleware/auth.middleware");

router.get("/me", protect, getProfile);

module.exports = router;
