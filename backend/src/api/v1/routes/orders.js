const router = require('express').Router();
const { order, emailOrder, orderDetails } = require('../order/controller');
const { isAuthenticatedUser } = require("../middlewares/auth")

router.post('/', order);
router.get('/:email', emailOrder);
router.get('/order-details/:id', orderDetails);
module.exports = router;