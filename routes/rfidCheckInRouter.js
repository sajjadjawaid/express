const route = require("express").Router();
// const {onTime: arrived, notOnTime: late} = require("../controller/rfidCheckInController");
const {onTime, notOnTime} = require("../controller/rfidCheckInController");

route.get("/onTime", onTime);
route.get("/notOnTime", notOnTime);

// route.get("/onTime", arrived);
// route.get("/notOnTime", late);

module.exports = route;