const router = require('express').Router();
const {
  userRegister,
  userLogin,
  deleteUser,
  updateUser,
  getUsers,
  getSingleUser,
  logoutUser
} = require('../user/controller');

const {
  addUserValidator,
  updateUserValidator,
  idValidator,
} = require('../user/validator');

const validationResult = require('../validators');
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth')


// authorizeRoles('user');
// authorizeRoles('admin');

router.post('/signup', addUserValidator, validationResult, userRegister);
router.post('/login', userLogin);

router.patch(
  '/:id',
  idValidator,
  updateUserValidator,
  validationResult,
  updateUser
);

router.delete('/:id', idValidator, validationResult, deleteUser);

router.get('/', getUsers);

// router.get('/search', searchUser);
router.get('/logout', logoutUser);

router.get('/:id', idValidator, validationResult, getSingleUser);
module.exports = router;