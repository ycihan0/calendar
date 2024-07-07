const express = require("express");
const Event = require("../models/Event");
const router = express.Router();

//create a new event
router.post("/", async (req, res) => {
    try {
      const newEvent = new Event(req.body);
      await newEvent.save();
      res.status(201).json(newEvent);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Server error." });
    }
  });

module.exports = router;