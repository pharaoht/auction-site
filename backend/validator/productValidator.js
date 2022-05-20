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
            errors.productDescLength = 'You must provide a description '
            return errors
        }

        if(productDesc.length < 10){
            errors.productDescLength = 'You must provide a description more than 10 characters '
            return errors
        }

        return false;
    };

    static verifyOwner(productOwner){
        const errors = {};
        //check if user Id exist
    };

    static verifyBidPrice(productPrice){
        const errors = {};
    };

    static verifyAuctionDate(productDate){
        const errors = {};
    };

    static verifyProduct(productData){
        const errors = {};

        const productNameValidator = this.verifyProductName(productData.product_name);
        const productDescValidator = this.verifyProductDesc(productData.product_desc);
    };
}