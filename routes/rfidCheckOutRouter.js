const route = require("express").Router();
const{afternoon, evening} = require('../controller/rfidCheckOutController');

route.get("/afternoon", afternoon);
route.get("/evening", evening);

module.exports = route;