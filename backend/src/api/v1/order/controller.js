const {Order} = require('../models');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
exports.newOrder = catchAsyncErrors(async (req, res, next) => {
    
    const { productInfo, shippingInfo, paymentInfo } = req.body;
    const result = await Order.create({
        productInfo, shippingInfo, paymentInfo
    });
    await result.save();
    res.status(201).json({
        success: true,
        statusCode : 200,
        message: "Order successful",
        result
    })
});

exports.emailBaseOrder = catchAsyncErrors(async (req, res, next) => {
    const email = req.query.email;
    const result = await Order.find({email: email});
    res.status(201).json({
        success: true,
        statusCode : 200,
        message: "Order get successful",
        result
    })
});