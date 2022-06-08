const db = require('../database/database');

module.exports = class Product{

    constructor(id, product_name, owner, photo1, photo2, photo3, upload_date, bid_price, desc, auction_start, isSold, total_bids){

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
        this.total_bids = total_bids;
        this.isSold = isSold;

    };

    async createNewProduct(){
        return await db.execute('INSERT INTO product (id, product_name, ownerID, photo1, photo2, photo3, upload_date, bid_price, product_desc, auction_start, isSold, total_bids) VALUES (UUID(),?,?,?,?,?,NOW(),?,?,?,?,?)',
        [this.product_name, this.owner, this.photo1, this.photo2, this.photo3, this.bid_price, this.desc, this.auction_start, this.isSold, total_bids])
    };

    static findProductById(id){
        return db.execute('SELECT * FROM product WHERE product.id = ?', [id])
    };

    static deleteProductById(id){
        return db.execute('DELETE FROM product WHERE product.id = ?', [id])
    };

    static incrementBidPrce(id, amount, bids){
        return db.execute('UPDATE product SET bid_price = ? total_bids = ? WHERE id = ?', [amount, bids, id,])
    };

    static fetchAllProducts(){
        return db.execute('SELECT * FROM product JOIN users ON product.ownerID=users.id')
    };

    static fetchAllProductsByUserId(userId){
        return db.execute('SELECT * FROM product WHERE ownerID = ?', [userId])
    };

    static fetchProductsByDate(startDate, endDate){
        return db.execute('SELECT * FROM product WHERE auction_start > ? AND auction_start < ? ', [startDate, endDate])
    };

    static updateProductById(id){
        return db.execute('SELECT * FROM product WHERE product.id', [id])
    };

    static productIsSold(id){
        return db.execute('UPDATE product SET isSold = 1 WHERE id = ?', [id])
    };
}