const router = require('express').Router();
const { addProduct, products, product } = require("../product/controller")

const { addValidator, id } = require('../product/validator');
const validationResult = require('../validators');

router.post('/', addValidator, validationResult, addProduct);
router.get('/', products);
router.get('/:id', id, validationResult, product);
module.exports = router;