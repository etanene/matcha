const express = require('express');

const { profileController } = require('../controllers');

const router = express.Router();

router.post('/save', profileController.save);

module.exports = router;
