var express = require('express');
var router = express.Router();
const {addProduct, getAllProducts, updateProduct, deleteProduct, getProductDetails, createProductReview, getProductReviews, deleteReview, getAdminProducts} = require("../controllers/productControllers");
const {isAuthenticatedUser,authorizeRoles} = require('../middleware/auth');

router.route("/admin/product/new").post( isAuthenticatedUser, authorizeRoles("admin"), addProduct);
router.route("/products").get(getAllProducts);
router.route("/admin/products").get(isAuthenticatedUser, authorizeRoles("admin"), getAdminProducts);
router.route("/product/reviews").get(getProductReviews).delete(isAuthenticatedUser, deleteReview);
router.route("/admin/product/:id").put( isAuthenticatedUser, authorizeRoles("admin"), updateProduct);
router.route("/admin/product/:id").delete( isAuthenticatedUser, authorizeRoles("admin"), deleteProduct);
router.route("/product/:id").get(getProductDetails);
router.route("/product/review").put(isAuthenticatedUser, createProductReview);











module.exports = router