const {
  addProduct,
  Products, 
  Product, 
  SearchProduct,
  FilterProduct,
  CategoryProduct,
  RatingProduct,
  PriceProduct
} = require("./service")
  
exports.addProduct = async (req, res) => {
  const { status, code, message } = await addProduct({ body : req.body, ...req.body });
  res.status(code).json({ code, status, message });
};
exports.products = async (req, res ) => {
  const { status, code, message, products } = await Products();
  res.status(code).json({ code, status, message, products });
};
  
exports.product = async (req, res ) => {
  const { status, code, message, product } = await Product({ id:req.params.id});
  res.status(code).json({ code, status, message, product });
};

exports.searchProduct = async (req, res ) => {
  const { status, code, message, products } = await SearchProduct({ ...req.query});
  res.status(code).json({ code, status, message, products });
};
exports.filterProduct = async (req, res ) => {
  const { status, code, message, products } = await FilterProduct({ ...req.query});
  res.status(code).json({ code, status, message, products });
};
exports.categoryProduct = async (req, res ) => {
  const { status, code, message, products } = await CategoryProduct({ ...req.query});
  res.status(code).json({ code, status, message, products });
};
exports.ratingProduct = async (req, res ) => {
  const { status, code, message, products } = await RatingProduct({ ...req.query});
  res.status(code).json({ code, status, message, products });
};
exports.priceProduct = async (req, res ) => {
  const { status, code, message, products } = await PriceProduct({ ...req.query});
  res.status(code).json({ code, status, message, products });
};