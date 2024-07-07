const validationModel = require('../models/validationModel');
const {compare} = require("bcryptjs");
const { response } = require('express');
const {sign} = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
    login: async(body) =>{
        try{ 
            
          const user = await validationModel.getUser(false, body.userName);
          if(user.error || !user.response){
            return {
              error: {
                message:"User not Found.",
                error: user?.error || user.response
            }}
          }

          const isValid = await compare(body.password,  user.response.dataValues.password);
          console.log("hashed password ", user.response.dataValues.password);
          delete user.response.dataValues.password;
          console.log("user", user);
         
          if(!isValid){
            return {
              error: {
                message: "invalid credentials. ",
                response: false,
                token: "undefined"
            }}
          }
          
          const token = sign(user.response.dataValues, process.env.SECRET);
          console.log("token: ", token );
          return {
            response:{
            message: "logged In.",
             response: true,
             token: token

          }}

        }catch(error){
            return{
                error:error
            }
        }
    },
    
}