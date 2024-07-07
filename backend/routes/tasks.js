const express = require("express");
const Task = require("../models/Task");
const router = express.Router();

//create a new task
router.post("/", async (req, res) => {
    try {
      const newTask = new Task(req.body);
      await newTask.save();
      res.status(201).json(newTask);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Server error." });
    }
  });

module.exports = router;