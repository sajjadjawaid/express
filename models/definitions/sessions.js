const {Model, DataTypes} = require("sequelize");
const sequelize = require("../../bin/dbConnection");
const users = require('./users');

class sessions extends Model {

}

sessions.init({
    sessionID: {
        primaryKey : true,
        type: DataTypes.STRING(255),
        },
    token: {
        
        allowNull: false,
        unique: true,
        type: DataTypes.STRING(1000),

    },
    userID:{
        type: DataTypes.STRING(255),
        allowNull: false,
        // unique: true, if you want to apply then deleted table from postgres and restart npm again
        unique: true,
        references: {
            model: users,
            key: "userID"

        }
    }

}, {

   
    tableName: "sessions",
    sequelize, //her passed connection of database

});

module.exports = sessions;