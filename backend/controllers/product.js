const Product = require('../models/product');

exports.getProductsSoonToStart = (req, res, next) => {

    const now = Date.now();
    //get products that are soon to start
    //order by auction start time
};

exports.getAllProductsByUserId = (req, res, next) => {
    //get all products from a user
}