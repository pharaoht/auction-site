const db = require('mysql2');

module.exports = class Product{

    constructor(id, product_name, owner, photo1, photo2, photo3, upload_date, bid_price, desc,auction_start){

        this.id = id;
        this.desc = desc;
        this.owner = owner;
        this.photo1 = photo1;
        this.photo2 = photo2;
        this.photo3 = photo3;
        this.bid_price = bid_price;
        this.upload_date = upload_date;
        this.product_name = product_name;
        this.auction_start = auction_start;
        this.isInStock = true;

    };

    createNewProduct(){
        return db.execute('INSERT INTO products (id, product_name, owner, photo1, photo2, photo3, upload_date, bid_price, desc, auction_start, inStock) VALUES (UUID(),?,?,?,?,?, NOW(),?,?,?,?)'
        ,[this.product_name,this.owner,this.photo1,this.photo2,this.photo3,this.upload_date,this.bid_price,this.desc,this.auction_start, this.isInStock])
    };

    static findProductById(id){
        db.execute('SELECT * FROM products WHERE product.id = ?', [id])
        .then(([rows, metaData]) => rows)
        .catch(err => console.log(err))
    };

    static deleteProductById(id){

    };

    static incrementBidPrce(id){
        //insert statement
    };

    static fetchAllProducts(){

    };

    static fetchAllProductsByUserId(id){

    };

    static fetchProductsByDate(){

    };
}