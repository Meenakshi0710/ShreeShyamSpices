const mongoose = require('mongoose');
const { Schema } = mongoose;
const validator = require('validator');


const enquirySchema = new Schema({
    name : {
        type : String,
        required : [true,"Please enter your name"]
    },
    email : {
        type : String,
        required : [true, "Please enter your email"],
        unique:true,
        validate:[validator.isEmail, "Please enter a valid email"]
    },
    mobile : { 
        type : Number,
        required: true
    },
    subject : {
        type : String,
        required : true
    },
    message : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        default : Date.now
    }
  });

  module.exports = mongoose.model("enquiry",enquirySchema);