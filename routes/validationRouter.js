const route = require("express").Router();
const {validateAndCreate, getAllUsers} = require("../controller/validationController");

route.post('/validateAndCreate', validateAndCreate);
route.get('/getAllUsers', getAllUsers);

module.exports = route;