const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
//creating token and saving in cookie
const sendToken = (user,statusCode,res) =>{
    const data = {
        user : {
          id : user._id

        }
    }
    console.log(process.env.JWT_SECRET);
    const jwtToken = jwt.sign(data, process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRE,
    })

    // options for cookie
    const options = {
        expires : new Date(
            Date.now() + process.env.COOKIE_EXPIRE *24*60*60*1000
        ),
        httpOnly :true
    }
    res.status(statusCode).cookie('token',jwtToken,options).json({
        success:true,
        user,
        jwtToken
    })
}

module.exports = sendToken;