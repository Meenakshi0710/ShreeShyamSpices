const Enquiry = require("../models/Enquiry");
const Errorhandler = require("../utils/errorHandlers");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/aptFeatures");

// Add a enquiry 
exports.addEnquiry = catchAsyncErrors(async(req,res,next)=>{
    console.log(req.body);
    

  

    
    const enquiry = await Enquiry.create(req.body);
    res.status(201).json({
        success:true,
        enquiry
    })
});
