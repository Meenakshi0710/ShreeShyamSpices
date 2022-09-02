const connectToMongo = require('./db');
const express = require('express')
const cookieParser = require("cookie-parser");
const cloudinary = require('cloudinary')
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const path = require("path");



// HAndling uncaught Exceptions
process.on("uncaughtException",(err)=>{
  console.log(`ERROR : ${err.message}`);
  console.log('Shutting down the server due to uncaught exception');
  process.exit(1);
})
var cors = require('cors')
connectToMongo();

cloudinary.config({
  cloud_name:process.env.CLOUDINARY_NAME,
  api_key:process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

//config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({path:"config/config.env"})
}

const app = express()
const errorMiddleware = require("./middleware/error");
app.use(express.json());
app.use(cors())
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());



//Availaible routes

app.use('/api', require('./routes/enquiry'))
app.use('/api', require('./routes/productRoute'))
app.use('/api/user', require('./routes/userRoute'))
app.use('/api', require('./routes/orderRoute'))
app.use('/api', require('./routes/paymentRoute'))

app.use(express.static(path.join(__dirname, "./frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./frontend/build/index.html"));
});
app.use(errorMiddleware);

const server = app.listen(process.env.PORT, () => {
  console.log(`ssspl app server listening on port ${process.env.PORT}`)
})
//Unhandeled Promise rejection
process.on("unhandledRejection", err =>{
  console.log(`Error : ${err.message}`)
  console.log('Shutting down the server due to unhandled promise rejection')
  server.close(()=>{
    process.exit(1)
  })
})