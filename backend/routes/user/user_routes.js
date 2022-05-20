const express = require('express');
const authMiddleWare = require('../../middleware/auth-middleware');
const userController = require('../../controllers/user/user_accounts');
const router = express.Router();

router.post('/create-user/', userController.createNewUser);

router.delete('/delete-user/:id/', userController.deleteAccount);

router.put('/update-user/:id/', userController.updateUserInfo);

router.get('/get-user/:id/', userController.findUserById);

module.exports = router;