const express = require('express');
const adminController = require('../controllers/admin');
const router = express.Router();

router.get('/get-users', adminController.getUsers);

router.get('/test', adminController.testRoute);

router.post('/create-user', adminController.createNewUser);

module.exports = router;

//router.get('/:productId')