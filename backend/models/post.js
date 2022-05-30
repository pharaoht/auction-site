const db = require('../database/database');

module.exports = class Post{

    constructor(){

    };

    createNewPost(){
        return db.execute()
    };

    
}