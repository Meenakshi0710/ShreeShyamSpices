const Order = require("../models/Order");
const Product = require("../models/Products");
const Errorhandler = require("../utils/errorHandlers");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

//new Order
exports.newOrder = catchAsyncErrors(async(req,res,next)=>{
    const {
        shippingInfo,
        orderItems,
        paymentInfo,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice
} = req.body
    const order = await Order.create({
        shippingInfo,
        orderItems,
        paymentInfo,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        paidAt : Date.now(),
        user:req.user._id
    });

    res.status(200).json({
        success:true,
        order
    })

})

//Get Single Order 
exports.getSingleOrder = catchAsyncErrors(async(req,res,next)=>{
    const order = await Order.findById(req.params.id).populate("user","name email");

    if(!order){
        return next(new Errorhandler("Order not found",404));
    }

    res.status(200).json({
        success:true,
        order    
})
})

//Get loggedin user Orders
exports.myOrders = catchAsyncErrors(async(req,res,next)=>{
    const orders = await Order.find({user:req.user._id});

    res.status(200).json({
        success:true,
        orders    
})
})

//Get All Orders -- Admin
exports.getAllOrders = catchAsyncErrors(async(req,res,next)=>{
    const orders = await Order.find();
    if(!orders){
        return next(new Errorhandler("Orders not found",404));
    }
    let totalAmount = 0;
    orders.forEach(order => {
        totalAmount += order.totalPrice;
    });

    res.status(200).json({
        success:true,
        totalAmount,
        orders    
})
})


//update Order status -- Admin
exports.updateOrder = catchAsyncErrors(async(req,res,next)=>{
    const order = await Order.findById(req.params.id);

    if(!order){
        return next(new Errorhandler("Order not found",404));
    }
    if(order.orderStatus === "Delivered"){
        return next(new Errorhandler("order delivered",400));
    }
    if(req.body.status === "Shipped"){
    order.orderItems.forEach(async (o)=>{
        await updateStock(o.product,o.quantity);
    })
    }
    order.orderStatus = req.body.status;
    if(req.body.status === "Delivered"){
        order.deliveredAt=Date.now();
    }
    await order.save({validateBeforeSave:false})
    res.status(200).json({
        success:true,
          
})
})

async function updateStock(id,quantity){
    const product = await Product.findById(id);
    product.stock -= quantity;
    await product.save({validateBeforeSave:false})
}

//Delete Order -- Admin
exports.deleteOrder = catchAsyncErrors(async(req,res,next)=>{
    const order = await Order.findById(req.params.id);

    if(!order){
        return next(new Errorhandler("Order not found",404));
    }
    await order.remove();
    res.status(200).json({
        success:true,
        messege:"Order deleted"
})
})