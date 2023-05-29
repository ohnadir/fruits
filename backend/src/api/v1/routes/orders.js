const router = require('express').Router();
const { order, emailOrder} = require('../order/controller');

router.post('/', order);
router.get('/:email', emailOrder);
module.exports = router;