const express = require('express');
const router = express.Router();
const { getAllProducts, createProduct, UpdateProduct, deleteProduct, getProductDetails} = require('../controller/projectController');
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');



router.route("/products").get(getAllProducts);

router.route("/admin/products/new").post(isAuthenticatedUser,authorizeRoles("admin"),createProduct);

router.route("/admin/product/:id")
.put(isAuthenticatedUser,authorizeRoles("admin"),UpdateProduct)
.delete(isAuthenticatedUser,authorizeRoles("admin"),deleteProduct)

router.route("/product/:id").get(getProductDetails);



console.log("productrouter")

module.exports = router;