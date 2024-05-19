module.exports = {
    validateAndCreateModel : (body) =>{
           try {
            const user = body;
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
    }
}