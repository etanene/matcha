const express = require('express');

const userRouter = require('./userRouter');
const authRouter = require('./authRouter');
const profileRouter = require('./profileRouter');
const tagRouter = require('./tagRouter');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send('Alive!');
});

router.use('/user', userRouter);
router.use('/auth', authRouter);
router.use('/profile', profileRouter);
router.use('/tag', tagRouter);

module.exports = router;
