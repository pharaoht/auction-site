const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

//routes
const adminAccountRoutes = require('./routes/admin/admin_routes');
const userAccountRoutes = require('./routes/user/user_routes');
const authRoutes = require('./routes/auth/auth_routes');
const productRoutes = require('./routes/products/product_routes');

//custom middleware
const authMiddleWare = require('./middleware/auth-middleware');
const multer = require('multer');

const fileStorage = multer.diskStorage({

      destination: (req, file, callback) => {
        console.log(req)
          callback(null, 'images');
      },
      filename: (req, file, callback) => {
          const date = new Date().toISOString().replace(/:/g, '-');
          callback(null, date + 'xx' + file.originalname);
      }
  })


function fileFilter(req, file, callback){
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg'){
        callback(null, true)
    }
    else {
        callback(null, false)
    }
};




app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(multer({storage:multer.diskStorage({

      destination: (req, file, callback) => {
        console.log(req)
          callback(null, 'images');
      },
      filename: (req, file, callback) => {
          const date = new Date().toISOString().replace(/:/g, '-');
          callback(null, date + 'xx' + file.originalname);
      }
  })}).single('image'))
app.use(cors())
app.use('/images', express.static(path.join(__dirname, 'images')))
app.use(authMiddleWare.corsMiddleWare);
app.use('/auth', authRoutes);
app.use('/products', productRoutes);
app.use('/user-accounts', userAccountRoutes);
app.use('/admin-accounts', adminAccountRoutes);

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.status || 500;
  const message = error.message || 'Something went wrong.';
  res.status(status).json({ message: message });
});

app.listen(4000);