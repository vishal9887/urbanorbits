const mongoose = require("mongoose");

// Service schema
const ServiceSchema = new mongoose.Schema({
  title: String,
  slug: String,
  description: String,
  inclusions: [String],
});

// Common content schema
const CommonSchema = new mongoose.Schema({
  process: [String],
  whyChooseUs: [String],
});

// Export both models
const Service = mongoose.model("Service", ServiceSchema);
const Common = mongoose.model("Common", CommonSchema);

module.exports = { Service, Common };
