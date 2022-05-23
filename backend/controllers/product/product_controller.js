const Product = require('../../models/product');
const Util = require('../../util/util');
const ProductValidator = require('../../validator/productValidator');

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

    const date = new Date().now();
   
    const productData = {
        ownerId: '39d28b72-d479-11ec-b833-c49ded9ac9db',
        product_desc: req.body.desc,
        photo1: req.file.path,
        photo2: null,
        photo3: null,
        bid_price: 0.00,
        upload_date: date,
        product_name: req.body.product_name,
        auction_start:req.body.auction_start,
        isSold:false,
    }

    const productValidation = ProductValidator.verifyProduct(productData);

    if(Object.keys(productValidation).length > 0){
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
};

exports.getAllProductsByUserId = (req, res, next) => {

    const userId = req.body.id;

    Product.fetchAllProductsByUserId(userId)
    .then(([rows, metaData]) => {
        res.status(200);
        res.json({results: rows});
    })
    .catch(err => {
        console.log(err);
        return Util.errorCatcher('This user can not be found. Please try again.', 401, err);
    });
};

exports.incrementBid = (req, res, next) => {

};

exports.deleteProduct = (req, res, next) => {

    const productId = req.body.id;

    Product.deleteProductById(productId)
    .then(response => {
        res.status(200);
        res.json({result:'Your product has been successfully deleted!'})
    })
    .catch(err => {
        return Util.errorCatcher('This product no longer exists, that means it has already been deleted.', 401, err)
    });
};

exports.editProduct = (req, res, next) => {

    const productData = {
        product_name: req.body.product_name,
        desc: req.body.desc,
        owner: req.body.userId,
        photo1: req.body.photo1,
        photo2: req.body.photo2,
        photo3: req.body.photo3, 

    }

    Product.findProductById(productId)
    .then(([rows, metaData]) => {
        console.log(rows);

        if(rows[0].ownerId != userId){
            return Util.errorCatcher('You must be the owner of this product to Update it.', 401, err);
        };

        Product.updateProductById(productId)
        .then(res => {

        })
        .catch(err => {
            throw new Error('something went wrong')
        })

        //check if userid is the same as the product
    })
    .catch(err => {
        return Util.errorCatcher('This product no longer exists, that means it has already been deleted.', 401, err)
    });

};