const { create, getShows, getShowsById, updateShows, deleteShows } = require("./shows.service");

module.exports = {
    addShows: (req,res)=>{
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
    getShowsById : (req,res) => {
        const id = req.params.id;
        getShowsById(id,(error,results) =>{
            if(error){
                console.log(err);
                return;
            }
            if(!results){
                return res.json({
                    success : 0,
                    message : "Show not found."
                });
            }
            return res.json({
                success : 1,
                data : results
            });
        });
    },
    getShows: (req,res) => {
        getShows((err,results) => {
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
    updateShows : (req,res) =>{
        const body = req.body;
        updateShows(body,(err,results) =>{
            if(err){
                console.log(err);
                return;
            }
            if(!results){
                return res.json({
                    success : 0,
                    message : "failed to update shows"
                })
            }
            return res.json({
                success : 1,
                message : "updated successfully"
            });
        });
    },
    deleteShows : (req,res) => {
        const id = req.params.id;
        deleteShows(id,(err,results) => {
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
                message : "Show deleted successfully."
            });
        });
    }
}