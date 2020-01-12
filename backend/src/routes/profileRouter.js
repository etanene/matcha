const express = require('express');

const { profileController, authController } = require('../controllers');

const router = express.Router();

router.post('/save', authController.isAuth, profileController.save);

module.exports = router;
