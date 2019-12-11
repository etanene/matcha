const express = require('express');

const { userController } = require('../controllers');

const router = express.Router();

router.get('/get', userController.get);

router.post('/resetpw', userController.resetpw);

router.post('/changepw', userController.changepw);

module.exports = router;
