const User = require("../models/accounts");

module.exports = class ProductValidator{

    static verifyProductName(productName)
    {
        const errors = {};

        if(productName === '')
        {
            errors.emptyProductName = 'You must provide a product name.'
            return errors;
        }

        if(productName.length < 3){
            errors.productNameMinLength = 'You must provide a product name with at least 3 characters.'
        }

        if(productName.length > 255){
            errors.productNameMaxLength = 'You must provide a product name less than 255 characters.'
        }

        if(Object.keys(errors) === 0){
            return false;
        }

        return errors;

    };

    static verifyProductDesc(productDesc){

        const errors = {};

        if(productDesc.length === ''){
            errors.productDescLength = 'You must provide a description.'
            return errors
        }

        return false;
    };

    static async verifyOwner(productOwner){

        const errors = {};
        //check if user Id exist
        const userInfo = await User.findUserById();

    };

    static verifyAuctionStartDate(startDate){
        const errors = {};

        const now = Date.now();

        if(startDate <= now){

            errors.dateCheck = 'Your start date can not be in the past. Only Future.'

            return errors;
        };

        return false;
    };

    static verifyProduct(productData){

        const errors = {};

        const productNameValidator = this.verifyProductName(productData.product_name);
        const productDescValidator = this.verifyProductDesc(productData.product_desc);
        const productOwnValidator = this.verifyOwner(productData.ownerId);
        const productStartDateValidator = this.verifyAuctionStartDate(productData.auction_start);

        Object.keys(productNameValidator).length > 0 ? errors.productNameValidations = productNameValidator : null;
        Object.keys(productDescValidator).length > 0 ? errors.productDescValidations = productDescValidator : null;
        Object.keys(productOwnValidator).length > 0 ? errors.productOwnerValidations = productOwnValidator : null;
        Object.keys(productStartDateValidator).length > 0 ? errors.productDateValidations = productStartDateValidator : null;

        return errors;
    };
}