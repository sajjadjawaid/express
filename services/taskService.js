const {v4: uuid} = require("uuid");
const taskModel = require('../models/taskModel');


module.exports = {
    validateAndCreate: async(body) =>{
        try{ 
            body.taskID = uuid();
           const task = await taskModel.validateAndCreate(body);
           if(task.error){
            return{
                error: task.error
            }
           }
           return{
            response: task.response
           }


        }catch(error){
            return{
                error:error
            }
        }
    },
    getAllTasks: async() =>{
        try{
            const task = await taskModel.getAllTasks();
            if(task.error){
                return{
                    error: error
                }
            }
            return {
                response: task.response
            }

        }catch(error){
            return{
                error: error
            }
        }
    }
}