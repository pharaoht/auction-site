const express = require('expres');
const authController = require('');
const router = express.Router();

router.get('/user-login', authController.loginUser);

module.exports = router;