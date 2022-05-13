const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const adminAccountRoutes = require('./routes/admin/admin');
const userAccountRoutes = require('./routes/user/user');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/admin-accounts', adminAccountRoutes);
app.use('/user-accounts', userAccountRoutes);

// app.use('/products', productRoutes);

app.listen(4000);