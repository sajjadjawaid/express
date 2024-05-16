module.exports = {
    onTime : (req, res) => {
        res.send({
            display: new Date(),
        });
       
    },
    notOnTime: (req, res) =>{
        res.send({
            display: "Not on Time."
        });
    },

};