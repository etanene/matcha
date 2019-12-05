const express = require('express');

const { authController } = require('../controllers');

const router = express.Router();

router.get('/login', authController.loginUser);

router.post('/signup', authController.signupUser);

router.get('/logout', authController.logoutUser);

module.exports = router;
