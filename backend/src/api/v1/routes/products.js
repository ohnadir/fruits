const router = require('express').Router();
const { 
    addProduct, 
    products, 
    product, 
    searchProduct,
    categoryProduct,
    filterProduct,
    priceProduct,
    ratingProduct
} = require("../product/controller")

const { addValidator, id } = require('../product/validator');
const validationResult = require('../validators');

router.post('/', addValidator, validationResult, addProduct);
router.get('/', products);
router.get('/search', searchProduct);
router.get('/category', categoryProduct);
router.get('/filter', filterProduct);
router.get('/price', priceProduct);
router.get('/rating', ratingProduct);
router.get('/:id', id, validationResult, product);
module.exports = router;