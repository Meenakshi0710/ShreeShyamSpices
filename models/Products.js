const mongoose = require('mongoose');
const { Schema } = mongoose;


const productSchema = new Schema({
    name : {
        type : String,
        required : [true,"Please enter product name"]
    },
    description : {
        type : String,
        required : [true,"Please enter product description"]
       
    },
    price : { 
        type : Number,
        required: [true,"Please enter product price"],
        maxlength : [8,"Price cannot exceed 8 characters"]
    },
    ratings : {
        type : Number,
        default : 0
    },
    category : {
        type : String,
        required : true
    },
    images : [{
        public_id : {
            type : String,
            required : true
        },
        url:{
            type : String,
            required : true
        }
    }],
    stock : {
        type : Number,
        required : [true,"Please enter correct stock"]
    },
    numofreviews : {
        type : Number,
        default : 0
    },
    reviews : [{
        user : {
            type : mongoose.Schema.ObjectId,
            ref : "user",
            required : true
        },
        name : {
            type : String,
            required : true
        },
        rating : {
            type : Number,
            required : true
        },
        comment : {
            type : String,
            required : true
        }

    }],
    user : {
        type : mongoose.Schema.ObjectId,
        ref : "user",
        required : true
    },
    createdat : {
        type : Date,
        default : Date.now
    }
  });

  module.exports = mongoose.model("product",productSchema);