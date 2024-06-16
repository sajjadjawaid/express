const { verify } = require('jsonwebtoken');
require("dotenv").config();


module.exports = {
    middleware : async (req, res, next ) => {
        try{
            console.log(req.cookies);
            const token = req.cookies.auth;
            //here we checked if token exists or not
            if(token === "undefined"){
                return res.send({
                    response: "unauthorised user"
                })
            }
            
            //now we will check if token is correct or not, we will do this by using verify
            verify(token, process.env.SECRET, (error, data)=>{
                     //now if token doesnt match
                     if(error){
                        return res.send({
                            response: "forbidden access"
                        })
                     }
                     next();
            })

            
    
        }catch(error){
            return res.send({
                error: error
            })
        }

        
    }
}