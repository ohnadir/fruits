const { Schema, model } = require('mongoose');

const orderSchema = Schema({
    products: [],
    shippingInfo: {},
    shippingAddress: {},
    userName: String,
    userEmail: String,
    deliveryMethod : String,
    paymentMethod : String,
    shippingCost : Number,
    discount : String,
    total : String,
    paidAt: {
        type: Date,
        default: Date.now()
    },
    orderNumber:{
        type: Number,
        default: Math.floor(Math.random() * 1000000)
    },
    deliveryStatus: {
        type: String,
        required: true,
        default: 'Pending'
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})
module.exports = model('Order', orderSchema);