const mysql = require('mysql2');

const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    database:'auction_schema',
    password:'',
});

module.exports = pool.promise();