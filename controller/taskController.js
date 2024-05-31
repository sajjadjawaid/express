const joi = require('joi');
const taskService = require('../services/taskService');


const createTaskSchema = joi.object().keys({
    taskName: joi.string().required(),
    taskDescription: joi.string()
});


module.exports = {
    validateAndCreate: async (req, res) => {
            try {
                const validate = await createTaskSchema.validateAsync(req.body);
                
                const task = await taskService.validateAndCreate(validate);
                if(task.error){
                    return res.send({
                        error: task.error
                    })
                }
                return res.send({
                    message:"task is created",
                    response: task.response
                })
                
                


            }catch(error){
                return res.send({
                    error:error
                })

            }
    },

    getAllTasks: async (req, res) => {
        try {
            const task = await taskService.getAllTasks();
            if(task.error){
                return res.send({
                    error: task.error
                })
            }
            return res.send({
                
                response: task.response
            })
            
            


        }catch(error){
            return res.send({
                error:error
            })

        }
},
}