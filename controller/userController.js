module.exports = {
    createUser: (req,res) => {
        res.send({
            message: "Create User.",
        });
    },

    verifyUser: (req,res) =>{
        res.send({
            message: "User is verified",
        });
    },
};