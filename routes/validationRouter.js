const route = require("express").Router();
const {validateAndCreate, getAllUsers, deleteUser, updateUser} = require("../controller/validationController");
const {middleware} = require('../middleware');

route.post('/validateAndCreate', validateAndCreate);
route.get('/getAllUsers',middleware, getAllUsers);
route.delete('/deleteUser',deleteUser);
route.put('/updateUser', updateUser);

module.exports = route;