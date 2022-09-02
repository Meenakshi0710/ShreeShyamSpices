const Errorhandler = require("../utils/errorHandlers");

module.exports = (err,req,res,next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server error";

//Wrong mongodb id error

if(err.name === "CastError"){
    const message = `Resource not found. Invalid ${err.path}`;
    err = new Errorhandler(message,400);
}

//mongoose duplicate key error
if(err.code === 11000){
    const message = `Duplicate ${Object.keys(err.keyValue)} entered`;
    err = new Errorhandler(message,400);
}

//Wrong JWT error

if(err.name === "JsonWebTokenError"){
    const message = `Json Web Token is invalid, try again`;
    err = new Errorhandler(message,400);
}

//JWT expired error

if(err.name === "TokenExpiredError"){
    const message = `Json Web Token is expired, try again`;
    err = new Errorhandler(message,400);
}

res.status(err.statusCode).json({
    success :false,
    message:err.message
})
}