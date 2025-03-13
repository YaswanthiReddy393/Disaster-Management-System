const express = require("express");
const router = express.Router();
const Disaster = require("../models/Disaster");

// GET all disasters
router.get("/", async (req, res) => {
  try {
    const disasters = await Disaster.find();
    res.json(disasters);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// POST a new disaster
router.post("/", async (req, res) => {
  try {
    const { location, type, severity } = req.body;
    const newDisaster = new Disaster({ location, type, severity });
    await newDisaster.save();
    res.status(201).json(newDisaster);
  } catch (error) {
    res.status(500).json({ error: "Error creating disaster report" });
  }
});

module.exports = router;
