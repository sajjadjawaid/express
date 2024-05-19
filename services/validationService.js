const {hash} = require("bcryptjs");
const validationModel = require('../models/validationModel');

module.exports = {
    deletePassword : async (body) =>{
        try {
            const user = body;
            console.log(body);
            console.log(" in service",user);
            user.password = await hash(body.password, 10);
            delete user.password;
            
            console.log(" in service",user);
            const user2 = validationModel.validateAndCreateModel(user);
            if(user2.error) {
                return {
                    error: user2.error
                }
            }
            return {
                response: user2.response
            }


        }catch(error) {
             return{
                error: error
             }
        }
    }
}