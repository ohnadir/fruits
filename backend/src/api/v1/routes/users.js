const router = require('express').Router();
const { register, login, loadUser } = require("../user/controller")
const { registerValidate } = require("../user/validator")
const validationResult = require('../validators');

router.post('/signup', registerValidate, validationResult,  register);
router.post('/login', login);
router.get('/me/:token', loadUser);

module.exports = router