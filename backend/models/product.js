const db = require('../database/database');

module.exports = class Product{

    constructor(id, product_name, owner, photo1, photo2, photo3, upload_date, bid_price, desc, auction_start, isSold){

        this.id = id;
        this.desc = desc;
        this.owner = owner;
        this.photo1 = photo1;
        this.photo2 =  photo2;
        this.photo3 = photo3;
        this.bid_price = bid_price;
        this.upload_date = upload_date;
        this.product_name = product_name;
        this.auction_start = auction_start;
        this.isSold = isSold;

    };

    async createNewProduct(){
        return await db.execute('INSERT INTO product (id, product_name, ownerID, photo1, photo2, photo3, upload_date, bid_price, product_desc, auction_start, isSold) VALUES (UUID(),?,?,?,?,?,NOW(),?,?,?,?)',
        [this.product_name, this.owner, this.photo1, this.photo2, this.photo3, this.bid_price, this.desc, this.auction_start, this.isSold])
    };

    static findProductById(id){
        return db.execute('SELECT * FROM product WHERE product.id = ?', [id])
    };

    static deleteProductById(id){
        return db.execute('DELETE FROM product WHERE product.id = ?', [id])
    };

    static incrementBidPrce(id, amount){
        return db.execute('UPDATE product SET bid_price = ? WHERE id = ?', [amount, id])
    };

    static fetchAllProducts(){
        return db.execute('SELECT * FROM product')
    };

    static fetchAllProductsByUserId(userId){
        return db.execute('SELECT * FROM product WHERE ownerID = ?', [userId])
    };

    static fetchProductsByDate(){

    };

    static updateProductById(id){
        return db.execute('SELECT * FROM product WHERE product.id', [id])
    };
}