const { Schema, model } = require('mongoose');

const orderSchema = Schema({
    productInfo: [],
    shippingInfo: {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        address: {
            type: String
        }
    },
    paymentInfo: {
        id: {
            type: String,
            required: true
        },
        status: {
            type: String,
            required: true
        }
    },
    userName:{
        type : String
    },
    userEmail:{
        type : String
    },
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
        default: 'Processing'
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})
module.exports.Order = model('Order', orderSchema);