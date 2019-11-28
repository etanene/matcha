const express = require('express');

const { authController } = require('../controllers');

const router = express.Router();

router.get('/login', (req, res) => res.send('login'));

router.post('/signup', authController.signup);

router.get('/logout', (req, res) => res.send('logout'));

module.exports = router;
