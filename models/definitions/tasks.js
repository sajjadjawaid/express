const {Model, DataTypes} = require("sequelize");
const sequelize = require("../../bin/dbConnection");

class tasks extends Model {

}

tasks.init({
    taskID: {
        primaryKey : true,
        type: DataTypes.STRING(255),
        },
    taskName: {
        unique: true,
        allowNull: false,
        type: DataTypes.STRING(34),

    } 
}, {

    timestamps: true,
    paramoid: true,
    tableName: "tasks",
    sequelize, //her passed connection of database

});

module.exports = tasks;