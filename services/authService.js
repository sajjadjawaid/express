const validationModel = require('../models/validationModel');
const {compare} = require("bcryptjs");


module.exports = {
    login: async(body) =>{
        try{ 
            
          const user = await validationModel.getUser(false, body.userName);
          if(user.error || !user.response){
            return {
                message:"User not Found.",
                error: user?.error || user.response
            }
          }

          const isValid = await compare(body.password,  user.response.dataValues.password);
          console.log("is valid ", isValid)
          if(!isValid){
            return {
                message: "invalid credentials. "
            }
          }

          return {
            response: "logged In."
          }

        }catch(error){
            return{
                error:error
            }
        }
    },
    
}