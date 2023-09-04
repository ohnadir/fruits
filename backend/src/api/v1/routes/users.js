const router = require('express').Router();
const { register, login, logout, update, loadUser, users, user, changePassword, putUserInfo } = require("../user/controller")
const { registerValidate } = require("../user/validator")
const validationResult = require('../validators');
const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth')

router.post('/signup', registerValidate, validationResult,  register);
router.patch('/update/:id', isAuthenticatedUser, update );
router.post('/login', login);
router.get('/me/:token', loadUser);
router.get('/', authorizeRoles, users);
router.get('/:id', authorizeRoles, user);
router.patch('/change/:id', isAuthenticatedUser,  changePassword);
router.put('/info/:id', isAuthenticatedUser, putUserInfo);
router.get('/logout', isAuthenticatedUser, logout);

module.exports = router