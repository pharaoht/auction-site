const express = require('express');
const authMiddleWare = require('../../middleware/auth-middleware');
const adminController = require('../../controllers/admin/admin_accounts');
const router = express.Router();

router.post('/create-user/', adminController.createNewAdminUser);

router.get('/get-admin-users/', authMiddleWare.isAdmin, adminController.getAllAdminUsers);

module.exports = router;

//router.get('/:productId')