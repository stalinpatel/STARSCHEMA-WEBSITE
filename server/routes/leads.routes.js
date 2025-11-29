const express = require("express");
const Lead = require("../models/lead.model");
const router = express.Router();

/** POST /api/leads */
router.post("/leads", async (req, res) => {
  try {
    const { name, email, phone, courseChoice, otherText, source } = req.body;
    if (!name || !email || !phone || !courseChoice || !source) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    const lead = await Lead.create({
      name,
      email,
      phone,
      courseChoice,
      otherText,
      source,
    });
    res.status(201).json(lead);
  } catch (err) {
    console.error("POST /api/leads error", err);
    res.status(500).json({ error: "Server error" });
  }
});

/** GET /api/admin/leads */
router.get("/admin/leads", async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    res.json(leads);
  } catch (err) {
    console.error("GET /api/admin/leads error", err);
    res.status(500).json({ error: "Server error" });
  }
});

/** DELETE /api/admin/leads/:id */
router.delete("/admin/leads/:id", async (req, res) => {
  try {
    await Lead.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    console.error("DELETE /api/admin/leads/:id error", err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
