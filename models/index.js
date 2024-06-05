const sequelize = require('../bin/dbConnection');
const users = require("./definitions/users");
const tasks = require("./definitions/tasks")
const taskHasUser = require("./definitions/taskHasUser");
const userHasTask = require("./definitions/userHasTask");
const sessions = require("./definitions/sessions");

const models = {users, tasks, taskHasUser, userHasTask, sessions};

//relation between users and tasks
users.hasMany(tasks,{foreignKey: "userID"});
tasks.belongsTo(users,{foreignKey: "userID"});

//relation between session and users
users.hasOne(sessions,{foreignKey: "userID"});
sessions.belongsTo(users,{foreignKey: "userID"});

const db = {};

db.sequelize = sequelize; // new key in db
sequelize.models = models; // here .models is a keyword

module.exports = {db, models};