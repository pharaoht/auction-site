const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const session = require('express-session');

const adminAccountRoutes = require('./routes/admin/admin_routes');
const userAccountRoutes = require('./routes/user/user');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({secret:'my secret', resave:false, saveUninitialized:false}));

app.use('/admin-accounts', adminAccountRoutes);
app.use('/user-accounts', userAccountRoutes);

// app.use('/products', productRoutes);

app.listen(4000);