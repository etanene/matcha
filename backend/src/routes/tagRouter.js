const express = require('express');

const { tagController } = require('../controllers');

const router = express.Router();

router.get('/get', tagController.get);

module.exports = router;
