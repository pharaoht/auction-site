const express = require('express');
const adminController = require('../controllers/admin');
const router = express.Router();

router.post('/create-user', adminController.createNewAdminUser);

module.exports = router;

//router.get('/:productId')