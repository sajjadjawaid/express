
const record = {};
const simpleService = require('../services/simpleService');
module.exports = {
    toCheck: (req, res) => {
        const {name, id, city} = req.body;
        console.log("Data received", {name , id, city});
        
        return res.send({
           message: 'Data recieved',
           data: {name , id, city}
        });
    },

    toCreate: (req, res) => {
        const{name, id, city} = req.body;
        
        const user = simpleService.createUser({name, id , city});
        console.log("to checck")

        record[id] = {name, id, city};
        console.log(record);
        if(user.error) {
            return res.send({
                error: user.error
            })
        }
        return res.send({
            response: user.response
        })
        // return res.send({
        //     message: "data is stored",
        //     data: {name, id , city}
        // });
    },

    toDelete : (req, res) =>{
        const {id} = req.body;
        console.log(id);
        if(record[id]){
            delete record[id];
            return res.send({
                message: `The record against ${id} has be deleted`
            });
        }
        else{
            return res.send({
                message: 'id not found'
            })
        }
    },

    toUpdate : (req, res) => {
        const {id, name} = req.body;
        if(record[id]){
            const previous_name = record[id].name;
               record[id].name = name;
               console.log(record);
               return res.send({
                message: `${id}'s name has been updated and changed from ${previous_name} to ${name}`
               }) 
        }

    },
    
};
