const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.processPayment = catchAsyncErrors(async (req, res, next) => {
    const paymentIntent = await stripe.paymentIntents.create({
        amount: req.body.amount,
        currency: 'usd',

        metadata: { integration_check: 'accept_a_payment' }
    });
    console.log(paymentIntent.client_secret);

    res.status(200).json({
        success: true,
        message:"done",
        client_secret: paymentIntent.client_secret
    })
})