const catchAsyncErrors = require("./catchAsyncErrors");
const Errorhandler = require("../utils/errorHandlers");
var jwt = require('jsonwebtoken');
const User = require("../models/User");


const isAuthenticatedUser = catchAsyncErrors(async(req,res,next)=>{
    const {token} = req.cookies;
    if(!token){
        return next(new Errorhandler("please login to access this resource", 401)) 
    }
    const decodedData = jwt.verify(token,process.env.JWT_SECRET);
    req.user = await User.findById(decodedData.user.id);
    next();
})

const authorizeRoles = (...roles) => {
    return ((req,res,next)=>{
        if(!roles.includes(req.user.role)){
           return next( new Errorhandler(`${req.user.role} is not allowed to access this resource`,403))
    }
    next();
});
        
    
}

module.exports = {isAuthenticatedUser, authorizeRoles}
