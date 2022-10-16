const { create, getAuditoriumById, getAuditoriums, updateAuditorium, deleteAuditorium } = require("./auditorium.service");

module.exports = {
    addAuditorium: (req,res)=>{
        const body = req.body;
        create(body,(err,results)=>{
            if(err){
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error."
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },
    getAuditoriumById : (req,res) => {
        const id = req.params.id;
        getAuditoriumById(id,(error,results) =>{
            if(error){
                console.log(err);
                return;
            }
            if(!results){
                return res.json({
                    success : 0,
                    message : "Record not found."
                });
            }
            return res.json({
                success : 1,
                data : results
            });
        });
    },
    getAuditoriums: (req,res) => {
        getAuditoriums((err,results) => {
            if(err){
                console.log(err);
                return;
            }
            return res.json({
                success : 1,
                data : results
            });
        });
    },
    updateAuditorium : (req,res) =>{
        const body = req.body;
        updateAuditorium(body,(err,results) =>{
            if(err){
                console.log(err);
                return;
            }
            if(!results){
                return res.json({
                    success : 0,
                    message : "failed to update movie"
                })
            }
            return res.json({
                success : 1,
                message : "updated successfully"
            });
        });
    },
    deleteAuditorium : (req,res) => {
        const data = req.body;
        deleteAuditorium(data,(err,results) => {
            if(err){
                console.log(err);
                return;
            }
            if(!results){
                return res.json({
                    success : 1,
                    message : "Record not Found"
                });
            }
            return res.json({
                success :1,
                message : "movie deleted successfully."
            });
        });
    }
}