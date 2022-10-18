const  { verify } = require("jsonwebtoken");

module.exports ={
    checkUserToken: (req, res, next) => {
        let token = req.get("authorization");
        if(token) {
            token = token.slice(7);
            verify(token, "qwe1234", (err,decoded) => {
                if(err){
                    res.json({
                        success : 0,
                        message : "Invalid token."
                    });
                }
                else{
                    next();
                }
            });
        }
        else{
            res.json({
                success : 0,
                message : "Access denied! Unauthorized user."
            });
        }
    },
    checkAdminToken: (req, res, next) =>{
        let token = req.get("authorization");
        if(token) {
            token = token.slice(7);
            verify(token, "ert1234", (err,decoded) => {
                if(err){
                    res.json({
                        success : 0,
                        message : "Invalid token."
                    });
                }
                else{
                    next();
                }
            });
        }
        else{
            res.json({
                success : 0,
                message : "Access denied! Unauthorized user."
            });
        }
    }
}