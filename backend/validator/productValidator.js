module.exports = class ProductValidator{

    static verifyProductName(productName)
    {
        const errors = {};

        if(productName === '')
        {
            errors.emptyProductName = 'You must provide a product name.'
            return errors;
        }
    };

    static verifyProductDesc(productDesc){
        const errors = {};
    };

    static verifyOwner(productOwner){
        const errors = {};
        //check if user Id exist
    };

    static verifyImage(productImages){
        const errors = {};
        //check if image upload is correct file
    };

    static verifyBidPrice(productPrice){
        const errors = {};
    };

    static verifyAuctionDate(productDate){
        const errors = {};
    };

    static verifyProduct(productData){
        const errors = {};
    };
}