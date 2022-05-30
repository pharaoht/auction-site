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
    .catch(error => {
        error.message = 'Something went wrong.';
        error.status = 400;
        throw error;
    });
};

exports.createNewProduct = (req,res,next) => {
   
    const productData = { 
        ownerId: req.body.userID,
        product_desc: req.body.product_desc,
        photo1: req.file.path,
        photo2: null,
        photo3: null,
        bid_price: 0,
        upload_date: null,
        product_name: req.body.product_name,
        auction_start: req.body.auction_start,
        isSold: 0
    };

    const productValidation = ProductValidator.verifyProduct(productData);

    if(Object.keys(productValidation).length > 0){
        res.status(400);
        return res.json({errors:productValidation})
    };

    const product = new Product(
        id = null, 
        product_name = productData.product_name,
        owner = productData.ownerId, 
        photo1 = productData.photo1, 
        photo2 = productData.photo2,
        photo3 = productData.photo3, 
        upload_date = productData.upload_date,
        bid_price = productData.bid_price,
        desc = productData.product_desc,
        auction_start = productData.auction_start, 
        isSold = productData.isSold 
    )

    product.createNewProduct()
    .then(response => {
        res.status(200);
        res.json({result:'Congrats, your product has been added to your account.'})
    })
    .catch(error => {
        error.message = 'Something went wrong.';
        error.status = 400;
        throw error;
    })
};

exports.getAllProductsByUserId = (req, res, next) => {

    const userId = req.params.userid;

    Product.fetchAllProductsByUserId(userId)
    .then(([rows, metaData]) => {
        res.status(200);
        res.json({results: rows});
    })
    .catch(error => {
        error.message = 'Something went wrong, this user does not exist.';
        error.status = 400;
        throw error;
    });
};

exports.incrementBid = async (req, res, next) => {

    const productId = req.params.productid;
    const bidAmount = Number(req.body.bid);
    let currentPrice;

    if(bidAmount > 100){
        return res.json({result:'Your bid amount can not be larger than $100.'})
    } 

    try {

        productInfo = await Product.findProductById(productId);
        currentPrice = productInfo[0][0].bid_price;

    } catch (error) {
        
        error.message = 'Something went wrong, we could not find this product.';
        error.status = 400;
        throw error;
    }

    const sum = Number(currentPrice) + Number(bidAmount);

    Product.incrementBidPrce(productId, sum)
    .then(response => {
        res.status(200)
        res.json({result:'Your bid has been placed.'})
    })
    .catch(error => {

        error.message = 'Something went wrong your bid wasnt placed.';
        error.status = 400;
        throw error;
    });
};

exports.deleteProduct = (req, res, next) => {

    const productId = req.body.id;

    Product.deleteProductById(productId)
    .then(response => {
        res.status(200);
        res.json({result:'Your product has been successfully deleted!'})
    })
    .catch(error => {
        error.message = 'This product no longer exists, that means it has already been deleted.';
        error.status = 400;
        throw error;
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

        if(rows[0].ownerId != userId){
            let error = new Error('You must be the owner of this product to Update it.')
            error.status = 400;
            throw error;
        };

        Product.updateProductById(productId, productData)
        .then(res => {
            //finish
        })
        .catch(error => {
            error.message = 'Something went wrong.';
            error.status = 404;
            throw error;
        })
    })
    .catch(error => {
        error.message = 'This product no longer exists, that means it has already been deleted.'
        error.status = 401;
        throw error;
    });

};

exports.productSold = async (req, res, next) => {

    const productId = req.body.product_id;
    const userId = req.body.user_id;

    try {
        //find product
        const product = await Product.findProductById(productId);
    }
    catch(error){
        
        error.message = 'This product could not be found.';
        error.status = 404;
        throw error;
    }
    //check if user is the same

    //run sql query

    //return response

}