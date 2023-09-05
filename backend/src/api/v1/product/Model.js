const { Schema, model } = require('mongoose');

const productSchema = Schema({
  name: { type: String, required: true, trim: true },
  desc: { type: String, required: true},
  price: { type: Number, required: true},
  rating: { type: Number, required: true},
  productPictures: String,
  reviews: [],
  category: { type: String, required: true}
},
  { timestamps: true }
);
module.exports.Product = model('Product', productSchema);