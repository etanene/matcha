const express = require('express');

const userRouter = require('./userRouter');
const authRouter = require('./authRouter');
const profileRouter = require('./profileRouter');
const tagRouter = require('./tagRouter');
const discoverRouter = require('./discoverRouter');
const chatRouter = require('./chatRouter');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send('Alive!');
});

router.use('/user', userRouter);
router.use('/auth', authRouter);
router.use('/profile', profileRouter);
router.use('/tag', tagRouter);
router.use('/discover', discoverRouter);
router.use('/chat', chatRouter);

module.exports = router;
