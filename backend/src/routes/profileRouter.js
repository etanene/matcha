const express = require('express');

const { profileController, authController } = require('../controllers');

const router = express.Router();

router.post('/save', authController.isAuth, profileController.save);

router.get('/get', authController.isAuth, profileController.get);

router.post('/savePosition', authController.isAuth, profileController.savePosition);

module.exports = router;
