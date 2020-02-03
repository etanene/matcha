const express = require('express');

const { userController, authController } = require('../controllers');

const router = express.Router();

router.get('/get', userController.get);

router.post('/resetpw', userController.resetpw);

router.post('/changepw', userController.changepw);

router.post('/changeUserpw', authController.isAuth, userController.changeUserpw);

module.exports = router;
