const express = require("express");
const Lead = require("../models/lead.model.js");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, phone, source, courseChoice } = req.body;

    if (!name || !email  || !source || !courseChoice) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const lead = await Lead.create({
      name,
      email,
      phone,
      source,
      courseChoice,
    });

    res.status(200).json({ success: true, lead });
  } catch (err) {
    console.error("POST /leads error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

router.get("/admin", async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    res.json(leads);
  } catch (err) {
    console.error("GET /api/admin/leads error", err);
    res.status(500).json({ error: "Server error" });
  }
});

router.delete("/admin/:id", async (req, res) => {
  try {
    await Lead.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    console.error("DELETE /api/admin/leads/:id error", err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
