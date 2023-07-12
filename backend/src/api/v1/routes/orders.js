const router = require('express').Router();
const { order, emailOrder, orderDetails, orders } = require('../order/controller');
const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth")

router.post('/', isAuthenticatedUser, order);
router.get('/:email', isAuthenticatedUser, emailOrder);
router.get('/order-details/:id', isAuthenticatedUser, orderDetails);
router.get('/', authorizeRoles, orders);
module.exports = router;