const {models} = require('./index')

module.exports = {
    
    getUser: async(userID, userName) => {
        try {
            console.log("in model get users");
            const user = await models.users.findOne({
                ...(userID ? {where : {userID: userID}}: {where: {userName: userName}}),
            })
            return {
                response: user
            }
    
           } catch(error){
            return{
                error: error
            }
           }
       },
    
    validateAndCreateModel :async (body) =>{
           try {
            const user = await models.users.create({...body});

            console.log("in model ", user)
            if(user.error){
                return {
                    error: error
                }
            }
            return {
                response: user
            }

           } catch(error){
            return{
                error: error
            }
           }
    },
//    getUser: async(userID, userName) => {
//     try {
//         console.log("in model get users");
//         const user = await models.users.findOne({
//             ...(userID ? {where : {userID: userID}}: {where: {userName: userName}}),
//         })
//         return {
//             response: user
//         }

//        } catch(error){
//         return{
//             error: error
//         }
//        }
//    },

   getAllUsers: async () =>{
    try {
        const users = await models.users.findAll();
        return{
            response: users
        }

       } catch(error){
        return{
            error: error
        }
       }
   }
    

}

