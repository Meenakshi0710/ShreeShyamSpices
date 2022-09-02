var express = require('express');
const { addEnquiry } = require('../controllers/enquiryController');
var router = express.Router();

router.route("/enquiry/submit").post( addEnquiry );
  module.exports = router
