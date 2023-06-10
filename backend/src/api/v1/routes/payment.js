const router = require('express').Router();
const { processPayment, paymentApi } = require('../payment/controller')

router.post('/process',  processPayment);
router.get('/api',  paymentApi);
module.exports = router;