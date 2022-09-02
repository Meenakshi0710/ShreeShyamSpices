var express = require('express');
const { registerUser, loginUser, logoutUser, forgotPassword, resetPassword, getUserDetails, updatePassword, updateProfile, getAllUsers, getSingleUser, deleteUser, updateUserRole } = require('../controllers/userController');
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');
var router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);
router.route("/logout").get(logoutUser);
router.route("/me").get( isAuthenticatedUser, getUserDetails);
router.route("/password/update").put( isAuthenticatedUser, updatePassword);
router.route("/me/update").put( isAuthenticatedUser, updateProfile);
router.route("/admin/users").get( isAuthenticatedUser, authorizeRoles("admin"), getAllUsers);
router.route("/admin/:id").get( isAuthenticatedUser, authorizeRoles("admin"), getSingleUser);
router.route("/admin/:id").put( isAuthenticatedUser, authorizeRoles("admin"), updateUserRole);
router.route("/admin/:id").delete( isAuthenticatedUser, authorizeRoles("admin"), deleteUser);




module.exports = router