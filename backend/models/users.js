const db = require('../database/database');

module.exports = class User{

    constructor(id, first_name, last_name, email, password, isActive, isAdmin){
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.password = password;
        this.isActive = false;
        this.isAdmin = false;
    }

    createNewUser(){
        return db.execute('INSERT INTO users (id, first_name, last_name, email, password, isActive, isAdmin) VALUES (UUID(),?,?,?,?,?,?)'
        ,[this.first_name,this.last_name,this.email,this.password,this.isActive,this.isAdmin])
    };

    //static is a keyword to use this method without creating a new class
    static fetchAllUsers(){
        db.execute('SELECT id, first_name, last_name, isAdmin FROM users')
        .then(([rows, metaData])=> rows)
        .catch(err=>console.log(err));
    };

    static deleteUserById(id){
        return db.execute('DELETE FROM users WHERE user.id = ?', [id])
    };

    static findUserById(){
    
    }

    static findUserById(id){
        return db.execute('SELECT first_name, last_name, email FROM users WHERE user.id = ?', [id])
    };
};