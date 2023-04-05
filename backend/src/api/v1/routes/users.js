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

router.post('/signup',  userRegister);
router.post('/login', userLogin);
router.patch('/:id', updateUser);
router.delete('/:id',  deleteUser);
router.get('/', getUsers);
router.get('/logout', logoutUser);
router.get('/:id', getSingleUser);
module.exports = router;