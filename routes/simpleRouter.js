const route = require("express").Router();
const{toCheck, toCreate, toDelete, toUpdate} = require('../controller/simpleController');

route.get('/toCheck', toCheck);
route.post('/toCreate', toCreate);
route.delete('/toDelete', toDelete );
route.put('/toUpdate', toUpdate);

module.exports = route;