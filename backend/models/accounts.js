const db = require('../database/database');

module.exports = class User{

    constructor(id, first_name, last_name, email, password, isActive, isAdmin){
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.password = password;
        this.isActive = isActive;
        this.isAdmin = isAdmin;
    }

    createNewUser(){
        return db.execute('INSERT INTO users (id, first_name, last_name, email, password, isActive, isAdmin) VALUES (UUID(),?,?,?,?,?,?)'
        ,[this.first_name,this.last_name,this.email,this.password,this.isActive,this.isAdmin])
    };

    static deleteUserById(id){
        return db.execute('DELETE FROM users WHERE user.id = ?', [id])
    };

    static findUserById(id){
        return db.execute('SELECT * FROM users WHERE user.id = ?', [id])
    };

    static updateUserById(userData){
        return db.execute('UPDATE users SET first_name = ?, last_name = ?, password = ? WHERE user.id = ?', [userData.first_name, userData.last_name, userData.password, userData.id])
    };

    static getAdminUsers(){
        return db.execute('SELECT * FROM users WHERE isAdmin = TRUE')
    };

    static findUserByEmail(email){
        return db.execute('SELECT * FROM users WHERE email = ?', [email]);
    }
};