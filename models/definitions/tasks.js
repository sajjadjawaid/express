const {Model, DataTypes} = require("sequelize");
const sequelize = require("../../bin/dbConnection");
const users = require('./users');

class tasks extends Model {

}

tasks.init({
    taskID: {
        primaryKey : true,
        type: DataTypes.STRING(255),
        },
    taskName: {
        
        allowNull: false,
        type: DataTypes.STRING(100),

    },
    taskDescription: {
        type: DataTypes.TEXT,
        allowNull : true
        

    },
    userID:{
        type: DataTypes.STRING(255),
        allowNull: true,
        references: {
            model: users,
            key: "userID"

        }
    }

}, {

    timestamps: true,
    paramoid: true,
    tableName: "tasks",
    sequelize, //her passed connection of database

});

module.exports = tasks;