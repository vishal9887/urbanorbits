const express = require("express");
const router = express.Router();
const { Service, Common } = require("../models/Content");

// 🔹 GET all services
router.get("/services", async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 🔹 GET service by slug
router.get("/services/:slug", async (req, res) => {
  try {
    const service = await Service.findOne({ slug: req.params.slug });
    if (!service) return res.status(404).json({ message: "Service not found" });
    res.json(service);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 🔹 GET common process + whyChooseUs
router.get("/common", async (req, res) => {
  try {
    const common = await Common.findOne();
    res.json(common);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
