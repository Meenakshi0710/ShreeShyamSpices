const mongoose = require('mongoose');
const validator = require('validator');
const { Schema } = mongoose;
const crypto = require('crypto');

const userSchema = new Schema({
    
    name : {
        type : String,
        required : [true, "Please enter your name"],
        maxlength :[30,"Name cannot exceed 30 characters"],
        minlength: [4,"name should have more than 4 characters"]
    },
    email : {
        type : String,
        required : [true, "Please enter your email"],
        unique:true,
        validate:[validator.isEmail, "Please enter a valid email"]
    },
    password : {
        type : String,
        required : [true, "Please enter your password"],
        select:false
    },
    createdat : {
        type : Date,
        default : Date.now
    },
    avatar : {
        public_id : {
            type : String,
            required : true
        },
        url:{
            type : String,
            required : true
        }
    },
    role : {
        type : String,
        default : "user"
    },
    
    resetPasswordToken : String,
    resetPasswordExpire :Date,
  });

  //Generating password reset token
  userSchema.methods.getResetPasswordToken = function(){
      
    //generating token
      const resetToken = crypto.randomBytes(20).toString("hex");

      //hashing and adding to userSchema
      this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");
      this.resetPasswordExpire = Date.now() + 15 *60 *1000;

      return resetToken;
  }
  const User =  mongoose.model("user",userSchema);

  
  module.exports = User