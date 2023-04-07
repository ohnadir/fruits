const mongoose = require('mongoose');
const { check, param } = require('express-validator');
const validateEmail = require("../utils/validateEmail")
const validatePhone = require('../utils/validatePhone')
exports.addUser=[
    check('user_name').trim().notEmpty().withMessage('User Name is required'),
    check('email')
    .trim()
    .custom(async (email) => {
      if (email && !validateEmail(email)) {
        throw 'Invalid email';
      }
    }),
]
exports.idValidator = [
    param('id').custom(async (id) => {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        throw 'No Credit data found by the id';
      }
    }),
  ];