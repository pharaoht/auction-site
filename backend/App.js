const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//session dependencies
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const options = { host: 'localhost', port: 3306, user: 'root', password: '779088nV!', database: 'auction_schema'};
const sessionStore = new MySQLStore(options);

//csrf dependencies
const csrf = require('csurf');
const csrfProtection = csrf();

//routes
const adminAccountRoutes = require('./routes/admin/admin_routes');
const userAccountRoutes = require('./routes/user/user_routes');
const authRoutes = require('./routes/auth/auth_routes');
const productRoutes = require('./routes/products/product_routes');

const authMiddleWare = require('./middleware/auth-middleware');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ key: 'session_cookie_name', secret: 'session_cookie_secret', store: sessionStore, resave: false, saveUninitialized: false}));
// app.use(csrfProtection);
// app.use(authMiddleWare.csrfMiddleWare);
app.use('/admin-accounts', adminAccountRoutes);
app.use('/user-accounts', userAccountRoutes);
app.use('/auth', authRoutes);
app.use('/products', productRoutes);

app.listen(4000);