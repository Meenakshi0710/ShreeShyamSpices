const User = require("../models/User");
const Errorhandler = require("../utils/errorHandlers");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail");
const crypto = require('crypto');
const Products = require("../models/Products");
const cloudinary = require("cloudinary");

//Register a User

exports.registerUser = catchAsyncErrors(async(req,res,next)=>{
    const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
        folder: "avatars",
        width: 150,
        crop: "scale",
      });

    const{name,email,password} = req.body;
    const salt = await bcrypt.genSalt(10);
    console.log(salt);
    console.log(req.body.password);
    const secPass = await bcrypt.hash(password, salt);
    console.log(secPass);
    const user = await User.create({name,email,password : secPass,avatar : {
        public_id : myCloud.public_id,
        url : myCloud.secure_url
    }
    });
    console.log(user);
    sendToken(user,201,res);
});

//LOgin a user

exports.loginUser =  catchAsyncErrors(async(req,res,next)=>{
    const {email,password} = req.body;

    //checking if user entered email and password both

    if(!email || !password){
        return next(new Errorhandler("please try to login with correct credentials", 404)); 
    }

    let user = await User.findOne({email}).select("+password");
    console.log(user);
    if(!user){
        return next(new Errorhandler("please try to login with correct credentials", 404))
    } 
        console.log(password);
        console.log(user.password);
    let passwordCompare = await bcrypt.compare(password,user.password);
     console.log(passwordCompare);
     if(!passwordCompare){
       return next(new Errorhandler("please try to login with correct credentials", 404))
     }

     sendToken(user,200,res);
    
})

//Logout a user

exports.logoutUser =  catchAsyncErrors(async(req,res,next)=>{

    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly :true

    })


    res.status(200).json({
        success: true,
        message : "Logged out successfully"
    })
})
 //Forgot password

 exports.forgotPassword =  catchAsyncErrors(async(req,res,next)=>{
console.log(req.body.email);
    const user = await User.findOne({email:req.body.email});
    if(!user){
        return next(new Errorhandler("user not found", 404))
    } 

    //get reset password token
    const resetToken = user.getResetPasswordToken();
    await user.save({validateBeforeSave:false});

    const resetPasswordUrl = `${req.protocol}://${req.get("host")}/api/user/password/reset/${resetToken}`;
    const message = `Your password reset token is :- \n\n ${resetPasswordUrl} \n\n if ypu have not requested than please ignore`;
 
    try {

        await sendEmail({
            email : user.email,
            subject : `Shree Shyam Spices Password Recovery`,
            message

        })
        res.status(200).json({
            success:true,
            message:`Email sent to ${user.email} successfully`
        })
        
    } catch (error) {
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire= undefined;
        await user.save({validateBeforeSave:false});
        return next(new Errorhandler(error.message, 500))
    }
})

//reset password
exports.resetPassword =  catchAsyncErrors(async(req,res,next)=>{

    //creating token hash
    const resetPasswordToken = crypto
                                .createHash("sha256")
                                .update(req.params.token)
                                .digest("hex");

    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire:{ $gt : Date.now() }
    });

    if(!user){
        return next(new Errorhandler("Reset password token is invalid or has been expire", 400));
    } 
    if(req.body.password !== req.body.confirmPassword){
        return next(new Errorhandler("Password does not match", 400));
    }
    const salt = await bcrypt.genSalt(10);
    console.log(salt);
    console.log(req.body.password);
    const secPass = await bcrypt.hash(req.body.password, salt);
    console.log(secPass);
    user.password = secPass;
    console.log(user.password);
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    user.save();
    sendToken(user,201,res);
})

//get user details

exports.getUserDetails =  catchAsyncErrors(async(req,res,next)=>{

    const user = await User.findById(req.user.id);

    res.status(200).json({
        success:true,
        user
    })
})

//update user password

exports.updatePassword =  catchAsyncErrors(async(req,res,next)=>{
    const user = await User.findById(req.user.id).select("+password");
    let passwordCompare = await bcrypt.compare(req.body.oldPassword,user.password);
     if(!passwordCompare){
       return next(new Errorhandler("old password is incorrect", 404))
     }

     if(req.body.newPassword !== req.body.confirmPassword){
        return next(new Errorhandler("password does not match", 404))

     }
     const salt = await bcrypt.genSalt(10);
    
     const secPass = await bcrypt.hash(req.body.newPassword, salt);

     user.password = secPass;
     user.save();
     sendToken(user,201,res);

   
})
//update user profile

exports.updateProfile =  catchAsyncErrors(async(req,res,next)=>{

    const newUserData = {
        name : req.body.name,
        email : req.body.email,

    }

    if (req.body.avatar !== "") {
        const user = await User.findById(req.user.id);
    
        const imageId = user.avatar.public_id;
    
        await cloudinary.v2.uploader.destroy(imageId);
    
        const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
          folder: "avatars",
          width: 150,
          crop: "scale",
        });
    
        newUserData.avatar = {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        };
      }
    

    const user = await User.findByIdAndUpdate(req.user.id, newUserData,{
        new:true,
        runValidators:true,
        useFindAndUpdate:false
    })
    res.status(200).json({
        success:true
    })
})

//Get all users (admin)

exports.getAllUsers =  catchAsyncErrors(async(req,res,next)=>{

    const users = await User.find();
console.log(users);
    res.status(200).json({
        success:true,
        users
    })

})

//Get single user (admin)

exports.getSingleUser =  catchAsyncErrors(async(req,res,next)=>{

    const user = await User.findById(req.params.id);

    if(!user){
        return next(new Errorhandler(`User of this ${req.params.id} id is not exists`, 400));
    } 

    res.status(200).json({
        success:true,
        user
    })

})

//update user role -- Admin

exports.updateUserRole =  catchAsyncErrors(async(req,res,next)=>{

    const newUserData = {
        name : req.body.name,
        email : req.body.email,
        role : req.body.role

    }

    const user = await User.findByIdAndUpdate(req.params.id, newUserData,{
        new:true,
        runValidators:true,
        useFindAndUpdate:false
    })
    res.status(200).json({
        success:true
    })
})


//delete user-- Admin

exports.deleteUser =  catchAsyncErrors(async(req,res,next)=>{

    const user = await User.findById(req.params.id);
        if(!user){
            return next(new Errorhandler(`User of this ${req.params.id} id is not exists`, 400));
        } 
        const imageId = user.avatar.public_id;

  await cloudinary.v2.uploader.destroy(imageId);
     await   user.remove();

    res.status(200).json({
        success:true,
        message : "user deleted"
    })
})

