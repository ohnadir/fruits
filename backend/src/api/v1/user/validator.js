const mongoose = require('mongoose');
const { check, param } = require('express-validator');
const validateEmail = require('../utils/validateEmail');

exports.registerValidate = [
  check('name').trim().notEmpty().withMessage('Name is required'),
  check('password').trim().notEmpty().withMessage('Password is required'),
  check('email')
    .trim()
    .notEmpty().withMessage('Email is required')
    .custom(async (email) => {
      if (email && !validateEmail(email)) {
        throw 'Invalid email';
      }
    })
];

exports.updateValidate = [
  check('email')
    .trim()
    .custom(async (email) => {
      if (email && !validateEmail(email)) {
        throw 'Invalid email';
      }
    })
];

exports.id = [
  param('id').custom(async (id) => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw 'No User found by the id';
    }
  }),
];