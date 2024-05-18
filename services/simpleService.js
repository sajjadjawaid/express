// const { response } = require("../app")
const{hash} = require("bcryptjs");
const userModel = require('../models/simpleModel');
module.exports = {
    createUser : async (validate) =>{
     try{

        validate.name = await hash(validate.name,10);
        // delete validate.name;
        console.log("to check before model");
        const user = await userModel.createUser(validate);
        console.log("to check after model");
        console.log(user);
        if(user.error){
            return{
                error: user.error
            }
        }
        return{
            message: user.display
        };
     } catch(error) {
        return {
            error: error
        }
     }
    } 
}