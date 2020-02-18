const express = require('express');

const { discoverController, authController } = require('../controllers');

const router = express.Router();

router.get('/getRecommendUsers', authController.isAuth, discoverController.getRecommendUsers);

module.exports = router;
