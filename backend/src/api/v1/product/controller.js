const { addProduct, Products, Product } = require("./service")
  
exports.addProduct = async (req, res) => {
  const { status, code, message } = await addProduct({
    body : req.body, 
    ...req.body
  });
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