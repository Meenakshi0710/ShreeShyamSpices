const mongoose = require("mongoose");

//config
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({path:"config/config.env"})
  }


const connectToMongo = () => {
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser:true,
        useUnifiedTopology:true
    
    })
    .then(()=>{
        console.log("Connected to moongoose");
    })
   
};

module.exports = connectToMongo;