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
      const existingUser = await User.findOne({ email: req.body.email });
      if (existingUser) {
        return res.status(400).json({ error: "Email already exists." });
      }
  
      const newUser = new User(req.body);
      await newUser.save();
      res.status(201).json(newUser);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Server error." });
    }
  });

  //Login
router.post("/login", async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "Invalid email." });
    }

    res.status(200).json({
      id: user.id,
      email: user.email,
      username: user.username,
    });
    console.log(req.body);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
});

  module.exports = router;