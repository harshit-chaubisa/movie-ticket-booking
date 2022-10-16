const { create, getUserById, getUsers, updateUser, deleteUser, getUserByPhNo } = require("./user.service");
const { hashSync, genSaltSync, compareSync  } = require("bcrypt");
const { sign } = require("jsonwebtoken");

module.exports = {
    createUser: (req,res)=>{
        const body = req.body;
        const salt = genSaltSync(10);
        body.psswd = hashSync(body.psswd,salt);
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
    getUserById : (req,res) => {
        const id = req.params.id;
        getUserById(id,(error,results) =>{
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
    getUsers: (req,res) => {
        getUsers((err,results) => {
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
    updateUser : (req,res) =>{
        const body = req.body;
        const salt = genSaltSync(10);
        body.psswd = hashSync(body.psswd,salt);
        updateUser(body,(err,results) =>{
            if(err){
                console.log(err);
                return;
            }
            if(!results){
                return res.json({
                    success : 0,
                    message : "failed to update user"
                })
            }
            return res.json({
                success : 1,
                message : "updated successfully"
            });
        });
    },
    deleteUser : (req,res) => {
        const data = req.body;
        deleteUser(data,(err,results) => {
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
                message : "user deleted successfully."
            });
        });
    },
    login: (req,res) => {
        const body = req.body;
        getUserByPhNo(body.phNo,(err,results) => {
            if(err) { 
                console.log(err);
            }
            if(!results){
                return res.json({
                    success : 0,
                    data : "Invalid phone number or password."
                });
            }
            const result = compareSync(body.psswd,results.psswd);
            if(result){
                results.psswd = undefined;
                const jsontoken = sign({result : results}, "qwe1234", {
                    expiresIn : "1hr"
                });
                return res.json({
                    success : 1,
                    message : "login successful",
                    token : jsontoken
                });
            }else{
                return res.json({
                    success : 0,
                    data : "Invalid phone number or password"
                });
            }
        });

    }
}