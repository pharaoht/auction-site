const express = require('express');
const productController = require('../../controllers/product/product_controller');
const router = express.Router();

router.get('/starting-soon/', productController.getProductsSoonToStart);

router.post('/create-new-product/', productController.createNewProduct);

module.exports = router;