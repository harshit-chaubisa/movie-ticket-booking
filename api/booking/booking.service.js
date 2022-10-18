const pool = require("../../config/database");

module.exports = {
    create: (data,callBack) =>{
        pool.query(
            'INSERT INTO `booking`(showId, userId, paid, noOfSeats) VALUES(?,?,?,?)',
            [
                data.showId,
                data.userId,
                data.paid,
                data.noOfSeats
            ],
            (error, results, fields) =>{
                if(error){
                    return callBack(error)
                }
                return callBack(null,results)
            }
        );
    },
    getBooking: callBack=>{
        pool.query(
            'SELECT * FROM `booking`',
            [],
            (error,results,fields) => {
                if(error){
                    return callBack(error);
                }
                return callBack(null,results);
            }
        );

    },
    getBookingById: (id,callBack) =>{
        pool.query(
            'SELECT * FROM `booking` WHERE id = ?',
            [id],
            (error,results,fields) => {
                if(error){
                    return callBack(error);
                }
                return callBack(null,results);
            }
        );
    },
    updateBooking : (data,callBack) =>{
        pool.query(
            'UPDATE `booking` set movieId = ?, userId = ?, paid = ?, noOfSeats = ? where id = ?',
            [
                data.movieId,
                data.userId,
                data.paid,
                data.noOfSeats,
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
    deleteBooking : (id,callBack)=>{
        pool.query(
            'DELETE FROM `booking` where id = ?',
            [id],
            (error,results,fields) => {
                if(error){
                    return callBack(error);
                }
                return callBack(null,results);
            }
        )
    }
}