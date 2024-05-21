const sequelize = require('../bin/dbConnection');
const users = require("./definitions/users");

const models = {users};

const db = {};

db.sequelize = sequelize; // new key in db
sequelize.models = models; // here .models is a keyword

module.exports = {db, models};