// const { response } = require("../app")

module.exports = {
    createUser : ({name, id, city}) =>{
     try{
        return{
            response: {name, id, city}
        };
     } catch(error) {
        return {
            error: error
        }
     }
    } 
}