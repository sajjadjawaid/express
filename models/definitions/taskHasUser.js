const {Model, DataTypes} = require("sequelize");
const sequelize = require("../../bin/dbConnection");

class taskHasUser extends Model {

}

taskHasUser.init({
    taskHasUserID: {
        primaryKey : true,
        type: DataTypes.STRING(255),
        }
}, {

    timestamps: true,
    paramoid: true,
    tableName: "taskHasUser",
    sequelize, //her passed connection of database

});

module.exports = taskHasUser;