const express = require("express");
const router = express.Router();


//we import other route files
const userRoute = require("./users.js");


//We use each route under the corresponding road.
//Her rotayı ilgili yolun altında kullanıyoruz.
router.use("/users", userRoute);

module.exports = router;