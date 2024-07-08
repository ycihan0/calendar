const express = require("express");
const router = express.Router();


//we import other route files
const userRoute = require("./users.js");
const taskRoute = require("./tasks.js");
const eventRoute = require("./events.js");


//We use each route under the corresponding road.
//Her rotayı ilgili yolun altında kullanıyoruz.
router.use("/users", userRoute);
router.use("/tasks", taskRoute);
router.use("/events", eventRoute);

module.exports = router;