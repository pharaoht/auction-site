const express = require('express');
const router = express.Router();
const productController = require('../../controllers/product/product_controller');
const multerMiddleWare = require('../../middleware/file-middleware');

router.get('/starting-soon/', productController.getProductsSoonToStart);

router.post('/create-new-product/', multerMiddleWare.sendFile, productController.createNewProduct);

module.exports = router;