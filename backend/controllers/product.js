const Product = require('../models/product');
const ProductValidator = require('../validator/productValidator');

exports.getProductsSoonToStart = (req, res, next) => {

    const now = Date.now();
    
    Product.fetchProductsByDate(now)
    .then(([rows, metaData]) => {
        res.status(200);
        res.json({result:rows})
    })
    .catch(err => {
        res.status(400);
        res.json({result:err});
    });
};

exports.createNewProduct = (req,res,next) => {
   
    const productData = {
        ownerId: req.body.ownerId,
        desc: req.body.desc,
        photo1: req.body.photo1,
        photo2: req.body.photo2,
        photo3:req.body.photo3,
        bid_price: req.body.bid_price,
        upload_date: req.body.upload_date,
        product_name: req.body.product_name,
        auction_start:req.body.auction_start,
        isInStock:req.body.isInStock,
    }

    const productValidation = ProductValidator.verifyProduct(productData);


}

exports.getAllProductsByUserId = (req, res, next) => {
    //get all products from a user
}