const {
  getProductsService, 
  getProductService, 
  searchProductService,
  deleteProductService,
  updateProductService,
  addProductService 
} = require("./service")

exports.addProduct = async (req, res) => {
  const { status, code, message } = await addProductService({...req.query, ...req.body});
  res.status(code).json({ code, status, message });
};

exports.updateProduct = async (req, res) => {
  const { status, code, message } = await updateProductService({...req.query, ...req.body});
  res.status(code).json({ code, status, message });
};

exports.deleteProduct = async (req, res)=> {
  const { status, code, message } = await deleteProductService({...req.query});
  res.status(code).json({ code, status, message });
};

exports.getProducts = async (req, res ) => {
  const { status, code, message, products } = await getProductsService({...req.params});
  res.status(code).json({ code, status, message, products });
};

exports.getProduct = async (req, res ) => {
  const { status, code, message, product } = await getProductService({...req.params});
  res.status(code).json({ code, status, message, product });
};

exports.searchProduct = async (req, res) => {
  const { status, code, message, products } = await searchProductService({...req.query});
  res.status(code).json({ code, status, message, products });
};