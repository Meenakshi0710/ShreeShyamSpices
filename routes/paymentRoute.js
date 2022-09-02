var express = require('express');
const { processPayment, sendStripeApiKey } = require('../controllers/paymentController');
const { isAuthenticatedUser } = require('../middleware/auth');
var router = express.Router();

router.route("/process/payment").post(isAuthenticatedUser, processPayment);
router.route("/stripeapikey").get(isAuthenticatedUser, sendStripeApiKey);




module.exports = router;