const { models } = require('./index');

module.exports = {
    validateAndCreate: async(body) =>{
         try{
            const task = await models.tasks.create({...body})
            if(task.error){
                return {
                    error: task.error
                }
            }
            return {
                response: task
            }

         } catch(error){
            return{
                error:error
            }
         }

    },
    getAllTasks: async()=>{
        try{
            const task = await models.tasks.findAll();
            return{
                response: task
            }
        }catch(error){
            return{
                error:error
            }
        }
    },
 
    deleteTasks: async(taskId) =>{
        try{
           const task = await models.tasks.destroy({
            where: {taskID: taskId},
        })
           if(task.error){
               return {
                   error: task.error
               }
           }
           return {
               response: task
           }

        } catch(error){
           return{
               error:error
           }
        }

   },

}