const { Product } = require('../models');
const ErrorHandler = require('../utils/ErrorHandler');
const APIFeatures = require('../utils/APIFeatures');
const catchAsyncErrors = require('../middleware/catchAsyncErrors')

exports.addProduct = catchAsyncErrors(async (req, res, next) => {
  const { name, price, desc, productPictures, category}= req.body;

  const isNameExist = await Product.findOne({ name });
  if (isNameExist) {
    return next(new ErrorHandler('Name already taken', 422))
  }

  const newProduct = new Product({
    name,
    price,
    desc,
    productPictures,
    category
  });
  await newProduct.save();
  res.status(200).json({
    status: true,
    statusCode: 200,
    message:"Add Product Successfully"
  })
});

exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
  const id = req.params.id;
  const { name, price, desc } = req.body;

    const product = await Product.findOne({ _id: id }).exec();
    if (!product) {
      return next(new ErrorHandler('No Product Found', 422))
    }

    const isNameExist = await Product.findOne({ name });
    if (
      isNameExist &&
      name === isNameExist.name &&
      String(product._id) !== String(isNameExist._id)
    ) {
      return next(new ErrorHandler('Already taken this name', 422))
    }

    product.name = name ? name : product.name;
    product.price = price ? price : product.price;
    product.desc = desc ? desc : product.desc;

    await product.save();
    res.status(200).json({
      status: true,
      statusCode: 200,
      message:"updated Product Successfully"
    })
    
 
});

exports.deleteProduct = catchAsyncErrors(async (req, res, next)=> {
  const id = req.params.id;
  const product = await Product.findOneAndDelete({ _id: id });
  if (!product) {
    return next(new ErrorHandler('No Product found by this id', 404))
  }
  await product.save();
  res.status(200).json({
    status: true,
    statusCode: 200,
    message:"Delete Product Successfully"
  })
  
});

exports.getProducts = catchAsyncErrors(async (req, res, next) => {
  const products = await Product.find();
  if (!products) {
    return next(new ErrorHandler('No Product found at this moment'))
  }
  res.status(200).json({
    success: true,
    statusCode: 200,
    message:"Fetch Product Successfully",
    products
  })
});

exports.getProduct = catchAsyncErrors(async (req, res, next) => {
  const id = req.params.id;
  const product = await Product.findById({_id:id});

  if (!product) {
    return next(new ErrorHandler('Product not found', 404));
  }
  res.status(200).json({
    success: true,
    product
  })
});
exports.searchProduct = catchAsyncErrors(async (req, res, next) => {

  const apiFeatures = new APIFeatures(Product.find(), req.query)
  .search()
  .filter()

  let products = await apiFeatures.query;
  if (!products) {
    return next(new ErrorHandler('Product not found', 404));
  }

  res.status(200).json({
    status: true,
    statusCode:200,
    products
  })
});