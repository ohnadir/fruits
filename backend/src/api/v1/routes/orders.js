const router = require('express').Router();
const {
  newOrder,
  emailBaseOrder
} = require('../order/controller');
router.post('/', newOrder);
router.get('/:email', emailBaseOrder);
module.exports = router;