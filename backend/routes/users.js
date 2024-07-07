const express = require("express");
const User = require("../models/User");
const router = express.Router();

//bring all users (Read-All)
router.get("/", async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Server error." });
    }
  });


//create a new user
router.post("/", async (req, res) => {
    try {
      const newUser = new User(req.body);
      await newUser.save();
      res.status(201).json(newUser);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Server error." });
    }
  });


  module.exports = router;