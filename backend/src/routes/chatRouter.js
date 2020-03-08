const express = require('express');

const { authController, chatController } = require('../controllers');

const router = express.Router();

router.get('/getMatchUsers', authController.isAuth, chatController.getMatchUsers);

module.exports = router;
