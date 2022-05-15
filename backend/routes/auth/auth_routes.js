const express = require('express');
const authController = require('../../controllers/auth/auth_controller');
const router = express.Router();

router.post('/account-login/', authController.accountLogin);

router.post('/account-logout/', authController.accountLogOut);

module.exports = router;