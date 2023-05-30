const router = require('express').Router();
const { order, emailOrder} = require('../order/controller');
const { isAuthenticatedUser } = require("../middlewares/auth")

router.post('/', order);
router.get('/:email', emailOrder);
module.exports = router;