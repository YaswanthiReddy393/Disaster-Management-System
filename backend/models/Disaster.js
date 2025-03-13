const mongoose = require("mongoose");

const disasterSchema = new mongoose.Schema({
  location: { type: String, required: true },
  type: { type: String, required: true },
  severity: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Disaster", disasterSchema);
