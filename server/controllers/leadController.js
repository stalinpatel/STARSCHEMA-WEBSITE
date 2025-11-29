const Lead = require("../models/lead.model");


// CREATE LEAD
exports.createLead = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const lead = new Lead({
      name,
      email,
      phone,
      message,
    });

    await lead.save();

    return res.status(201).json({
      success: true,
      message: "Lead created successfully",
    });
  } catch (error) {
    console.error("Lead create error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error — message not sent",
    });
  }
};

// GET LEADS
exports.getLeads = async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    return res.status(200).json({ success: true, leads });
  } catch (error) {
    console.error("Get leads error:", error);
    return res.status(500).json({
      success: false,
      message: "Could not fetch leads",
    });
  }
};

// DELETE LEAD
exports.deleteLead = async (req, res) => {
  try {
    await Lead.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      success: true,
      message: "Lead deleted",
    });
  } catch (error) {
    console.error("Delete error:", error);
    return res.status(500).json({
      success: false,
      message: "Could not delete lead",
    });
  }
};
