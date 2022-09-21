const { Schema, model } = require('mongoose');
const mongoose = require("mongoose");


const productSchema = Schema(
  {
    name: { type: String, required: true, trim: true },
    slug: { 
      type: String, 
      required: true, 
      unique: true 
    },
    desc: { type: String, required: true},
    price: { type: String, required: true},
    productPictures: [],
    reviews: [
      {
          user: {
              type: mongoose.Schema.ObjectId,
              ref: 'User',
              required: true
          },
          name: {
              type: String,
              required: true
          },
          rating: {
              type: Number,
              required: true
          },
          comment: {
              type: String,
              required: true
          }
      }
  ],
    quantity: { type: Number },
    offer: { type: Number },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Fruits'},
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'admin' },
    updatedAt: Date,
    isDelete: { type: Boolean, default: false },
    deletedAt: Date
  },
  { timestamps: true }
);

module.exports = model('product', productSchema);
