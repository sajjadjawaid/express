const route = require("express").Router();
const {validateAndCreate, getAllTasks} = require('../controller/taskController');

route.post('/validateAndCreate', validateAndCreate);
route.get('/getAllTasks', getAllTasks);

module.exports = route;