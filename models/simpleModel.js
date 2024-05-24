// const {models} = require('./index')

module.exports = {
    createUser: async (body) => {
          try{
            console.log(body);
            const user = body;
            if(user.error){
                return{
                    error: user.error
                }
            }
            return{
                display: user
            }

          }catch(error) {
            return{
                error: error
            }
          }
    }
}