const express = require('express');
const router = express.Router();
const authMiddleWare = require('../../middleware/auth-middleware');
const productController = require('../../controllers/product/product_controller');
const multerMiddleWare = require('../../middleware/file-middleware');

router.get('/starting-soon/', productController.getProductsSoonToStart);

router.get('/get-all-products/', productController.getAllProducts);

router.get('/find-products/:userid/', productController.getAllProductsByUserId);

router.post('/create-new-product/', productController.createNewProduct);

router.delete('/delete/:productid/', authMiddleWare.isAuthenticated, productController.deleteProduct);

router.put('/edit/:productid/', authMiddleWare.isAuthenticated, productController.editProduct);

router.put('/increment-bid/:productid/', authMiddleWare.isAuthenticated, productController.incrementBid);

module.exports = router;