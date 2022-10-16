const pool = require("../../config/database");

module.exports = {
    create: (data,callBack) =>{
        pool.query(
            'INSERT INTO `users`(fName,lName,eMail,phNo,psswd) VALUES(?,?,?,?,?)',
            [
                data.fName,
                data.lName,
                data.eMail,
                data.phNo,
                data.psswd,
            ],
            (error, results, fields) =>{
                if(error){
                    return callBack(error)
                }
                return callBack(null,results)
            }
        );
    },
    getUsers: callBack=>{
        pool.query(
            'SELECT * FROM `users`',
            [],
            (error,results,fields) => {
                if(error){
                    return callBack(error);
                }
                return callBack(null,results);
            }
        );

    },
    getUserById: (id,callBack) =>{
        pool.query(
            'SELECT * FROM `users` WHERE id = ?',
            [id],
            (error,results,fields) => {
                if(error){
                    return callBack(error);
                }
                return callBack(null,results);
            }
        );
    },
    updateUser : (data,callBack) =>{
        pool.query(
            'UPDATE `users` set fName = ?, lName = ?, eMail = ?, phNo = ?, psswd = ? where id = ?',
            [
                data.fName,
                data.lName,
                data.eMail,
                data.phNo,
                data.Psswd,
                data.id
            ],
            (error, results, fields) => {
                if(error){
                    return callBack(error);
                }
                return callBack(null,results);
            }
        )
    },
    deleteUser : (data,callBack)=>{
        pool.query(
            'DELETE FROM `users` where id = ?',
            [data.id],
            (error,results,fields) => {
                if(error){
                    return callBack(error);
                }
                return callBack(null,results);
            }
        )
    },
    getUserByPhNo : (phNo, callBack) =>{
        pool.query (
            'SELECT * FROM `users` where phNo = ?',
            [phNo],
            (error,results,fields) => {
                if(error){
                    return callBack(error);
                }
                return callBack(null,results[0])
            }
        )
    }
};