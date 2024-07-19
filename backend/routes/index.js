const express = require("express");
const router = express.Router();


const userRoute = require("./users.js");
const taskRoute = require("./tasks.js");
const eventRoute = require("./events.js");


router.use("/users", userRoute);
router.use("/tasks", taskRoute);
router.use("/events", eventRoute);

module.exports = router;