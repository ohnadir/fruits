const router = require('express').Router();
const {
  addProduct,
  deleteProduct,
  updateProduct,
  getProduct,
  getProducts,
  searchProduct
} = require('../product/service');


const {
  addProductValidator,
  updateProductValidator,
  idValidator,
} = require('../product/validator');

// const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth')
const validationResult = require('../validators');

router.post('/', addProductValidator, validationResult, addProduct);

router.patch(
  '/:id',
  idValidator,
  updateProductValidator,
  validationResult,
  updateProduct
);

router.delete('/:id', idValidator, validationResult, deleteProduct);

router.get('/', getProducts);

router.get('/search', searchProduct);

router.get('/:id', idValidator, validationResult, getProduct);

module.exports = router;

