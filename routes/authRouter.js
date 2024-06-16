const route = require("express").Router();


const {login} = require("../controller/authController");

route.post('/login',login);

module.exports = route;