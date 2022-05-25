const express = require('express');
const router = express.Router();
const authMiddleWare = require('../../middleware/auth-middleware');
const productController = require('../../controllers/product/product_controller');
const multerMiddleWare = require('../../middleware/file-middleware');

router.get('/starting-soon/', productController.getProductsSoonToStart);

router.get('/product-by/:userid/', productController.getAllProductsByUserId);

router.post('/create-new-product/', authMiddleWare.isAuthenticated, multerMiddleWare.sendFile, productController.createNewProduct);

router.delete('/delete/:productid/', productController.deleteProduct);

router.put('/edit/:productid/', productController.editProduct);

//check if user is authenticated
router.put('/increment-bid/:productid/', authMiddleWare.isAuthenticated, productController.incrementBid);

module.exports = router;