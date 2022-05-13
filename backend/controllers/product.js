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

    // if(!req.session.isLoggedIn){
    //     res.status(400);
    //     return res.json({result:'You must be logged in to create a product'})
    // }
   
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

    if(Object.keys(productValidation) > 0){
        res.status(400);
        return res.json({errors:productValidation})
    };

    const product = new Product(null, productData.product_name, productData.ownerId, productData.photo1, productData.photo2,productData.photo3, productData.upload_date, productData.bid_price,productData.desc,productData.auction_start )

    product.createNewProduct()
    .then(response => {
        res.status(200);
        res.json({result:'Congrats, your product has been added to your account.'})
    })
    .catch(err => {
        console.log(err);
        res.status(400);
        res.json({errors:err});
    })
}

exports.getAllProductsByUserId = (req, res, next) => {
    //get all products from a user
}