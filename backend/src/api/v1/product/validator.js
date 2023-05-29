const mongoose = require('mongoose');
const { check, param } = require('express-validator');


exports.addValidator = [
  check('name').trim().notEmpty().withMessage('Name is required'),
  check('desc').trim().notEmpty().withMessage('Description is required'),
  check('price')
  .trim()
  .notEmpty()
  .withMessage('Price is required')
  .custom(async (price) => {
      if (price) {
          if (isNaN(price)) {
              throw "Price is must Numeric Value"
            }
        }
    }),
    check('productPictures').trim().notEmpty().withMessage('Product Picture is required'),
    check('category').trim().notEmpty().withMessage('Category required'),
];

exports.updateValidator = [
  check('price')
    .trim()
    .notEmpty()
    .withMessage('Price is required')
    .custom(async (price) => {
      if (price) {
        if (isNaN(price)) {
          throw "Price is must Numeric Value"
        }
      }
    })
];

exports.id = [
  param('id').custom(async (id) => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw 'No Product data found by the id';
    }
  }),
];