const sequelize = require('../bin/dbConnection');
const users = require("./definitions/users");
const tasks = require("./definitions/tasks")
const taskHasUser = require("./definitions/taskHasUser");
const userHasTask = require("./definitions/userHasTask");

const models = {users, tasks, taskHasUser, userHasTask};

//relation between users and tasks
users.hasOne(tasks,{foreignKey: "userID"});
tasks.belongsTo(users,{foreignKey: "userID"});

const db = {};

db.sequelize = sequelize; // new key in db
sequelize.models = models; // here .models is a keyword

module.exports = {db, models};