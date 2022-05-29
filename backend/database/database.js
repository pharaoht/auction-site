require('dotenv').config();
const mysql = require('mysql2');

const host = process.env.HOST;
const user = process.env.USER;
const database = process.env.DATABASE_NAME;
const password = process.env.DATABASE_PASSWORD;

const pool = mysql.createPool({
    host:host,
    user:user,
    database:database,
    password:password,
});

module.exports = pool.promise();