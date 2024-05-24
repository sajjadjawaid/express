const {Model, DataTypes} = require("sequelize");
const sequelize = require("../../bin/dbConnection");

class userHasTask extends Model {

}

userHasTask.init({
    userHasTaskID: {
        primaryKey : true,
        type: DataTypes.STRING(255),
        }
}, {

    timestamps: true,
    paramoid: true,
    tableName: "userHasTask",
    sequelize, //her passed connection of database

});

module.exports = userHasTask;