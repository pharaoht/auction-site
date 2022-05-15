const express = require('express');
const productController = require('../../controllers/product/product_controller');
const router = express.Router();

router.get('/starting-soon/', productController.getProductsSoonToStart);

module.exports = router;