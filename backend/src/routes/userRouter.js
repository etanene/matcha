const express = require('express');

const { userController } = require('../controllers');

const router = express.Router();

router.get('/get', userController.get);

module.exports = router;
