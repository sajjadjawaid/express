const route = require("express").Router();
const {validateAndCreate} = require("../controller/validationController");

route.post('/validateAndCreate', validateAndCreate);

module.exports = route;