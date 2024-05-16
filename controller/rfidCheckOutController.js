module.exports = {
    afternoon: (req, res) => {
        res.send({
           display: "Checked Out between 12pm and 6pm."
        });
    },

    evening: (req, res) =>{
        res.send({
            display: "Checked Out between 6pm and 9pm"
        });

    }
};