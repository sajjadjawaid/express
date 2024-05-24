const joi = require('joi');
const validationService = require('../services/validationService');



const createUserSchema = joi.object().keys({
    userName: joi.string().alphanum().min(6).max(20).required(),
    password: joi.string().min(4).max(10).required()
});
 
module.exports = {
    validateAndCreate : async (req, res) => {
        try{
            const validation = await createUserSchema.validateAsync(req.body);
            const user = await validationService.deletePassword(validation);
            console.log("in controller", user);
            if(user.error){
                return res.send({
                    error: user.error
                })
            }
            return res.send({
                message:"user is validated",
                response: user.response
            })

        }catch (error){
             return res.send({
                error: error
             })
        }
             
    }, 

     getAllUsers: async (req, res) => {
        try{
            const users = await validationService.getAllUsers();
            if(users.error){
                return res.send({
                    error: users.error
                })
            }

            return res.send({
                response: users.response
            })

        }catch (error){
             return res.send({
                error: error
             })
        }

     }

}