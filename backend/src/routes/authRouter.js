const express = require('express');

const router = express.Router();

router.get('/login', (req, res) => res.send('login'));

router.get('/signup', (req, res) => res.send('signup'));

router.get('/logout', (req, res) => res.send('logout'));

module.exports = router;
