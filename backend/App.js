const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//routes
const adminAccountRoutes = require('./routes/admin/admin_routes');
const userAccountRoutes = require('./routes/user/user_routes');
const authRoutes = require('./routes/auth/auth_routes');
const productRoutes = require('./routes/products/product_routes');

//custom middleware
const authMiddleWare = require('./middleware/auth-middleware');
const fileMiddleWare = require('./middleware/file-middleware');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileMiddleWare.multerMiddleWare);
app.use('/images', express.static(path.join(__dirname, 'images')))
app.use(authMiddleWare.corsMiddleWare);
app.use('/admin-accounts', adminAccountRoutes);
app.use('/user-accounts', userAccountRoutes);
app.use('/auth', authRoutes);
app.use('/products', productRoutes);

app.listen(4000);