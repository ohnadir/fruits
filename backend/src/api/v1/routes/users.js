const router = require('express').Router();
const { register, login, update, loadUser, users, user } = require("../user/controller")
const { registerValidate } = require("../user/validator")
const validationResult = require('../validators');
const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth')

router.post('/signup', registerValidate, validationResult,  register);
router.patch('/update/:id', isAuthenticatedUser, update );
router.post('/login', login);
router.get('/me/:token', loadUser);
router.get('/', authorizeRoles, users);
router.get('/:id', authorizeRoles, user);

module.exports = router