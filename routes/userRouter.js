const route = require("express").Router();
const{createUser, verifyUser} = require("../controller/userController");

route.get("/createUser", createUser);
route.get("/verifyUser", verifyUser);

module.exports = route